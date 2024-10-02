import { PieChart, Pie, Cell } from "recharts";
import { useSelector } from "react-redux";

// chart
const COLORS = ["#0B7A75", "#843B62", "#F67E7D", "#00A1E4", "#F5B700", "#00A1E4", "#A8C686", "#7067CF", "#E27396", "#DC0073","#89FC00"];

// props of numbers inside chart position and radius related
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    // props of numbers inside chart styling related
    <text
      x={x}
      y={y}
      fill="#FFFFFF"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-md font-bold text-secondary"
    >
      {(percent * 100).toFixed(0)}%
    </text>
  );
};

function GroupChart({ groupId }) {
  const groupIdInt = parseInt(groupId);

  const group = useSelector((state) =>
    state.groups.groups.find((group) => group.id === groupIdInt)
  );

  if (!group) {
    return <p>No group found</p>;
  }

  const data = group.members.map((member) => ({
    name: member.name,
    value: member.contribution || 1,
  }));

  return (
    <section className="flex flex-col items-center justify-center w-custom-wide-chart bg-white dark:bg-dark-secondary dark:border p-6 ml-8 rounded-lg shadow">
      <div className="w-full flex justify-between">
        <p className="text-lg font-bold text-secondary ml-8 dark:text-primary">Budget Split</p>
         {/* under btn to be removed perhaps due to simplification of the app */}
        {/* <button className="text-body font-medium text-primary bg-blizzard-blue w-30 h-8 mr-8 py-1 px-4 rounded-lg">
          Members ▼
        </button> */}
      </div>

      {/* chart size */}
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx={120}
          cy={130}
          innerRadius={30.5}
          outerRadius={90}
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
        {/* out of the box Legend, ignore for now */}
        {/* <Legend verticalAlign="bottom" align="center" height={50} /> */}
      </PieChart>

      {/* Custom legend */}
      {/* bg-white removed */}
      <div className="p-3  flex rounded-lg  shadow-custom flex-wrap  justify-start">
        {data.map((entry, index) => (
          <div key={index} className="flex my-2  items-center mx-2 space-x-3 p-1 ">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index] }}
            ></span>
            <span className="font-bold text-legend">{entry.name}</span>
          </div>
        ))}
      </div>
    </section>
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
