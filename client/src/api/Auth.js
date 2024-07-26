import axios from "axios";

const serverUrl =
  import.meta.env.VITE_SERVER_API || "http://localhost:5000/api";
axios.defaults.withCredentials = true;

export const LoginUser = async (email, password) => {
  try {
    const response = await axios.post(`${serverUrl}/login`, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      return { message: "No response from server." };
    } else {
      return { message: error.message };
    }
  }
};

export const adminLogin = async (email, password) => {
  try {
    const response = await axios.post(`${serverUrl}/admin/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      return { message: "No response from server." };
    } else {
      return { message: error.message };
    }
  }
};

export const SignUpUser = async (email, password) => {
  console.log(serverUrl);
  try {
    const response = await axios.post(`${serverUrl}/signup`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      return { message: "No response from server." };
    } else {
      return { message: error.message };
    }
  }
};

export const GetUserProfile = async () => {};
