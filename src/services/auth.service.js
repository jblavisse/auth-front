import axios from "axios";
import jwt_decode from "jwt-decode";

const API_URL = "http://localhost:3003/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", {email, password})
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      })
  }

  isLoggedIn() {
    let token = localStorage.getItem('user')
    if(!token) { return false;}
    else {
      console.log(token);
      const {exp} = jwt_decode(token);
      // Refresh the token a minute early to avoid latency issues
      const expirationTime = (exp * 1000) - 60000
      return Date.now() < expirationTime;
    }
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(email, password) {
    return axios.post(API_URL + "register", {
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();