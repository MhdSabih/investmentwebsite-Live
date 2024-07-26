import { useEffect, useState } from "react";
import { getAllUsers } from "../api/User";

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

  return (
    <>
      <div>
        <button
          className="px-6 py-3 bg-red-700 mx-4 my-4 text-white font-semibold rounded-xl"
          onClick={handleLogout}
        >
          logout
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
