import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const EditableField = ({ cellData, onItemizedItemEdit }) => {
  return (
    <InputGroup className="my-1 flex-nowrap">
      {cellData.leading != null && (
        <InputGroup.Text className="bg-light fw-medium border text-secondary px-2">
          <span className="small text-muted">{cellData.leading}</span>
        </InputGroup.Text>
      )}
      <Form.Control
        className={`${cellData.textAlign || ""} qb-input`}
        type={cellData.type}
        placeholder={cellData.placeholder}
        min={cellData.min}
        max={cellData.max}
        name={cellData.name}
        id={cellData.id}
        value={cellData.value}
        step={cellData.step}
        precision={cellData.precision}
        aria-label={cellData.ariaLabel || cellData.name}
        onChange={onItemizedItemEdit}
        required={cellData.required !== false}
      />
    </InputGroup>
  );
};

export default EditableField;
