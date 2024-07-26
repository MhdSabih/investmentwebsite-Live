import axios from "axios";

const serverUrl =
  import.meta.env.VITE_SERVER_API || "http://localhost:5000/api";
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
