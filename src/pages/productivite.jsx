import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListingProd from '../components/PostListing/PostLinstingProd';
import SEO from "../components/SEO/SEO";
import Header from '../components/Header/Header';
import config from "../../data/SiteConfig";

class Productivite extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <Header config={config}/>
          <PostListingProd postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default Productivite;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProdQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            category
          }
        }
      }
    }
  }
`;
