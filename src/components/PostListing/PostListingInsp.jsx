import React from "react";
import { Link } from "gatsby";
import './PostListing.css';

class PostListingInsp extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        displayDate: postEdge.node.frontmatter.date,
        category: postEdge.node.frontmatter.category,
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
        <h2 className="post-listing__sub_title">💡 Inspiration 💡</h2>
        <p className="post-listing__sub_construct">Cette page est toujours en construction 🏗️ et ne contient pas encore d'articles. Mais promis, ils sont en cours d'écriture 💻 ☕</p>
        <div className="post-listing__container_sub">
            {/* Your post list here. */
            postList.map(post => {
            if (post.category === 'inspiration') {
            return (
                <div className="post-card" key={post.title}> 
                    <Link to={post.path} key={`${post.title}_insp`}>
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

export default PostListingInsp;
