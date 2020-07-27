import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Layout from "../components/layout";

const CardList = ({ data }) => {
  console.log(data.spacex.launchesPast);
  return (
    <Layout>
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
};
