import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const Article = () => {
  const [posts, setPosts] = useState([])
  const { articleId } = useParams();

  useEffect(() => {
      axios
          .get('http://localhost:3500')
          .then(res => {
              console.log(res)
          setPosts(res.data)
          })
          .catch(err => {
              console.log(err)
          })
  })

  return (
    <div class="container">
      <ul>
          {
            <div class="back_square">
                <h1 class="back_content">Article{articleId}</h1>
                <h4 class="back_content">By {posts[articleId]?.name}</h4>
                <br/>
                <div class="back_content">{posts[articleId]?.body}</div>
                <br/>
                <p class="back_backbutton">
                  <Link to={`/`}>back</Link>
                </p>
                <br/>
            </div>
          }
      </ul>
    </div>
  );
};

export default Article;
