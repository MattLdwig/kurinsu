import React from "react";
import { Link } from "gatsby";
import Newsletter from '../Newsletter/Newsletter';
import './PostListing.css';

class PostListingSub extends React.Component {
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
      <section className="post-listing__sub">
        <h2 className="post-listing__sub_title">DERNIERS ARTICLES</h2>
        <div className="post-listing__container_sub">
            {/* Your post list here. */
            postList.map(post => {
            if (post === postList[1] || post === postList[2] || post === postList[3]) {
            return (
                <div className="post-card" key={post.title}> 
                    <Link to={post.path} key={`${post.title}_sub`}>
                        <img src={post.cover} className={'post-cover'} />
                        <h2 className="post-card__title">{post.title}</h2>
                        <p className="post-card__date-sub">{post.displayDate}</p>
                    </Link>
                </div>
                )   
          }
        })}
        </div>
        <Newsletter />
        <div className="post-listing__container_sub">
            {/* Your post list here. */
            postList.map(post => {
            if (post !== postList[0] && post !== postList[1] && post !== postList[2] && post !== postList[3]) {
            return (
                <div className="post-card" key={post.title}> 
                    <Link to={post.path} key={`${post.title}_sub`}>
                        <img src={post.cover} className={'post-cover'} />
                        <h2 className="post-card__title">{post.title}</h2>
                        <p className="post-card__date-sub">{post.displayDate}</p>
                    </Link>
                </div>
                )   
          }
        })}
        </div>
      </section>
    );
  }
}

export default PostListingSub;
