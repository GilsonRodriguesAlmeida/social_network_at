import React from "react";
import Post from "./Post";

const Feed = () => {
  // Simulação de dados de postagens
  const posts = [{ Post: "post 1" }];
  
  
  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Feed;
