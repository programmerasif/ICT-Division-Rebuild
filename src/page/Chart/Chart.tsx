import signe from "../../assets/check-mark.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const Chart = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 xl:px-16 mt-10 md:mt-20">
      {/* Header Section */}
      <div className="mb-10 text-center">
        <div className="flex justify-center items-center gap-2">
          <img src={signe} alt="check-mark" className="w-12 md:w-14" />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
            Visitor Insights
            <span className="text-[#4CAF50]"> & Analytics</span>
          </h2>
        </div>
        <p className="mt-3 text-sm md:text-base text-gray-600">
          View detailed data on website visitors, including daily statistics and insights from the past week.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col xl:flex-row gap-6 xl:gap-10 justify-center items-center">
        

        {/* Details Section */}
        <div className="flex justify-center items-center w-full xl:w-1/2">
          <div className="w-full flex flex-col gap-2">
            {/* Chart Info */}
            <div className="border-2 p-4 md:p-8 flex flex-col items-center">
              <h5 className="text-lg md:text-xl font-bold text-center">
                Bar Chart - Interactive
              </h5>
              <p className="text-center text-sm md:text-base">
                Showing total visitors for the last 1 week
              </p>
            </div>

            {/* Visitor Stats */}
            <div className="flex justify-between gap-2">
              <div className="border-2 flex-1 flex flex-col items-center py-4 md:py-6">
                <span className="text-sm md:text-base">Past Week</span>
                <span className="text-lg md:text-xl font-bold">1782</span>
              </div>
              <div className="border-2 flex-1 flex flex-col items-center py-4 md:py-6">
                <span className="text-sm md:text-base">Past Week</span>
                <span className="text-lg md:text-xl font-bold">1782</span>
              </div>
            </div>

            {/* Total Visitor Count */}
            <div className="border-2 flex justify-center items-center gap-2 py-4 md:py-6">
              <span className="text-base md:text-xl font-bold">Total Visitor:</span>
              <span className="text-lg md:text-xl font-bold">178302</span>
            </div>
          </div>
        </div>

        {/* Line Chart Section */}
        <div className="w-full xl:w-1/2 ">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Chart;
