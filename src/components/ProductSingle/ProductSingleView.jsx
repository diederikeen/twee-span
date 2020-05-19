import { useMutation } from "@apollo/react-hooks";
import { isNil } from "lodash";
import lscache from "lscache";
import React, { useState } from "react";

import { useCart } from "context/cart/Cart";
import { useToaster } from "context/toaster/Toaster";
import HtmlHead from "components/shared/htmlHead/HtmlHead";

import { formatPrice } from "helpers/formatting";

import Gallery from "./components/Gallery/Gallery";
import VariantsSelect from "./components/VariantsSelect/VariantsSelect";
import QuantitySelect from "./components/QuantitySelect/QuantitySelect";

import { CREATE_CHECKOUT, UPDATE_CHECKOUT } from "helpers/queries.graphql";

import { Details, Price, Description } from "./ProductSingle.style";
import { useEffect } from "react";

const HOUR = 60 * 60 * 1000;

/**
 * if there is not a checkout id, but someone adds an item to the basked, without buying instantly,
 * we get a response back from the mutation as createCheckoutData
 *
 * if there is already a checkout id created we get it back from a different mutation as cartData.
 *
 * both these objects contain the right amount of quantity
 */

function ProductSingleView({ product, metaDescription }) {
  const { setItems, setSubtotal } = useCart();
  const { Toaster, setToaster, hideToaster } = useToaster();

  const images = product.images;
  const variants = product.variants.edges;
  const firstVariant = variants[0];
  const hasMultipleVariants = variants.length >= 2;
  const checkoutId = lscache.get("checkoutId");

  const [selectedVariant, setSelectedVariant] = useState(firstVariant);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [directBuy, setDirectBuy] = useState(false);

  const outOfStock =
    selectedVariant && selectedVariant.node.quantityAvailable === 0;

  const disabled =
    outOfStock || selectedQuantity > selectedVariant.node.quantityAvailable;

  function onVariantChange({ target }) {
    const val = target.value;
    const chosenOption = variants.find(
      ({ node: variant }) => variant.id === val
    );
    setSelectedVariant(chosenOption);
  }

  function getPayload() {
    return [
      {
        quantity: selectedQuantity,
        variantId: selectedVariant.node.id,
      },
    ];
  }
  const [
    createCheckout,
    { data: createCheckoutData, loading: createLoading, error: createError },
  ] = useMutation(CREATE_CHECKOUT, {
    onCompleted: () => {
      setToaster({
        content: "Product succesvol toegevoegd!",
        type: "success",
      });

      setTimeout(() => hideToaster(), 2000);
    },
    variables: {
      input: {
        lineItems: getPayload(),
      },
    },
  });

  const [
    updateCart,
    { data: updateCartData, loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_CHECKOUT, {
    onCompleted: () => {
      setToaster({
        content: "Product succesvol toegevoegd!",
        type: "success",
      });

      setTimeout(() => hideToaster(), 2000);
    },
    variables: {
      lineItems: getPayload(),
      checkoutId,
    },
  });

  // handle initial create
  useEffect(() => {
    if (createCheckoutData && !createLoading) {
      setItems(createCheckoutData.checkoutCreate.checkout.lineItems.edges);
      setSubtotal(
        createCheckoutData.checkoutCreate.checkout.subtotalPriceV2.amount
      );
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createCheckoutData, createLoading]);

  // handle the update effect
  useEffect(() => {
    if (updateCartData && !updateLoading) {
      setItems(updateCartData.checkoutLineItemsAdd.checkout.lineItems.edges);

      setSubtotal(
        updateCartData.checkoutLineItemsAdd.checkout.subtotalPriceV2.amount
      );
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateCartData, updateLoading]);

  if (createCheckoutData && !createLoading) {
    const { checkout } = createCheckoutData.checkoutCreate;
    if (isNil(checkoutId)) {
      lscache.set("checkoutId", checkout.id, HOUR);
    }

    if (directBuy) {
      window.open(checkout.webUrl, "_blank");
      setDirectBuy(false);
    }
  }

  const handleDirectBuy = (bool = true) => {
    setDirectBuy(bool);
    createCheckout();
  };

  const handleAddToCart = () => {
    checkoutId ? updateCart() : handleDirectBuy(false);
  };

  return (
    <div className="wrap">
      <HtmlHead title={product.title} description={metaDescription} />
      <Toaster />
      <div className="flex">
        <div>
          <Gallery images={images} />
        </div>
        <Details>
          <h1>{product.title}</h1>

          <Price>
            <span>Prijs: </span>
            {formatPrice(selectedVariant.node.priceV2.amount, 2)}
          </Price>

          {product.description && (
            <Description>
              <h4 style={{ marginBottom: "-1rem" }}>Beschrijving</h4>
              <p style={{ fontStyle: "italic" }}>{product.description}</p>
            </Description>
          )}

          {hasMultipleVariants && (
            <VariantsSelect
              variants={variants}
              handleChange={onVariantChange}
            />
          )}

          <QuantitySelect
            max={selectedVariant.node.quantityAvailable}
            onChange={setSelectedQuantity}
          />

          {outOfStock && <p style={{ color: "red" }}>OUT OF STOCK</p>}

          <div style={{ marginTop: "2rem" }}>
            <button
              disabled={disabled}
              className="primary"
              onClick={handleDirectBuy}
            >
              Direct kopen
            </button>

            <button
              disabled={disabled}
              className="secondary"
              onClick={handleAddToCart}
              style={{ marginLeft: "1rem" }}
            >
              Toevoegen aan winkelwagen
            </button>
          </div>
        </Details>
      </div>
    </div>
  );
}

export default ProductSingleView;
