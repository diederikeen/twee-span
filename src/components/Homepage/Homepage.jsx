import { useQuery } from "@apollo/react-hooks";
import { get } from "lodash";
import React from "react";

import Overview from "components/shared/Overview/Overview";
import HtmlHead from "components/shared/htmlHead/HtmlHead";

import { PageTitle } from "./Homepage.styles";
import { Container } from "styles";

import { GET_COLLECTIONS } from "helpers/queries.graphql";

function Homepage() {
  const { data, loading } = useQuery(GET_COLLECTIONS);
  const collections = get(data, "collections");

  // console.log(collections.edges);

  return (
    <>
      <HtmlHead description="Alles voor uw aanspanning" />;
      <Container>
        <PageTitle>Bekijk hier onze categorieën</PageTitle>
        {!loading && <Overview items={collections.edges} />}
      </Container>
    </>
  );
}

export default Homepage;
