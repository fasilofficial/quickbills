import React, { useState, useEffect, useCallback } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import { BiFile, BiCheckCircle, BiReset } from "react-icons/bi";
import InvoiceItem from "./InvoiceItem";
import InvoiceModal from "./InvoiceModal";

const InvoiceForm = ({ initialData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currency, setCurrency] = useState(initialData?.currency || "$");
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [invoiceNumber, setInvoiceNumber] = useState(
    initialData?.invoiceNumber || 1
  );
  const [dateOfIssue, setDateOfIssue] = useState(
    initialData?.dateOfIssue ||
      new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0]
  );
  const [billTo, setBillTo] = useState(initialData?.billTo || "");
  const [billToEmail, setBillToEmail] = useState(initialData?.billToEmail || "");
  const [billToAddress, setBillToAddress] = useState(
    initialData?.billToAddress || ""
  );
  const [billFrom, setBillFrom] = useState(initialData?.billFrom || "");
  const [billFromEmail, setBillFromEmail] = useState(
    initialData?.billFromEmail || ""
  );
  const [billFromAddress, setBillFromAddress] = useState(
    initialData?.billFromAddress || ""
  );
  const [notes, setNotes] = useState(
    initialData?.notes ||
      "Thank you for doing business with us. Please settle payment according to the agreed terms."
  );
  const [total, setTotal] = useState("0.00");
  const [subTotal, setSubTotal] = useState("0.00");
  const [taxRate, setTaxRate] = useState(initialData?.taxRate ?? "");
  const [taxAmount, setTaxAmount] = useState("0.00");
  const [discountRate, setDiscountRate] = useState(
    initialData?.discountRate ?? ""
  );
  const [discountAmount, setDiscountAmount] = useState("0.00");

  const [items, setItems] = useState(
    initialData?.items && initialData.items.length > 0
      ? initialData.items
      : [
          {
            id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
            name: "",
            description: "",
            price: "1.00",
            quantity: 1,
          },
        ]
  );

  // Sync when initialData changes (e.g. user selects a template)
  useEffect(() => {
    if (initialData) {
      if (initialData.billFrom !== undefined) setBillFrom(initialData.billFrom);
      if (initialData.billFromEmail !== undefined)
        setBillFromEmail(initialData.billFromEmail);
      if (initialData.billFromAddress !== undefined)
        setBillFromAddress(initialData.billFromAddress);
      if (initialData.billTo !== undefined) setBillTo(initialData.billTo);
      if (initialData.billToEmail !== undefined)
        setBillToEmail(initialData.billToEmail);
      if (initialData.billToAddress !== undefined)
        setBillToAddress(initialData.billToAddress);
      if (initialData.notes !== undefined) setNotes(initialData.notes);
      if (initialData.taxRate !== undefined) setTaxRate(initialData.taxRate);
      if (initialData.discountRate !== undefined)
        setDiscountRate(initialData.discountRate);
      if (initialData.currency !== undefined) setCurrency(initialData.currency);
      if (initialData.items && initialData.items.length > 0)
        setItems(initialData.items);
    }
  }, [initialData]);

  const handleCalculateTotal = useCallback(() => {
    let rawSubTotal = items.reduce((acc, item) => {
      const price = parseFloat(item.price) || 0;
      const qty = parseFloat(item.quantity) || 0;
      return acc + price * qty;
    }, 0);

    const safeSubTotal = Math.max(0, rawSubTotal);
    const parsedDiscountRate = parseFloat(discountRate) || 0;
    const rawDiscountAmount = safeSubTotal * (parsedDiscountRate / 100);
    const taxableBase = Math.max(0, safeSubTotal - rawDiscountAmount);
    const parsedTaxRate = parseFloat(taxRate) || 0;
    const rawTaxAmount = taxableBase * (parsedTaxRate / 100);
    const rawTotal = safeSubTotal - rawDiscountAmount + rawTaxAmount;

    setSubTotal(safeSubTotal.toFixed(2));
    setDiscountAmount(rawDiscountAmount.toFixed(2));
    setTaxAmount(rawTaxAmount.toFixed(2));
    setTotal(Math.max(0, rawTotal).toFixed(2));
  }, [items, taxRate, discountRate]);

  useEffect(() => {
    handleCalculateTotal();
  }, [handleCalculateTotal]);

  const handleRowDel = (item) => {
    if (items.length > 1) {
      const updatedItems = items.filter((i) => i.id !== item.id);
      setItems(updatedItems);
    }
  };

  const handleAddEvent = () => {
    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const newItem = {
      id,
      name: "",
      price: "1.00",
      description: "",
      quantity: 1,
    };
    setItems([...items, newItem]);
  };

  const onItemizedItemEdit = (evt) => {
    const { id, name, value } = evt.target;
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, [name]: value } : item
    );
    setItems(updatedItems);
  };

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleReset = () => {
    if (
      window.confirm("Are you sure you want to reset this invoice form?")
    ) {
      setBillFrom("");
      setBillFromEmail("");
      setBillFromAddress("");
      setBillTo("");
      setBillToEmail("");
      setBillToAddress("");
      setNotes("Thank you for doing business with us.");
      setTaxRate("");
      setDiscountRate("");
      setInvoiceNumber(1);
      setDateOfIssue("");
      setItems([
        {
          id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
          name: "",
          description: "",
          price: "1.00",
          quantity: 1,
        },
      ]);
    }
  };

  const openModal = (event) => {
    event.preventDefault();
    handleCalculateTotal();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="qb-invoice-generator-container w-100">
      <Form onSubmit={openModal}>
        <Row className="g-4">
          {/* Main Invoice Card (Left) */}
          <Col lg={8} xl={9}>
            <Card className="border shadow-sm rounded-3 overflow-hidden bg-white">
              <Card.Header className="bg-white border-bottom p-3 p-md-4 d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3">
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-primary rounded-pill p-2 text-white">
                    <BiFile size={18} />
                  </span>
                  <div>
                    <h2 className="h5 fw-bold m-0 text-dark">Invoice Details</h2>
                    <span className="text-muted small">
                      Fill out your billable items and client details
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={handleReset}
                    type="button"
                    className="d-inline-flex align-items-center gap-1"
                    title="Clear and reset form"
                  >
                    <BiReset size={16} />
                    <span>Reset</span>
                  </Button>
                </div>
              </Card.Header>

              <Card.Body className="p-3 p-md-4 p-xl-5">
                {/* Meta Dates & Invoice Number */}
                <div className="bg-light border rounded-3 p-3 mb-4">
                  <Row className="g-3 align-items-center">
                    <Col xs={12} sm={4}>
                      <Form.Group controlId="currentDate">
                        <Form.Label className="fw-semibold text-dark small mb-1">
                          Invoice Date
                        </Form.Label>
                        <Form.Control
                          type="date"
                          value={currentDate}
                          onChange={handleChange(setCurrentDate)}
                          className="bg-white border"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} sm={4}>
                      <Form.Group controlId="dateOfIssue">
                        <Form.Label className="fw-semibold text-dark small mb-1">
                          Due Date
                        </Form.Label>
                        <Form.Control
                          type="date"
                          value={dateOfIssue}
                          name="dateOfIssue"
                          onChange={handleChange(setDateOfIssue)}
                          className="bg-white border"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} sm={4}>
                      <Form.Group controlId="invoiceNumber">
                        <Form.Label className="fw-semibold text-dark small mb-1">
                          Invoice Number
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Text className="bg-white border-end-0 text-muted small">
                            #
                          </InputGroup.Text>
                          <Form.Control
                            type="number"
                            value={invoiceNumber}
                            name="invoiceNumber"
                            onChange={handleChange(setInvoiceNumber)}
                            min="1"
                            className="bg-white border-start-0"
                            required
                          />
                        </InputGroup>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>

                {/* Parties (Bill From & Bill To) */}
                <Row className="gy-4 mb-4">
                  <Col md={6}>
                    <div className="border rounded-3 p-3 h-100 bg-light-subtle">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <Form.Label className="fw-bold text-dark m-0 fs-6">
                          Bill From (Your Details)
                        </Form.Label>
                        <span className="badge bg-secondary-subtle text-secondary small">Seller</span>
                      </div>
                      <Form.Group className="mb-2">
                        <Form.Control
                          placeholder="Your business or personal name"
                          value={billFrom}
                          type="text"
                          name="billFrom"
                          onChange={handleChange(setBillFrom)}
                          autoComplete="name"
                          className="bg-white border"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Control
                          placeholder="Email address (e.g. contact@business.com)"
                          value={billFromEmail}
                          type="email"
                          name="billFromEmail"
                          onChange={handleChange(setBillFromEmail)}
                          autoComplete="email"
                          className="bg-white border"
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          placeholder="Billing address, city, tax ID"
                          value={billFromAddress}
                          as="textarea"
                          rows={2}
                          name="billFromAddress"
                          autoComplete="address"
                          onChange={handleChange(setBillFromAddress)}
                          className="bg-white border"
                          required
                        />
                      </Form.Group>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="border rounded-3 p-3 h-100 bg-light-subtle">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <Form.Label className="fw-bold text-dark m-0 fs-6">
                          Bill To (Client Details)
                        </Form.Label>
                        <span className="badge bg-primary-subtle text-primary small">Client</span>
                      </div>
                      <Form.Group className="mb-2">
                        <Form.Control
                          placeholder="Client company or individual name"
                          value={billTo}
                          type="text"
                          name="billTo"
                          onChange={handleChange(setBillTo)}
                          autoComplete="name"
                          className="bg-white border"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Control
                          placeholder="Client email address"
                          value={billToEmail}
                          type="email"
                          name="billToEmail"
                          onChange={handleChange(setBillToEmail)}
                          autoComplete="email"
                          className="bg-white border"
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          placeholder="Client physical/mailing address"
                          value={billToAddress}
                          as="textarea"
                          rows={2}
                          name="billToAddress"
                          autoComplete="address"
                          onChange={handleChange(setBillToAddress)}
                          className="bg-white border"
                          required
                        />
                      </Form.Group>
                    </div>
                  </Col>
                </Row>

                {/* Items Table */}
                <div className="mb-4">
                  <h3 className="h6 fw-bold text-dark mb-3 text-uppercase tracking-wider">
                    Line Items & Services
                  </h3>
                  <InvoiceItem
                    onItemizedItemEdit={onItemizedItemEdit}
                    onRowAdd={handleAddEvent}
                    onRowDel={handleRowDel}
                    currency={currency}
                    items={items}
                  />
                </div>

                {/* Totals Calculation Summary */}
                <Row className="mt-4 justify-content-end">
                  <Col md={7} lg={6}>
                    <div className="bg-light border rounded-3 p-3">
                      <div className="d-flex justify-content-between py-1">
                        <span className="text-secondary fw-medium">Subtotal:</span>
                        <span className="fw-semibold text-dark">
                          {currency} {subTotal}
                        </span>
                      </div>
                      {parseFloat(discountRate) > 0 && (
                        <div className="d-flex justify-content-between py-1 text-success">
                          <span>Discount ({discountRate}%):</span>
                          <span>
                            - {currency} {discountAmount}
                          </span>
                        </div>
                      )}
                      {parseFloat(taxRate) > 0 && (
                        <div className="d-flex justify-content-between py-1 text-secondary">
                          <span>Tax ({taxRate}%):</span>
                          <span>
                            + {currency} {taxAmount}
                          </span>
                        </div>
                      )}
                      <div className="d-flex justify-content-between pt-2 border-top border-secondary-subtle mt-2">
                        <span className="fw-bold fs-5 text-dark">Total:</span>
                        <span className="fw-bold fs-5 text-primary">
                          {currency} {total}
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>

                {/* Notes & Terms */}
                <div className="mt-4 pt-3 border-top">
                  <Form.Label className="fw-bold text-dark small mb-1">
                    Payment Terms, Bank Coordinates, or Client Note:
                  </Form.Label>
                  <Form.Control
                    placeholder="Enter payment instructions, bank routing/IBAN numbers, or a friendly thank you note..."
                    name="notes"
                    value={notes}
                    onChange={handleChange(setNotes)}
                    as="textarea"
                    rows={3}
                    className="bg-white border"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Action & Configuration Panel (Right Sidebar) */}
          <Col lg={4} xl={3}>
            <div className="sticky-top" style={{ top: "85px" }}>
              <Card className="border shadow-sm rounded-3 bg-white p-3 p-xl-4 mb-3">
                <h3 className="h6 fw-bold text-dark mb-3">Invoice Settings</h3>

                {/* Currency Selection */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold text-dark small mb-1">
                    Currency:
                  </Form.Label>
                  <Form.Select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="bg-light border"
                    aria-label="Currency"
                  >
                    <option value="$">USD - US Dollar ($)</option>
                    <option value="€">EUR - Euro (€)</option>
                    <option value="£">GBP - British Pound (£)</option>
                    <option value="₹">INR - Indian Rupee (₹)</option>
                    <option value="CAD $">CAD - Canadian Dollar ($)</option>
                    <option value="AUD $">AUD - Australian Dollar ($)</option>
                    <option value="SGD $">SGD - Singapore Dollar ($)</option>
                    <option value="¥">JPY / CNY - Yen / Yuan (¥)</option>
                    <option value="₿">BTC - Bitcoin (₿)</option>
                  </Form.Select>
                </Form.Group>

                {/* Tax Rate */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold text-dark small mb-1">
                    Tax Rate (%):
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      name="taxRate"
                      type="number"
                      value={taxRate}
                      onChange={handleChange(setTaxRate)}
                      className="bg-light border"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      max="100"
                    />
                    <InputGroup.Text className="bg-light text-muted small">%</InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                {/* Discount Rate */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold text-dark small mb-1">
                    Discount Rate (%):
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      name="discountRate"
                      type="number"
                      value={discountRate}
                      onChange={handleChange(setDiscountRate)}
                      className="bg-light border"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      max="100"
                    />
                    <InputGroup.Text className="bg-light text-muted small">%</InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                {/* Review / Generate CTA */}
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  className="w-100 fw-bold py-2 mb-2 shadow-sm d-flex align-items-center justify-content-center gap-2"
                >
                  <BiCheckCircle size={20} />
                  <span>Review Invoice</span>
                </Button>

                <p className="text-muted text-center small m-0 mt-2" style={{ fontSize: "0.78rem" }}>
                  Preview formatted document, download PDF, or print directly.
                </p>
              </Card>

              {/* Trust Badge / Info Card */}
              <div className="bg-light border rounded-3 p-3 text-muted small">
                <div className="fw-semibold text-dark mb-1">Browser-Based & Private</div>
                <div>
                  QuickBills renders documents in your browser. None of your client details or prices are sent to external servers.
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Form>

      {/* Invoice Modal Preview */}
      <InvoiceModal
        showModal={isOpen}
        closeModal={closeModal}
        info={{
          dateOfIssue,
          invoiceNumber,
          billTo,
          billToEmail,
          billToAddress,
          billFrom,
          billFromEmail,
          billFromAddress,
          notes,
        }}
        items={items}
        currency={currency}
        subTotal={subTotal}
        taxAmount={taxAmount}
        taxRate={taxRate}
        discountAmount={discountAmount}
        discountRate={discountRate}
        total={total}
        currentDate={currentDate}
      />
    </div>
  );
};

export default InvoiceForm;
