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
          const style = {background: 'url(' + post.cover + ')', backgroundPosition: 'top', backgroundSize: 'cover'}
          if (post === postList[0]) {
            return (
              <div className="post-card__hero" style={style} key={post.title}>
                <Link to={post.path} key={`${post.title}_post`} className="post-card__link">
                <p className="post-card__complementary">
                  <span className="post-card__tag">{post.tags}</span>
                  <span className="post-card__date">{post.displayDate}</span>
                </p> 
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
