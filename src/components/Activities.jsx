import React, { useState, useEffect } from "react";
import { fetchAllPosts, deletePostNow, fetchAllPostsByUser } from "../api";


const Posts = ({ isLoggedIn, setCurrentPage, setIsLoading }) => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(async () => {
    let data;
    setIsLoading(true);
    try{
      if(isLoggedIn) {
        data = await fetchAllPostsByUser();
      }
      else {
        data = await fetchAllPosts();
      }
    }
    catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
    setAllPosts(data.posts);
  }, []);

  return (
    <div className="posts-main-container">
      <h2>All Posts</h2>
      {allPosts.length
        ? allPosts.map((post) => {
            return post.active ? 
              <div className="all-cards">
                <div key={post._id} className="post-card">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <p>{post.price}</p>
  
                  {post.isAuthor ? (<button
                    id="deletePost"
                    onClick={async (event) => {
                      event.preventDefault();
                      try {
                        const results = await deletePostNow(post._id);
                      } catch (err) {
                        console.log(err);
                      }
                    }}
                  >
                    Delete Post
                  </button>): null}
                  {post.isAuthor ? (<button
                    id="editPost"
                    onClick={async (event) => {
                      event.preventDefault();
                      setCurrentPage({name: "Edit Posts", properties: post})
                    }}
                  >
                    Edit Post
                  </button>): null}
                  {( !isLoggedIn || !post.isAuthor) ? <span>
                    <a
                      onClick={(event) => {
                        event.preventDefault();
                        setCurrentPage({name: "Create Messages", properties: post._id});
                      }}
                    >
                      {" "}
                      ^^Message the owner about this item^^{" "}
                    </a>
                  </span> 
                  : <div> This is your post </div> }

                </div>
              </div>
            : null;
          })
        : null}
    </div>
  );
};

export default Posts;
