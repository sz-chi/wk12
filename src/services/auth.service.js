import axios from "axios";
const API_URL = "http://localhost:8080/api";

class AuthService {
  getAll() {
    return axios.get(API_URL);
  }
  getEnrolledCourses(_id) {
    return axios.get(API_URL + "/student/" + _id);
  }

  getCourseByName(name) {
    return axios.get(API_URL + "/findByName/" + name);
  }

  get(_id) {
    return axios.get(API_URL + "/instructor/" + _id);
  }

  enroll(_id, user_id) {
    return axios.post(API_URL + "/enroll/" + _id, { user_id });
  }
}

export default new AuthService();
