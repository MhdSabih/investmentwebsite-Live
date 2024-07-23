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
          <span className="block">complexity to</span>
          <span className="block">capture alpha</span>
        </h1>
        <span className="text-base md:text-lg mb-4">since 1991.</span>
        <a className="inline-block border border-gold text-white py-3 px-6 rounded-md hover:bg-gold hover:text-black transition duration-300 cursor-pointer">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default HomePage;
