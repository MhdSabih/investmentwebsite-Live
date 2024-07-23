import { useState } from "react";

const Forecaster = () => {
  const [pricePoint, setPricePoint] = useState(0);
  const [resultUp, setResultUp] = useState([]);
  const [resultDown, setResultDown] = useState([]);

  const calculatePrices = () => {
    const degreeIncrement = 15;
    const cycleIncrementUp = 293.66;
    const cycleIncrementDown = -87.83;

    const pricesUp = [];
    const pricesDown = [];

    for (let i = 0; i <= 720; i += degreeIncrement) {
      const percent = (i / 360) * 100;
      const priceUp = pricePoint + (i / 360) * cycleIncrementUp;
      const priceDown = pricePoint + (i / 360) * cycleIncrementDown;

      pricesUp.push({
        degrees: i,
        percent: percent.toFixed(1),
        price: priceUp.toFixed(2),
      });

      pricesDown.push({
        degrees: i,
        percent: percent.toFixed(1),
        price: priceDown.toFixed(2),
      });

      if (pricesUp.length >= 10 && pricesDown.length >= 10) {
        break;
      }
    }

    setResultUp(pricesUp);
    setResultDown(pricesDown);
  };

  const clearInputs = () => {
    setPricePoint(0);
    setResultUp([]);
    setResultDown([]);
  };

  return (
    <div className="p-4 mt-12 mb-12 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Price Point Calculator</h1>
      <div className="mb-4">
        <label className="block mb-2">
          Price Point:
          <input
            type="number"
            value={pricePoint}
            onChange={(e) => setPricePoint(parseFloat(e.target.value))}
            className="mt-1 p-2 block w-full border rounded"
          />
        </label>
      </div>

      <div className="flex space-x-4 mb-4">
        <button
          onClick={calculatePrices}
          className="py-2 px-6 bg-gold text-black font-semibold rounded-md shadow hover:bg-black hover:text-white transition duration-300"
        >
          Calculate
        </button>
        <button
          onClick={clearInputs}
          className="py-2 px-6 bg-red-500 text-white font-semibold rounded-md shadow hover:bg-red-700 transition duration-300"
        >
          Clear
        </button>
      </div>

      {resultUp.length > 0 && resultDown.length > 0 && (
        <div className="flex flex-col lg:flex-row justify-between mt-8">
          <div className="w-full lg:w-1/2 pr-2">
            <h2 className="text-xl font-bold">Up Calculation</h2>
            <table className="mt-4 w-full lg:max-w-lg border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">Degrees</th>
                  <th className="border border-gray-300 p-2">Percent</th>
                  <th className="border border-gray-300 p-2">Price Point</th>
                </tr>
              </thead>
              <tbody>
                {resultUp.map((row, index) => (
                  <tr key={index} className="even:bg-gray-100 odd:bg-white">
                    <td className="border border-gray-300 p-2 text-center">
                      {row.degrees}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      {row.percent}%
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full lg:w-1/2 pl-2 mt-4 lg:mt-0">
            <h2 className="text-xl font-bold">Down Calculation</h2>
            <table className="mt-4 w-full lg:max-w-lg border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">Degrees</th>
                  <th className="border border-gray-300 p-2">Percent</th>
                  <th className="border border-gray-300 p-2">Price Point</th>
                </tr>
              </thead>
              <tbody>
                {resultDown.map((row, index) => (
                  <tr key={index} className="even:bg-gray-100 odd:bg-white">
                    <td className="border border-gray-300 p-2 text-center">
                      {row.degrees}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      {row.percent}%
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forecaster;
