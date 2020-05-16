import React from "react";

function VariantSelect({ variants, handleChange }) {
  return (
    <>
      <h4>Beschikbare varianten:</h4>
      <select onChange={handleChange}>
        {variants.map(({ node: variant }) => {
          const notInStock = variant.currentlyNotInStock;
          return (
            <option value={variant.id} key={variant.id} disabled={notInStock}>
              {variant.title}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default VariantSelect;
