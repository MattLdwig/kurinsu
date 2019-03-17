import React from "react";
import { Link } from "gatsby";
import './PostListing.css';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        displayDate: postEdge.node.frontmatter.date,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="post-listing__container">
        {/* Your post list here. */
        postList.map(post => {
          const style = { background: 'linear-gradient(rgba(51,51,51,.1), rgba(51,51,51,1)), url(' + post.cover + ')'}
          if (post === postList[0]) {
            return (
              <div className="post-card__hero" style={style}>
              <p className="post-card__complementary">
                <span className="post-card__tag">{post.tags}</span>
                <span className="post-card__date">{post.displayDate}</span>
              </p> 
              <Link to={post.path} key={post.title}>
              <div className="post-card__info">
                <h1 className="post-card__hero-title">{post.title}</h1>
              </div>
              <div className="post-card__more">
                <span>LIRE L'ARTICLE</span>
              </div>
            </Link>
          </div>
            )   
          }
        })}
      </div>
    );
  }
}

export default PostListing;
