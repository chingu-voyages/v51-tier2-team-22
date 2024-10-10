import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const GroupBarChart = ({ group }) => {
  const data = group.members.map((member) => ({
    name: member.name,
    spent: ((member.contribution / 100) * group.totalExpense).toFixed(2),
  }));

  return (
    <div className="p-4 bg-white shadow-md w-96 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Group Expense Comparison</h3>

      <BarChart
        width={300}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="spent" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default GroupBarChart;
