import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListingDev from '../components/PostListing/PostListingDev';
import SEO from "../components/SEO/SEO";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import config from "../../data/SiteConfig";

class Developpement extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <Header config={config}/>
          <PostListingDev postEdges={postEdges} />
          <Footer config={config}/>
        </div>
      </Layout>
    );
  }
}

export default Developpement;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query DevQuery {
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
