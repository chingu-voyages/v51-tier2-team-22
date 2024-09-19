import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Fari", value: 50 },
  { name: "Luigi", value: 25 },
  { name: "Mina", value: 25 },
];

const COLORS = ["#4F46E5", "blue", "#F97316"]; // Tailwind colors: blue-600, rose-300, orange-400

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      x={x}
      y={y}
      fill="#FFFFFF"
      textAnchor="middle"
      dominantBaseline="central"
      className=" font-semibold"
    >
      {(percent * 100).toFixed(0)}%
    </text>
  );
};

function GroupChart() {
  return (
    <div className="flex flex-col items-center justify-center bg-red-100 w-96">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {/* <Legend verticalAlign="bottom" align="center" height={50} /> */}
      </PieChart>

      {/* Custom legend */}
      <div className="mt-4">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index] }}
            ></span>
            <span className="text-sm text-gray-700">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupChart;

// CHART EXPLANATION CODE, "RECHARTS" PACKAGE IS USED FOR CHARTS
// ----------------------------------------------------
// <PieChart>: Defines the overall chart's width and height.

// <Pie>:
// -This component takes data and builds a donut chart based on the value field of each entry.
// -cx and cy control the center of the pie chart.
// -innerRadius and outerRadius control the donut's thickness.
// -paddingAngle adds space between the slices.
// -dataKey="value" is the key used to calculate the size of the pie slices (in this case, the value field).
// -label shows the percentage labels inside the pie slices, using the renderCustomizedLabel function.
// ----------------------
// <Cell>:
// -Each slice of the pie is rendered as a Cell, and each cell gets a color from the COLORS array.
// -fill={COLORS[index % COLORS.length]} dynamically applies the color based on the index of each slice.
// ----------------------
// Legend Component (currently):

// -It’s the built-in Recharts Legend placed at the bottom (verticalAlign="bottom") and center (align="center").
// -This is currently active but will be replaced by a custom legend for better control.
