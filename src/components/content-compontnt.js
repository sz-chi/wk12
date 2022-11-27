import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CourseService from "../services/auth.service";

const ContentComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useHistory();
  const handleTakeToLogin = () => {
    history.push("/login");
  };
  let [courseData, setCourseData] = useState(null);
  useEffect(() => {
    console.log("Using effect.");
    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
    } else {
      _id = "";
    }

    CourseService.get(_id)
      .then((data) => {
        console.log(data);
        setCourseData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    CourseService.get(_id)
      .then((data) => {
        console.log(data);
        setCourseData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ padding: "3rem" }}>
      <div>
        <p>Here's the data we got back from server.</p>
        {courseData.map((course) => (
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">{course.description}</p>
              <p>Student Count: {course.students.length}</p>
              <button className="btn btn-primary">{course.price}</button>
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentComponent;
