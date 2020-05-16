import { useQuery } from "@apollo/react-hooks";
import { get } from "lodash";
import React from "react";

import { GET_SINGLE_COLLECTION } from "helpers/queries.graphql";

import Overview from "components/shared/Overview/Overview";

import { Container } from "styles";

function CategorySingle(props) {
  const { category_handle } = props.match.params;

  const { data, loading } = useQuery(GET_SINGLE_COLLECTION, {
    variables: {
      handle: category_handle,
    },
  });

  const category = get(data, "collectionByHandle");

  return (
    <div>
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
