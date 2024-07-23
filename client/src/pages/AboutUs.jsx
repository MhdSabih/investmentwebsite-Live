import missionPng from "../uploads/our-mission.png";
import approachPng from "../uploads/infographic326x325.png";
import teamPng from "../uploads/team.jpg";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold mb-8 text-center">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={missionPng}
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700">
              {/* Welcome to York Capital, where we embrace complexity to capture
              alpha. Since 1991, our dedicated team of professionals has been
              committed to delivering exceptional investment opportunities and
              strategies to our clients. */}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
            <p className="text-lg text-gray-700">
              {/* At York Capital, we specialize in identifying and capitalizing on
              market inefficiencies, leveraging our deep industry knowledge and
              extensive network to deliver superior returns. Our approach is
              rooted in rigorous analysis, innovative thinking, and a relentless
              pursuit of excellence. */}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={approachPng}
              alt="Our Approach"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <img
              src={teamPng}
              alt="Our Team"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
            <p className="text-lg text-gray-700">
              {/* Our mission is to provide our clients with the highest level of
              service and expertise, ensuring that their investments are managed
              with the utmost care and precision. We believe in building
              long-term relationships based on trust, transparency, and mutual
              success. */}
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">Join Us</h3>
          <p className="text-lg text-gray-700 mb-4">
            {/* Join us on our journey to explore the complexities of the financial
            markets and uncover new opportunities for growth. Together, we can
            achieve extraordinary results. */}
          </p>
          <button
            onClick={handleClick}
            className="py-2 px-6 bg-gold text-black font-semibold rounded-md shadow hover:bg-black hover:text-white transition duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
