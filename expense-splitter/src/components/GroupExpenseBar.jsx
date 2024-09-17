const ExpenseBar = ({ expense, budget }) => {
  const expensePercentage = (expense / budget) * 100;

  return (
    <section className="flex flex-col justify-between max-w-lg rounded-lg p-4 border border-black">
      <div className="flex justify-between">
        <p>Expense vs Budget</p>
        <button>monthly ▼</button>
      </div>

      <article className="w-full border border-blue-600">
        {/* progress bar */}
        <div className="relative h-5 rounded-full bg-gray-300 mb-2 overflow-hidden">
          <p
            className="bg-purple-600 h-full rounded-l-full transition-all duration-500 ease-out"
            style={{ width: `${expensePercentage}%` }}
          ></p>
        </div>
        {/* numbers */}
        <div className="flex justify-end mb-4 text-gray-800 relative overflow-hidden">
          <p
            style={{ left: `calc(${expensePercentage}% - 13px)` }}
            className="absolute transition-all duration-500 ease-out"
          >
            {expense} $
          </p>
          <p>{budget} $</p>
        </div>
      </article>

      {/* small card */}
      <article className="flex flex-col items-start border border-black">
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-purple-600 mr-2"></span>
          <span>Expense</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-gray-300 mr-2"></span>
          <span>Budget</span>
        </div>
      </article>
    </section>
  );
};

export default ExpenseBar;
