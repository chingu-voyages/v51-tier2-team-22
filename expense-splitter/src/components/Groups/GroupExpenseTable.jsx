// static data used for maping, in future these will be states
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
        due: "+40€",
      },
      {
        name: "Mina",
        contribution: "20%",
        split: "20€",
        due: "-20€",
      },
      {
        name: "Luigi",
        contribution: "20%",
        split: "20€",
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
      { name: "Fari", contribution: "0%", split: "0€", due: "+0€" },
      { name: "Mina", contribution: "0%", split: "0€", due: "-0€" },
      {
        name: "Luigi",
        contribution: "0%",
        split: "0€",
        due: "-0€",
      },
    ],
  },
];

function GroupExpenseTable() {
  return (
    <section className="overflow-x-auto ml-8 rounded-lg">
      <table className="table-auto text-left">
        <thead className="uppercase bg-highlight dark:bg-black text-body font-medium text-legend dark:text-dark-text ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Expense
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3 whitespace-nowrap">
              Total Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Participants
            </th>
            <th scope="col" className="px-6 py-3">
              Contribution
            </th>
            <th scope="col" className="px-6 py-3">
              Split
            </th>

            <th scope="col" className="px-6 py-3">
              Due
            </th>
            <th scope="col" className="px-6 py-3">
              Receipt
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index} className="bg-white dark:bg-dark-primary  border-b border-gray-100">
              <td className="px-6 py-4 text-body font-bold text-secondary dark:text-dark-icon-bg whitespace-nowrap">
                {expense.expense}
              </td>
              <td className="px-6 py-4 text-sm font-normal text-secondary dark:text-dark-icon-bg whitespace-nowrap">
                {expense.description}
              </td>
              <td className="px-6 py-4 text-body font-bold text-secondary dark:text-dark-icon-bg">
                {expense.category}
              </td>
              <td className="px-6 py-4 text-body font-bold text-secondary dark:text-dark-icon-bg">
                {expense.date}
              </td>
              <td className="px-6 py-4 text-body font-bold text-secondary dark:text-dark-icon-bg">
                {expense.totalAmount}
              </td>

              <td className="px-6 py-4 text-body font-bold text-secondary dark:text-dark-icon-bg">
                {expense.participants.map((participant, pindex) => (
                  <div key={pindex} className="flex flex-col">
                    <span>{participant.name}</span>
                  </div>
                ))}
              </td>

              <td className="px-6 py-4 text-body font-bold text-secondary dark:text-dark-icon-bg">
                {expense.participants.map((participant, pindex) => (
                  <div key={pindex} className="flex flex-col">
                    <span>{participant.contribution}</span>
                  </div>
                ))}
              </td>

              <td className="px-6 py-4 text-body font-bold text-secondary dark:text-dark-icon-bg">
                {expense.participants.map((participant, pindex) => (
                  <div key={pindex} className="flex flex-col">
                    <span>{participant.split}</span>
                  </div>
                ))}
              </td>

              <td className="px-6 py-4 text-body font-bold text-secondary dark:text-dark-icon-bg">
                {expense.participants.map((participant, pindex) => (
                  <div key={pindex} className="flex flex-col">
                    <span>{participant.due}</span>
                  </div>
                ))}
              </td>

              <td className="px-6 py-4">
                <button className="text-red-600 hover:text-primary">
                  View Receipt
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default GroupExpenseTable;
