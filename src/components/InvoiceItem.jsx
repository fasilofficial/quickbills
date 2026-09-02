import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { BiTrash, BiPlus } from "react-icons/bi";
import EditableField from "./EditableField";

const InvoiceItem = ({
  items,
  onItemizedItemEdit,
  currency,
  onRowDel,
  onRowAdd,
}) => {
  return (
    <div className="qb-invoice-items-wrapper">
      <div className="table-responsive">
        <Table className="align-middle mb-2">
          <thead className="table-light">
            <tr>
              <th style={{ minWidth: "240px" }}>ITEM & DESCRIPTION</th>
              <th style={{ width: "95px" }}>QTY</th>
              <th style={{ width: "135px" }} className="text-end">
                PRICE / RATE
              </th>
              <th style={{ width: "110px" }} className="text-end">
                AMOUNT
              </th>
              <th style={{ width: "48px" }} className="text-center">
                <span className="visually-hidden">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const lineAmount = (
                (parseFloat(item.price) || 0) * (parseFloat(item.quantity) || 0)
              ).toFixed(2);
              return (
                <ItemRow
                  key={item.id}
                  item={item}
                  lineAmount={lineAmount}
                  onItemizedItemEdit={onItemizedItemEdit}
                  onDelEvent={onRowDel}
                  currency={currency}
                  canDelete={items.length > 1}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
      <div className="pt-2">
        <Button
          variant="outline-primary"
          className="d-inline-flex align-items-center gap-1 fw-medium px-3 py-2"
          onClick={onRowAdd}
          type="button"
        >
          <BiPlus size={18} />
          <span>Add Line Item</span>
        </Button>
      </div>
    </div>
  );
};

const ItemRow = ({
  item,
  lineAmount,
  onItemizedItemEdit,
  onDelEvent,
  currency,
  canDelete,
}) => {
  const handleDelete = () => {
    onDelEvent(item);
  };

  return (
    <tr className="qb-item-row">
      <td>
        <EditableField
          onItemizedItemEdit={onItemizedItemEdit}
          cellData={{
            type: "text",
            name: "name",
            placeholder: "Item name / Title",
            value: item.name,
            id: item.id,
            ariaLabel: "Item name",
          }}
        />
        <EditableField
          onItemizedItemEdit={onItemizedItemEdit}
          cellData={{
            type: "text",
            name: "description",
            placeholder: "Description or deliverable notes",
            value: item.description,
            id: item.id,
            ariaLabel: "Item description",
            required: false,
          }}
        />
      </td>
      <td>
        <EditableField
          onItemizedItemEdit={onItemizedItemEdit}
          cellData={{
            type: "number",
            name: "quantity",
            min: "0.01",
            step: "any",
            value: item.quantity,
            id: item.id,
            textAlign: "text-center",
            ariaLabel: "Quantity",
          }}
        />
      </td>
      <td>
        <EditableField
          onItemizedItemEdit={onItemizedItemEdit}
          cellData={{
            leading: currency,
            type: "number",
            name: "price",
            min: "0",
            step: "0.01",
            precision: 2,
            textAlign: "text-end",
            value: item.price,
            id: item.id,
            ariaLabel: "Price per unit",
          }}
        />
      </td>
      <td className="text-end fw-semibold text-secondary">
        {currency}
        {lineAmount}
      </td>
      <td className="text-center">
        <Button
          variant="light"
          size="sm"
          onClick={handleDelete}
          disabled={!canDelete}
          className="text-danger p-1 border-0 rounded-circle"
          title={canDelete ? "Remove item" : "At least one item is required"}
          aria-label="Remove item"
        >
          <BiTrash size={18} />
        </Button>
      </td>
    </tr>
  );
};

export default InvoiceItem;
