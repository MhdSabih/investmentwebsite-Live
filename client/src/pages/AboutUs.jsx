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
          <p className="text-lg text-gray-700">
            The incredible secret of forecasting stock market prices lies in the
            interplay between data analysis, human psychology, and market
            dynamics. While advanced algorithms and vast amounts of historical
            data can provide sophisticated models and predictions, the true
            challenge often lies in interpreting and reacting to the subtle,
            unpredictable behaviors of investors. Market sentiment, driven by
            news, geopolitical events, and collective emotions, can shift
            rapidly and defy even the most accurate models. As a result, the art
            of forecasting stock prices involves not only leveraging
            quantitative tools and machine learning techniques but also
            understanding the human factors that drive market fluctuations,
            making it an intricate blend of science and intuition.
          </p>
          <p className="text-lg text-gray-700">
            We have taken all the things mentioned above and created an amazing
            way to forecast market movements accurately and precisely. Our
            approach blends advanced technology with a deep understanding of
            market psychology, enabling us to predict trends with remarkable
            accuracy and helping you make informed decisions in an ever-changing
            financial landscape.
          </p>
        </div>
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">Join Us</h3>
          <p className="text-lg text-gray-700 mb-4">
            Join us on our journey to explore the complexities of the financial
            markets and uncover new opportunities for growth. Together, we can
            achieve extraordinary results.
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
