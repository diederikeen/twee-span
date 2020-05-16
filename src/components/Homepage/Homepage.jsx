import { useQuery } from "@apollo/react-hooks";
import { get } from "lodash";
import React from "react";

import Overview from "components/shared/Overview/Overview";

import { PageTitle } from "./Homepage.styles";
import { Container } from "styles";

import { GET_COLLECTIONS } from "helpers/queries.graphql";

function Homepage() {
  const { data, loading } = useQuery(GET_COLLECTIONS);
  const collections = get(data, "collections");

  return (
    <Container>
      <PageTitle>Bekijk hier onze categorieën</PageTitle>
      {!loading && <Overview items={collections.edges} />}
    </Container>
  );
}

export default Homepage;
