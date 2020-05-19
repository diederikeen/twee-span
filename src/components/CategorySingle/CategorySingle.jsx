import { useQuery } from "@apollo/react-hooks";
import { get } from "lodash";
import React from "react";

import { GET_SINGLE_COLLECTION } from "helpers/queries.graphql";

import Overview from "components/shared/Overview/Overview";

import { Container } from "styles";

import HtmlHead from "components/shared/htmlHead/HtmlHead";

function CategorySingle(props) {
  const { category_handle } = props.match.params;

  // const pageTitle = get(props, "location.state.title", "");
  // const pageDescription = get(props, "location.state.description", "");

  // console.log(props.location);

  const { data, loading } = useQuery(GET_SINGLE_COLLECTION, {
    variables: {
      handle: category_handle,
    },
  });

  const category = get(data, "collectionByHandle", {
    title: "",
    description: "",
  });

  const hasLocationState = props.location.state;

  const meta = {
    pageTitle: hasLocationState ? hasLocationState.title : category.title,
    pageDescription: hasLocationState.description
      ? hasLocationState.description
      : category.description,
  };

  return (
    <div>
      <HtmlHead title={meta.pageTitle} description={meta.pageDescription} />;
      <Container>
        {!loading && (
          <>
            <h1>{category.title}</h1>
            <Overview items={category.products.edges} type="product" />
          </>
        )}
      </Container>
    </div>
  );
}

export default CategorySingle;
