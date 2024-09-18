import { useEffect, useState } from "react";
import { getAllUsers, updateUserStatus } from "../api/User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllUsers();
        setUserData(result.message);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin");
    window.location.href = "/";
  };

  const handleToggleStatus = async (userId, newStatus) => {
    try {
      const response = await updateUserStatus(userId, newStatus);

      if (response.message) {
        toast.dark("User status updated successfully.");
      } else {
        toast.error("Failed to update user status.");
      }

      setUserData((prevData) =>
        prevData.map((user) =>
          user._id === userId ? { ...user, userStatus: newStatus } : user
        )
      );
    } catch (error) {
      console.error("Failed to update user status:", error);
    }
  };

  return (
    <>
      <div>
        <ToastContainer />
        <button
          className="px-6 py-3 bg-red-700 mx-4 my-4 text-white font-semibold rounded-xl"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">User List</h1>
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full bg-white text-center">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300">Email</th>
                <th className="px-6 py-3 border-b-2 border-gray-300">Role</th>
                <th className="px-6 py-3 border-b-2 border-gray-300">Date</th>
                <th className="px-6 py-3 border-b-2 border-gray-300">Status</th>
                <th className="px-6 py-3 border-b-2 border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, idc) => (
                <tr key={idc} className="hover:bg-gray-100">
                  <td className="px-6 py-4 border-b">{user.email}</td>
                  <td className="px-6 py-4 border-b">{user.role}</td>
                  <td className="px-6 py-4 border-b">
                    {new Date(user.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 font-montserrat font-bold border-b">
                    {user.userStatus}
                  </td>
                  <td className="px-6 py-4 border-b">
                    {user.userStatus === "ACTIVE" ? (
                      <button
                        className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg"
                        onClick={() => {
                          handleToggleStatus(user._id, "INACTIVE");
                        }}
                      >
                        Deactivate
                      </button>
                    ) : (
                      <button
                        className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg"
                        onClick={() => {
                          handleToggleStatus(user._id, "ACTIVE");
                        }}
                      >
                        Activate
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Admin;
