import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

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

      <div className=" flex flex-wrap items-center justify-center">
        {data.spacex.launchesPast.map((launch) => (
          <div
            key={launch.id}
            className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs w-56 h-64  shadow-lg"
            style={{
              backgroundImage: `url(${
                launch.links.flickr_images[
                  Math.floor(Math.random() * launch.links.flickr_images.length)
                ]
              })`,
              backgroundSize: "100% 100%",
            }}
          >
            <div
              className="w-full h-full"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            />
            {/*contenedor de textos */}
            <div className="absolute text-white px-4 pb-6 bottom-0">
              <span className="block font-semibold text-xl -mb-1">
                {launch.mission_name}
              </span>

              <span className="block mb-2">
                <p>Lanzamiento:</p>
                {new Date(launch.launch_date_local).toLocaleString("es-MX", {
                  hour12: true,
                })}
              </span>

              {launch.launch_success === true ? (
                <span className="inline-block bg-accent rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  Exitosa
                </span>
              ) : (
                <span className="inline-block bg-failed rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  No Exitosa
                </span>
              )}

              {!launch.links.wikipedia ? (
                <div sytle={{ display: "none" }} />
              ) : (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ml-6">
                  <a href={launch.links.wikipedia}>Ver más</a>
                </span>
              )}
            </div>
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
