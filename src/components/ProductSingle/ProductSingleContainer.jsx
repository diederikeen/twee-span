import { useQuery } from "@apollo/react-hooks";
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

  return (
    <ToasterContextProvider>
      <Container>
        {!loading && <ProductSingleView product={data.productByHandle} />}
      </Container>
    </ToasterContextProvider>
  );
}

export default ProductSingleContainer;
