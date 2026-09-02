import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { BiCloudDownload, BiPrinter, BiX } from "react-icons/bi";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const InvoiceModal = ({
  showModal,
  closeModal,
  info,
  currency,
  total,
  items,
  taxAmount,
  taxRate,
  discountAmount,
  discountRate,
  subTotal,
  currentDate,
}) => {
  const handleDownloadPdf = () => {
    const invoiceElement = document.querySelector("#invoiceCapture");
    if (!invoiceElement) return;

    html2canvas(invoiceElement, {
      scale: 2,
      useCORS: true,
      logging: false,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: [612, 792],
      });
      pdf.internal.scaleFactor = 1;
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      const filename = `invoice-${info.invoiceNumber || "001"}.pdf`;
      pdf.save(filename);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const hasTax = parseFloat(taxAmount) > 0;
  const hasDiscount = parseFloat(discountAmount) > 0;

  return (
    <Modal show={showModal} onHide={closeModal} size="lg" centered dialogClassName="qb-invoice-modal">
      <Modal.Header className="d-flex justify-content-between align-items-center bg-light border-bottom px-4 py-3">
        <div className="d-flex align-items-center gap-2">
          <Modal.Title className="fs-5 fw-bold text-dark m-0">Invoice Preview</Modal.Title>
          <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-2">
            #{info.invoiceNumber || "1"}
          </span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={closeModal}
            className="d-flex align-items-center"
            aria-label="Close"
          >
            <BiX size={18} />
          </Button>
        </div>
      </Modal.Header>

      <Modal.Body className="p-0">
        <div id="invoiceCapture" className="google-anno-skip p-4 p-md-5 bg-white">
          {/* Invoice Header */}
          <div className="d-flex flex-row justify-content-between align-items-start border-bottom pb-4 mb-4">
            <div>
              <span className="text-uppercase tracking-wider fw-bold text-primary small d-block mb-1">
                Commercial Invoice
              </span>
              <h3 className="fw-bold text-dark mb-1">
                {info.billFrom || "Your Business Name"}
              </h3>
              <p className="text-muted small m-0">
                Invoice #: <span className="fw-semibold text-dark">{info.invoiceNumber || "1"}</span>
              </p>
            </div>
            <div className="text-end">
              <span className="text-muted small text-uppercase d-block">Amount Due</span>
              <h2 className="fw-bold text-dark m-0">
                {currency} {total}
              </h2>
            </div>
          </div>

          {/* Billing & Date Details */}
          <Row className="gy-3 mb-4">
            <Col sm={4}>
              <div className="text-uppercase text-muted fw-semibold small mb-1">Billed From</div>
              <div className="fw-bold text-dark">{info.billFrom || "—"}</div>
              {info.billFromAddress && (
                <div className="text-secondary small text-pre-wrap">{info.billFromAddress}</div>
              )}
              {info.billFromEmail && (
                <div className="text-secondary small">{info.billFromEmail}</div>
              )}
            </Col>
            <Col sm={4}>
              <div className="text-uppercase text-muted fw-semibold small mb-1">Billed To</div>
              <div className="fw-bold text-dark">{info.billTo || "—"}</div>
              {info.billToAddress && (
                <div className="text-secondary small text-pre-wrap">{info.billToAddress}</div>
              )}
              {info.billToEmail && (
                <div className="text-secondary small">{info.billToEmail}</div>
              )}
            </Col>
            <Col sm={4} className="text-sm-end">
              <div className="text-uppercase text-muted fw-semibold small mb-1">Invoice Dates</div>
              <div className="small text-secondary">
                <span className="fw-semibold text-dark">Invoice Date: </span>
                {currentDate || new Date().toLocaleDateString()}
              </div>
              {info.dateOfIssue && (
                <div className="small text-secondary mt-1">
                  <span className="fw-semibold text-dark">Due Date: </span>
                  {info.dateOfIssue}
                </div>
              )}
            </Col>
          </Row>

          {/* Items Table */}
          <div className="table-responsive mb-4">
            <Table className="align-middle border-top border-bottom">
              <thead className="table-light">
                <tr>
                  <th style={{ width: "8%" }} className="text-center">#</th>
                  <th>Description</th>
                  <th style={{ width: "12%" }} className="text-center">Qty</th>
                  <th style={{ width: "18%" }} className="text-end">Rate</th>
                  <th style={{ width: "20%" }} className="text-end">Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => {
                  const price = parseFloat(item.price) || 0;
                  const qty = parseFloat(item.quantity) || 0;
                  const lineTotal = (price * qty).toFixed(2);
                  return (
                    <tr key={item.id || i}>
                      <td className="text-center text-muted small">{i + 1}</td>
                      <td>
                        <div className="fw-semibold text-dark">{item.name || "Item"}</div>
                        {item.description && (
                          <div className="text-muted small">{item.description}</div>
                        )}
                      </td>
                      <td className="text-center">{qty}</td>
                      <td className="text-end">
                        {currency} {price.toFixed(2)}
                      </td>
                      <td className="text-end fw-semibold">
                        {currency} {lineTotal}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>

          {/* Summary / Totals */}
          <Row className="justify-content-end mb-4">
            <Col xs={12} sm={7} md={6}>
              <div className="d-flex justify-content-between py-1 border-bottom border-light">
                <span className="text-secondary">Subtotal:</span>
                <span className="fw-medium text-dark">
                  {currency} {subTotal}
                </span>
              </div>
              {hasDiscount && (
                <div className="d-flex justify-content-between py-1 border-bottom border-light text-success">
                  <span>Discount ({discountRate}%):</span>
                  <span>
                    - {currency} {discountAmount}
                  </span>
                </div>
              )}
              {hasTax && (
                <div className="d-flex justify-content-between py-1 border-bottom border-light text-secondary">
                  <span>Tax ({taxRate}%):</span>
                  <span>
                    + {currency} {taxAmount}
                  </span>
                </div>
              )}
              <div className="d-flex justify-content-between pt-2 border-top border-2 mt-2">
                <span className="fw-bold fs-5 text-dark">Total Due:</span>
                <span className="fw-bold fs-5 text-primary">
                  {currency} {total}
                </span>
              </div>
            </Col>
          </Row>

          {/* Notes & Terms */}
          {info.notes && (
            <div className="border-top pt-3 mt-3">
              <span className="text-uppercase text-muted fw-semibold small d-block mb-1">
                Payment Terms & Notes
              </span>
              <p className="text-secondary small m-0 text-pre-wrap">{info.notes}</p>
            </div>
          )}
        </div>
      </Modal.Body>

      <Modal.Footer className="bg-light px-4 py-3 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
        <span className="text-muted small">
          Review your details carefully before sending to your client.
        </span>
        <div className="d-flex align-items-center gap-2 w-100 w-sm-auto justify-content-end">
          <Button
            variant="outline-secondary"
            onClick={handlePrint}
            className="d-inline-flex align-items-center gap-1"
          >
            <BiPrinter size={18} />
            <span>Print</span>
          </Button>
          <Button
            variant="primary"
            onClick={handleDownloadPdf}
            className="d-inline-flex align-items-center gap-1"
          >
            <BiCloudDownload size={18} />
            <span>Download PDF</span>
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default InvoiceModal;
