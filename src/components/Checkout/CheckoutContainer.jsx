import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "context/cart/Cart";
import { formatPrice } from "helpers/formatting";

import { Container } from "styles";
import { ContentWrap } from "./CheckoutContainer.styles";

import Logo from "images/icons/2-SPAN.svg";

function CheckoutContainer(props) {
  const {
    cart: { lineItems, totalPrice, subTotal },
  } = useCart();

  return (
    <Container>
      <h1>Winkelwagentje.</h1>

      <ContentWrap>
        {lineItems.length ? (
          <div>
            {lineItems.map(({ node: item }) => {
              const image = item.variant.image;
              const src = image ? image.originalSrc : Logo;

              return (
                <Link
                  key={item.id}
                  to={`/product/${item.variant.product.handle}`}
                >
                  <div className="row" key={item.id}>
                    <img width={140} src={src} alt={`Product: ${item.title}`} />
                    <div className="row-content">
                      <div>
                        <h5>{item.title}</h5>
                      </div>
                      <p>Aantal: {item.quantity}</p>

                      {item.variant.selectedOptions &&
                        item.variant.selectedOptions.map((option) => {
                          return (
                            <p key={option.value}>
                              {option.name} : {option.value}
                            </p>
                          );
                        })}
                    </div>
                    <p style={{ marginLeft: "auto" }}>
                      {formatPrice(item.variant.priceV2.amount)}
                    </p>
                  </div>
                </Link>
              );
            })}

            <div className="total-prices">
              <div className="subtotal">Subtotaal: {subTotal}</div>
              <div className="total">Totaal: {totalPrice}</div>
            </div>
          </div>
        ) : (
          <h4>Sorry, het lijkt erop dat je winkelmandje leeg is!</h4>
        )}
      </ContentWrap>
    </Container>
  );
}

export default CheckoutContainer;
