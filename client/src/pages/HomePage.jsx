import homeBannerVideo2 from "../uploads/YORK_Home_Banner_HR.mp4";
import "./css/homepage.css";

const HomePage = () => {
  return (
    <section className="relative h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={homeBannerVideo2}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-col items-start justify-center h-screen bg-black bg-opacity-0 text-white px-6 py-12 md:px-12 lg:px-24 font-amiri">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal mb-6">
          <span className="block">Embracing</span>
          <span className="block">the complexity of</span>
          <span className="block">Time and Space</span>
        </h1>
      </div>
    </section>
  );
};

export default HomePage;
