import React from "react";

const expenses = [
  {
    expense: "Restaurant",
    description: "The harvest table",
    category: "Meal",
    date: "2023/3/20",
    totalAmount: "100€",
    participants: [
      {
        name: "Fari",
        contribution: "60%",
        split: "60€",
        paid: "100€",
        due: "+40€",
      },
      {
        name: "Mina",
        contribution: "20%",
        split: "20€",
        paid: "0€",
        due: "-20€",
      },
      {
        name: "Luigi",
        contribution: "20%",
        split: "20€",
        paid: "0€",
        due: "-20€",
      },
    ],
  },
  {
    expense: "Bakery",
    description: "First day of vacation",
    category: "Meal",
    date: "----",
    totalAmount: "0€",
    participants: [
      { name: "Fari", contribution: "0%", split: "0€", paid: "0€", due: "+0€" },
      { name: "Mina", contribution: "0%", split: "0€", paid: "0€", due: "-0€" },
      {
        name: "Luigi",
        contribution: "0%",
        split: "0€",
        paid: "0€",
        due: "-0€",
      },
    ],
  },
];

function GroupExpenseTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">Expense</th>
            <th scope="col" className="px-6 py-3">Description</th>
            <th scope="col" className="px-6 py-3">Category</th>
            <th scope="col" className="px-6 py-3">Date</th>
            <th scope="col" className="px-6 py-3">Total Amount</th>
            <th scope="col" className="px-6 py-3">Participants</th>
            <th scope="col" className="px-6 py-3">Contribution</th>
            <th scope="col" className="px-6 py-3">Split</th>
            <th scope="col" className="px-6 py-3">Paid</th>
            <th scope="col" className="px-6 py-3">Due</th>
            <th scope="col" className="px-6 py-3">Receipt</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, idx) => (
            <React.Fragment key={idx}>
              {expense.participants.map((participant, pidx) => (
                <tr className={pidx === 0 ? "bg-white" : "bg-gray-50"} key={pidx}>
                  {pidx === 0 && (
                    <>
                      <td rowSpan={expense.participants.length} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{expense.expense}</td>
                      <td rowSpan={expense.participants.length} className="px-6 py-4">{expense.description}</td>
                      <td rowSpan={expense.participants.length} className="px-6 py-4">{expense.category}</td>
                      <td rowSpan={expense.participants.length} className="px-6 py-4">{expense.date}</td>
                      <td rowSpan={expense.participants.length} className="px-6 py-4">{expense.totalAmount}</td>
                    </>
                  )}
                  <td className="px-6 py-4">{participant.name}</td>
                  <td className="px-6 py-4">{participant.contribution}</td>
                  <td className="px-6 py-4">{participant.split}</td>
                  <td className="px-6 py-4">{participant.paid}</td>
                  <td className="px-6 py-4">{participant.due}</td>
                  {pidx === 0 && (
                    <td rowSpan={expense.participants.length} className="px-6 py-4">
                      {/* Icons or buttons for actions */}
                      <button className="text-blue-600 hover:text-blue-900">View Receipt</button>
                    </td>
                  )}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GroupExpenseTable;
