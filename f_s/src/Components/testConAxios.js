import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

//*get request
export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log("🐜", response.data, "🐜");
      console.log("🤯", post, "🤯");
    });
  }, []);
  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

//?Note that you can always find the requested data from the .data property in the response.
