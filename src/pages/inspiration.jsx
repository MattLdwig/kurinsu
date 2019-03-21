import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListingInsp from '../components/PostListing/PostListingInsp';
import SEO from "../components/SEO/SEO";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import config from "../../data/SiteConfig";

class Inspiration extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
            <Layout>
            <div className="index-container">
            <Helmet title={config.siteTitle} />
            <SEO />
            <Header config={config}/>
            <PostListingInsp postEdges={postEdges} />
            <Footer config={config}/>
            </div>
        </Layout>
    );
  }
}

export default Inspiration;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query InspQuery {
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
            description
          }
        }
      }
    }
  }
`;
