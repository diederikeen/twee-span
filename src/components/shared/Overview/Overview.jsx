import React from "react";
import { formatPrice } from "helpers/formatting";

import Logo from "images/icons/2-SPAN.svg";

import { Row, Column, Image, Link, CardTitle } from "./Overview.style";

function displayPrice({ minVariantPrice, maxVariantPrice }) {
  return (
    <>
      <span>{formatPrice(minVariantPrice.amount)}</span>
      <span>
        {minVariantPrice.amount !== maxVariantPrice.amount &&
          `- ${formatPrice(maxVariantPrice.amount)}`}
      </span>
    </>
  );
}

function getImage(item, type) {
  let image;
  if (type === "categorie") {
    image = item.image;
  } else if (type === "product") {
    image = item.images.edges.length ? item.images.edges[0].node : null;
  }

  return image;
}

function Overview({ items, type = "categorie" }) {
  return (
    <Row>
      {items.map(({ node: item }) => {
        const { handle, products, title, priceRange, id, description } = item;
        const image = getImage(item, type);
        return (
          <Column key={id}>
            <Link
              to={{
                pathname: `/${type}/${handle}`,
                state: { title, description },
              }}
            >
              <Image
                logoThumnail={!image}
                style={{
                  backgroundImage: `url(${image ? image.originalSrc : Logo})`,
                }}
              />
              <CardTitle>
                {title} {products && <span>({products.edges.length})</span>}
              </CardTitle>

              {priceRange && <p>{displayPrice(priceRange)}</p>}
            </Link>
          </Column>
        );
      })}
    </Row>
  );
}

export default Overview;
