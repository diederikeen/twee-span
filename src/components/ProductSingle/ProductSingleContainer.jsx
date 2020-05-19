import { useQuery } from "@apollo/react-hooks";
import { get } from "lodash";
import React from "react";

import { ToasterContextProvider } from "context/toaster/Toaster";

import ProductSingleView from "./ProductSingleView";

import { GET_SINGLE_PRODUCT } from "helpers/queries.graphql";
import { Container } from "styles";

function ProductSingleContainer(props) {
  const { product_handle } = props.match.params;

  const { data, loading } = useQuery(GET_SINGLE_PRODUCT, {
    variables: {
      handle: product_handle,
    },
  });

  const product = get(data, "productByHandle", {
    title: "",
    description: "",
  });

  const hasLocationState = props.location.state;

  const meta = {
    pageTitle: hasLocationState ? hasLocationState.title : product.title,
    pageDescription: hasLocationState.description
      ? hasLocationState.description
      : product.description,
  };

  return (
    <ToasterContextProvider>
      <Container>
        {!loading && (
          <ProductSingleView
            product={data.productByHandle}
            metaDescription={meta.pageDescription}
          />
        )}
      </Container>
    </ToasterContextProvider>
  );
}

export default ProductSingleContainer;
