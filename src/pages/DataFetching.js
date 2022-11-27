import React, {useState, useEffect} from "react";
import axios from "axios";
import CourseService from "../services/auth.service";
import { Link } from "react-router-dom";

function DataFetching() {
    const [posts, setPosts] = useState([])

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
    let [courseData, setCourseData] = useState(null);
    useEffect(() => {
      CourseService.getCourseByName("Article")
        .then((data) => {
          console.log(data);
          setCourseData(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    return (
        <div className="Home">
          <div>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h2 class="mid">Hi</h2>
                <div class="container">
                    <ul>
                        {
                            posts.map(post => <li key={post.id}>
                                <div class="square">
                                    <h1>Article{post.id}</h1>
                                    <h4 class="content">By {post.name}</h4>
                                    <br/>
                                    <div class="content">{post.title}</div>
                                    <br/>
                                    <Link to={`/Article/${post.id}`}>more</Link>
                                    <br/>
                                </div>
                            </li>)
                        }
                    </ul>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      );
}

export default DataFetching


// <div>
{/* <ul>
    {
        posts.map(post => <li key={post.id}>{post.id}{post.title}</li>)
    }
</ul> */}
// </div>