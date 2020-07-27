const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        spacex {
          launchesPast {
            mission_name
            launch_date_local
            links {
              flickr_images
              wikipedia
            }
            launch_success
            id
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const postsPerPage = 12;
    const numPages = 3;

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/launches` : `/launches${i + 1}`,
        component: path.resolve("./src/templates/cardList.js"),
        context: {
          limit: postsPerPage,
          offset: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  });
};
