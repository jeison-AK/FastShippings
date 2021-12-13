import axios from "axios";
import React from "react";
import dotenv from "dotenv";

const baseURL = "RESTREVIEWS_DB_URI";

dotenv.config();

export default function Axios() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.borough}</h1> {/*"Brooklyn"*/}
      <p>{post.cuisine}</p>
      <input value={post.body}></input>
    </div>
  );
}
