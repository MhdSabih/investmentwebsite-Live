import loginBG from "../uploads/loginBG.jpg";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUser, SignUpUser } from "../api/Auth";

const LoginPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
  });
  const [loginFormError, setLoginFormError] = useState(null);
  const [signUpFormError, setSignUpFormError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const Loader = () => {
    return (
      <ThreeDots
        visible={true}
        height="50"
        width="50"
        color="#4fa94d"
        radius="7"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleSignUpInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm({
      ...signUpForm,
      [name]: value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!loginForm.email || !loginForm.password) {
      setLoginFormError("Please enter both email and password.");
      return;
    }

    setIsLoading(true);
    const result = await LoginUser(loginForm.email, loginForm.password);
    setIsLoading(false);

    if (result.message.user) {
      localStorage.setItem("accessToken", result.message.accessToken);
      localStorage.setItem("userStatus", result.message.user.userStatus);
      toast.dark("Login Successful!");
      window.location.href = "/";
    } else {
      toast.error(result.message);
    }
    setLoginForm({
      email: "",
      password: "",
    });
    setLoginFormError(null);
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    if (!signUpForm.email || !signUpForm.password) {
      setSignUpFormError("Please enter both email and password.");
      return;
    }

    setIsLoading(true);
    const result = await SignUpUser(signUpForm.email, signUpForm.password);
    setIsLoading(false);
    toast.dark(result.message);
  };

  const toggleForm = () => {
    setShowSignUp(!showSignUp);
    setLoginFormError(null);
    setSignUpFormError(null);
  };

  const handleAdminLogin = () => {
    navigate("/admin/login");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBG})` }}
    >
      <ToastContainer />
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 my-12">
        {showSignUp ? (
          <>
            <form onSubmit={handleSignUpSubmit}>
              <div className="space-y-6">
                <input
                  type="email"
                  name="email"
                  value={signUpForm.email}
                  onChange={handleSignUpInputChange}
                  placeholder="Email address"
                  className="w-full p-4 border border-gray-300 rounded-lg text-lg"
                />
                <input
                  type="password"
                  name="password"
                  value={signUpForm.password}
                  onChange={handleSignUpInputChange}
                  placeholder="Password"
                  className="w-full p-4 border border-gray-300 rounded-lg text-lg"
                />
                {signUpFormError && (
                  <p className="text-red-500 text-sm">{signUpFormError}</p>
                )}
                {isLoading ? (
                  <div className="w-full flex justify-center items-center py-4">
                    <Loader />
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-4 rounded-lg text-xl font-semibold hover:bg-gray-900 transition duration-300"
                  >
                    Sign up
                  </button>
                )}
              </div>
            </form>
            <div className="mt-8 text-center text-gray-600">
              <div className="flex justify-center space-x-2 mt-4">
                <p className="text-gray-700">Already a Member?</p>
                <span className="text-gray-500">|</span>
                <button
                  className="text-blue-600 hover:underline"
                  onClick={toggleForm}
                >
                  Login
                </button>
              </div>
              <p className="mt-12">&#169; 2023 Divine Digits, LLC.</p>
            </div>
          </>
        ) : (
          <>
            <form onSubmit={handleLoginSubmit}>
              <div className="space-y-6">
                <input
                  type="email"
                  name="email"
                  value={loginForm.email}
                  onChange={handleLoginInputChange}
                  placeholder="Email address"
                  className="w-full p-4 border border-gray-300 rounded-lg text-lg"
                />
                <input
                  type="password"
                  name="password"
                  value={loginForm.password}
                  onChange={handleLoginInputChange}
                  placeholder="Password"
                  className="w-full p-4 border border-gray-300 rounded-lg text-lg"
                />
                {loginFormError && (
                  <p className="text-red-500 text-sm">{loginFormError}</p>
                )}
                {isLoading ? (
                  <div className="w-full flex justify-center items-center py-4">
                    <Loader />
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-4 rounded-lg text-xl font-semibold hover:bg-gray-900 transition duration-300"
                  >
                    Login
                  </button>
                )}
              </div>
            </form>
            <div className="mt-8 text-center text-gray-600">
              <span
                className="font-semibold text-blue-600 cursor-pointer hover:underline"
                onClick={toggleForm}
              >
                Forgot Password?
              </span>
              <div className="flex justify-center space-x-2 mt-4">
                <p className="text-gray-700">New here?</p>
                <span className="text-gray-500">|</span>
                <button
                  className="text-blue-600 hover:underline"
                  onClick={toggleForm}
                >
                  Sign up
                </button>
              </div>
              <p className="mt-12">&#169; 2023 Divine Digits, LLC. </p>
            </div>
          </>
        )}

        <span
          className="flex justify-end text-red-600 font-semibold cursor-pointer"
          onClick={handleAdminLogin}
        >
          Admin login
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
