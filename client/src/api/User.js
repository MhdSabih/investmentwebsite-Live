import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_API;
// const serverUrl = import.meta.env.VITE_DEVELOPMENT_URL;

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

export const updateUserStatus = async (userId, status) => {
  try {
    const response = await axios.post(`${serverUrl}/update/status`, {
      userId,
      status,
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
