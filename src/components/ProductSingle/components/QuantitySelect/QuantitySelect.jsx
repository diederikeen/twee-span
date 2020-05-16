import React from "react";

function QuantitySelect({ max, onChange }) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h4>Hoeveelheid</h4>
      <input
        type="number"
        style={{ width: "100px" }}
        defaultValue={1}
        name="quantity"
        min={1}
        max={max}
        onChange={({ target }) => onChange(parseInt(target.value, 10))}
      />
    </div>
  );
}

export default QuantitySelect;
