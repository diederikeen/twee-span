import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import { useCart } from "context/cart/Cart";

import { Wrap, CartWrap } from "./CartBar.styles";
import { Container } from "styles";

import CartIcon from "images/icons/cart.svg";

function CartBar() {
  const [hovered, setHovered] = useState(false);
  const { cart } = useCart();

  return (
    <Wrap>
      <Container>
        <div className="content">
          <CartWrap>
            <Link to="/checkout/">
              <ReactSVG
                src={CartIcon}
                style={{
                  width: 24,
                  display: "inline-block",
                  cursor: "pointer",
                }}
                onClick={() => setHovered(!hovered)}
              />
              <span className="count">
                <span>{cart.totalQuantity}</span>
              </span>
            </Link>
          </CartWrap>
          <span className="price">{cart.totalPrice}</span>
        </div>
      </Container>
    </Wrap>
  );
}

export default CartBar;
