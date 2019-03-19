import React from "react";
import PageTransition from 'gatsby-plugin-page-transitions';
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
     <PageTransition>
        <Layout>
        <div class="index-container">
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <Header config={config}/>
          <div className="post-container">
            <img className="post-container__hero" src={post.cover} />
            <h1 className="post-container__title">{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-meta">
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
            <UserInfo config={config} />
            <Disqus postNode={postNode} />
          </div>
          <Footer config={config} />
        </div>
      </Layout>
     </PageTransition>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`;
