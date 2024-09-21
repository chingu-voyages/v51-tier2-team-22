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
  { name: "Jan", Group1: 0, Group2: -10, Group3: -20 },
  { name: "Feb", Group1: 0, Group2: 0, Group3: -10 },
  { name: "March", Group1: 40, Group2: 20, Group3: -20 },
  { name: "April", Group1: 40, Group2: 20, Group3: -20 },
];


// made with https://recharts.org/

function FriendsChart() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-custom-friend-width h-custom-friend-height">
      <ResponsiveContainer width="100%" height={335}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
          />
          <Tooltip />
          <Legend verticalAlign="top" />

          <Line
            type="monotone"
            dataKey="Group1"
            stroke="#4318FF"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />

          <Line
            type="monotone"
            dataKey="Group2"
            stroke="#F4A79D"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />

          <Line
            type="monotone"
            dataKey="Group3"
            stroke="#F8AE1B"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default FriendsChart;
