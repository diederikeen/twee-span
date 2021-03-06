import { useQuery } from "@apollo/react-hooks";
import { get } from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { routes, renderRoutes } from "./helpers";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import CartBar from "./components/App/components/CartBar/CartBar";

import GlobalStyles from "./index.styles";
import { Container, Nav, Wrap } from "styles";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";

import { GET_COLLECTIONS } from "helpers/queries.graphql";
import { CartContextProvider } from "./context/cart/Cart";

import Logo from "./images/icons/2-SPAN.svg";

const client = new ApolloClient({
  uri: process.env.REACT_APP_SHOPIFY_URL,
  cache: new InMemoryCache(),

  headers: {
    Accept: "application/json",
    "X-Shopify-Storefront-Access-Token": process.env.REACT_APP_SHOPIFY,
  },

  onError: (err) => console.log(err),
});

function Header() {
  const { data, loading } = useQuery(GET_COLLECTIONS);

  const collections = get(data, "collections");

  return (
    <Nav>
      <Container className="flex flex-end items-center">
        <Link to="/" style={{ marginRight: "auto" }}>
          <div className="logo">
            <ReactSVG src={Logo} wrapper="div" />
          </div>
        </Link>

        <NavLink to="/" exact>
          Homepagina
        </NavLink>
        {!loading &&
          collections.edges.map(({ node: collection }) => (
            <NavLink
              key={collection.handle}
              to={{
                pathname: `/categorie/${collection.handle}`,
                state: { title: collection.title },
              }}
            >
              {collection.title}
            </NavLink>
          ))}
      </Container>
    </Nav>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartContextProvider>
        <ApolloProvider client={client}>
          <GlobalStyles />
          <CartBar />
          <Header />
          <Wrap>{renderRoutes(routes)}</Wrap>
        </ApolloProvider>
      </CartContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
