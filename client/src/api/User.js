import axios from "axios";

const serverUrl = "http://localhost:5001/api";
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${serverUrl}/users`);

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
