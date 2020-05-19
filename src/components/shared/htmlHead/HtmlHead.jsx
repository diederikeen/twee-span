import React from "react";
import { Helmet } from "react-helmet";

const HTMLHead = ({ title, description }) => {
  const canonicalUrl = window.location.host + window.location.pathname;

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        {"2-Span"} {title ? `| ${title}` : " | Alles voor uw aanspanning"}
      </title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default HTMLHead;
