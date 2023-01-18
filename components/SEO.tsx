import React from "react";
import Head from "next/head";

interface SEO {
  title: string;
  keyword: string;
  description: string;
}

function SEO({ title, keyword, description }: SEO) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={`${description}`} />
      <meta name="keywords" content={`${keyword}`} />
    </Head>
  );
}

SEO.defaultProps = {
  title: "Kim's Blog",
  keyword: "default keyword",
  description: "nextjs tutorial blog by default",
};

export default SEO;
