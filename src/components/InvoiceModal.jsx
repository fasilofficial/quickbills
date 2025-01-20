import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { BiCloudDownload } from "react-icons/bi";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import QRCode from "qrcode";
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
=======
>>>>>>> Stashed changes

const GenerateInvoice = () => {
  const paymentLink = "https://buy.stripe.com/bIY2bG6f31JRdqMbIL"; // Your Stripe Payment Link

  html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
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

    // Add Stripe payment link as text
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.text("Pay Online:", 50, pdfHeight + 30);
    pdf.setTextColor(0, 0, 255); // Make the link blue
    pdf.textWithLink(paymentLink, 120, pdfHeight + 30, { url: paymentLink });

    // Generate QR code
    QRCode.toDataURL(paymentLink, { width: 100 }, (err, url) => {
      if (!err) {
        // Add QR code to PDF
        pdf.addImage(url, "PNG", 50, pdfHeight + 50, 100, 100); // Adjust position and size
        pdf.save("invoice-001.pdf");
      } else {
        console.error("QR Code generation failed:", err);
      }
    });
  });
};
>>>>>>> 7917b9266675d9d6e09ce2767ec7cb3ef934d333



const InvoiceModal = ({
  showModal,
  closeModal,
  info,
  currency,
  total,
  items,
  taxAmount,
  discountAmount,
  subTotal,
}) => {
  const invoiceRef = useRef();

  // Generate Invoice PDF
  const GenerateInvoice = async () => {
    const paymentLink = "https://buy.stripe.com/bIY2bG6f31JRdqMbIL"; // Stripe Payment Link

    // Capture the full content of the invoice
    const canvas = await html2canvas(invoiceRef.current, {
      scale: 2, // Improves quality
      useCORS: true, // Ensures cross-origin resources load
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.2); // Lower quality to 20%
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4", // Use A4 size for proper scaling
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    if (pdfHeight > pdf.internal.pageSize.getHeight()) {
      // Handle multi-page PDF if content is too long
      let position = 0;
      while (position < canvas.height) {
        pdf.addImage(
          imgData,
          "JPEG",
          0,
          -position, // Offset for multi-page
          pdfWidth,
          pdfHeight
        );
        position += pdf.internal.pageSize.getHeight();
        if (position < canvas.height) {
          pdf.addPage();
        }
      }
    } else {
      // Single page
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
    }

    // Add payment link and QR code
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.text("Pay Online:", 50, pdfHeight + 30);
    pdf.setTextColor(0, 0, 255);
    pdf.textWithLink(paymentLink, 120, pdfHeight + 30, { url: paymentLink });

    const qrCodeUrl = await QRCode.toDataURL(paymentLink, { width: 100 });
    pdf.addImage(qrCodeUrl, "PNG", 50, pdfHeight + 50, 100, 100);

    pdf.save("invoice-001.pdf");
    return pdf.output("datauristring"); // Return base64 string
  };

  // Send Invoice via Email
  const SendInvoiceEmail = async () => {
    const pdfBase64 = await GenerateInvoice();
    const recipientEmail = info.billToEmail || ""; // Email from `info`

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: recipientEmail,
        subject: "Invoice from Your Company",
        message: "Please find your invoice attached.",
        attachment: pdfBase64, // Base64-encoded PDF
      }),
    });

    if (response.ok) {
      alert("Invoice sent successfully!");
    } else {
      alert("Failed to send invoice.");
    }
  };

  return (
    <div>
      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <div id="invoiceCapture" ref={invoiceRef}>
          {/* Header */}
          <div className="d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4">
            <div className="w-100">
              <img
<<<<<<< Updated upstream
                src="./logo.png" // Replace with the actual path or URL of the logo
=======
<<<<<<< HEAD
                src="./logo.png"
=======
                src="./logo.png" // Replace with the actual path or URL of the logo
>>>>>>> 7917b9266675d9d6e09ce2767ec7cb3ef934d333
>>>>>>> Stashed changes
                alt="Company Logo"
                style={{ height: "50px", marginBottom: "10px" }}
              />
              <h4 className="fw-bold my-2">{info.billFrom || "John Uberbacher"}</h4>
              <h6 className="fw-bold text-secondary mb-1">
                Invoice Number: {info.invoiceNumber || ""}
              </h6>
            </div>
            <div className="text-end ms-4">
              <h6 className="fw-bold mt-1 mb-2">Amount&nbsp;Due:</h6>
              <h5 className="fw-bold text-secondary">
                {currency} {total}
              </h5>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <Row className="mb-4">
              <Col md={4}>
                <div className="fw-bold">Billed From:</div>
                <div>{info.billFrom || ""}</div>
                <div>{info.billFromAddress || ""}</div>
                <div>{info.billFromEmail || ""}</div>
              </Col>
              <Col md={4}>
                <div className="fw-bold">Billed to:</div>
                <div>{info.billTo || ""}</div>
                <div>{info.billToAddress || ""}</div>
                <div>{info.billToEmail || ""}</div>
              </Col>
              <Col md={4}>
                <div className="fw-bold mt-2">Date Of Issue:</div>
                <div>{info.dateOfIssue || ""}</div>
              </Col>
            </Row>
            <Table className="mb-0">
              <thead>
                <tr>
                  <th>QTY</th>
                  <th>DESCRIPTION</th>
                  <th className="text-end">PRICE</th>
                  <th className="text-end">AMOUNT</th>
                </tr>
              </thead>
              <tbody>
<<<<<<< HEAD
                {items.map((item, i) => (
                  <tr id={i} key={i}>
                    <td style={{ width: "70px" }}>{item.quantity}</td>
                    <td>
                      {item.name} - {item.description}
                    </td>
                    <td className="text-end" style={{ width: "100px" }}>
                      {currency} {item.price}
                    </td>
                    <td className="text-end" style={{ width: "100px" }}>
                      {currency} {item.price * item.quantity}
                    </td>
                  </tr>
                ))}
=======
                {items.map((item, i) => {
                  return (
                    <tr id={i} key={i}>
                      <td style={{ width: "70px" }}>{item.quantity}</td>
                      <td>
                        {item.name} - {item.description}
                      </td>
                      <td className="text-end" style={{ width: "100px" }}>
                        {currency} {item.price}
                      </td>
                      <td className="text-end" style={{ width: "100px" }}>
                        {currency} {item.price * item.quantity}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <Table>
              <tbody>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="text-end">
                  <td></td>
                  <td className="fw-bold" style={{ width: "100px" }}>
                    SUBTOTAL
                  </td>
                  <td className="text-end" style={{ width: "100px" }}>
                    {currency} {subTotal}
                  </td>
                </tr>
                {taxAmount !== 0.0 && (
                  <tr className="text-end">
                    <td></td>
                    <td className="fw-bold" style={{ width: "100px" }}>
                      TAX
                    </td>
                    <td className="text-end" style={{ width: "100px" }}>
                        {currency} {taxAmount}
                    </td>
                  </tr>
                )}
                {discountAmount !== 0.0 && (
                  <tr className="text-end">
                    <td></td>
                    <td className="fw-bold" style={{ width: "100px" }}>
                      DISCOUNT
                    </td>
                    <td className="text-end" style={{ width: "100px" }}>
                        {currency} {discountAmount}
                    </td>
                  </tr>
                )}
                <tr className="text-end">
                  <td></td>
                  <td className="fw-bold" style={{ width: "100px" }}>
                    TOTAL
                  </td>
                  <td className="text-end" style={{ width: "100px" }}>
                        {currency} {total}
                  </td>
                </tr>
>>>>>>> 7917b9266675d9d6e09ce2767ec7cb3ef934d333
              </tbody>
            </Table>
          </div>
        </div>

        {/* Footer */}
        <div className="pb-4 px-4">
          <Row>
            <Col md={6}>
              <Button
                variant="outline-secondary"
                className="d-block w-100 mt-3 mt-md-0"
                onClick={SendInvoiceEmail}
              >
                Send Invoice via Email
              </Button>
            </Col>
            <Col md={6}>
              <Button
                variant="outline-primary"
                className="d-block w-100 mt-3 mt-md-0"
                onClick={GenerateInvoice}
              >
                <BiCloudDownload
                  style={{ width: "16px", height: "16px", marginTop: "-3px" }}
                  className="me-2"
                />
                Download Copy
              </Button>
            </Col>
          </Row>
        </div>
      </Modal>
    </div>
  );
};

export default InvoiceModal;