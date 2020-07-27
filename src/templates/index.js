import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

const CardList = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : "/2";
  const nextPage = currentPage === 2 ? "/3" : (currentPage + 1).toString();

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Hey there! Welcome to your first Gatsby site.
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold text-gray-900 no-underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          , a utility-first CSS framework.
        </p>
      </section>
      <div>
        {data.spacex.launchesPast.map((launch) => (
          <div key={launch.id}>
            <p>{launch.mission_name}</p>
            <a>{launch.links.wikipedia}</a>
            <p>{launch.launch_date_local}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default CardList;

export const cardListQuery = graphql`
  query cardListQuery($limit: Int!, $offset: Int!) {
    spacex {
      launchesPast(limit: $limit, offset: $offset) {
        id
        launch_date_local
        mission_name
        launch_success
        links {
          wikipedia
          flickr_images
        }
      }
    }
  }
`;

CardList.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};
