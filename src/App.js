import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://cat-fact.herokuapp.com/facts").then((res) => {
      setPosts(res.data.all);
    });
  }, []);

  return (
    <div>
      {posts.length > 0 &&
        posts.map((post) => {
          return (
            <div className="bg-blue-300 ">
              <p className="bg-red-300">
                Post by{" "}
                <b>
                  {post?.user?.name?.first} {post?.user?.name?.last}
                </b>{" "}
                got <b>{post.upvotes}</b> upvotes
              </p>
              <p>{post.text}</p>
            </div>
          );
        })}
    </div>
  );
}
