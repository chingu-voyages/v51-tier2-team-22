const ExpenseBar = ({ expense, budget }) => {
  const expensePercentage = (expense / budget) * 100;

  return (
    <section className="flex flex-col justify-between w-full max-w-lg ml-8 rounded-lg p-6 bg-white shadow-md">
      <div className="flex justify-between items-center mb-6">
        <p className="text-lg font-semibold text-secondary">Expense vs budget</p>
        <button className="text-sm font-medium text-gray-400 hover:text-secondary">Monthly ▼</button>
      </div>

      <div className="flex justify-between items-start">
      <article className="w-3/4 pr-4">
        {/* progress bar */}
        <div className="relative h-6 rounded-lg bg-gray-200 mb-2 mt-4 overflow-hidden">
          <p
            className="absolute left-0 top-0 bg-primary h-full rounded-sm transition-all duration-500 ease-out"
            style={{ width: `${expensePercentage}%` }}
          ></p>
        </div>
        {/* numbers */}
        <div className="flex justify-between text-sm font-medium text-gray-600 relative">
          <p
            style={{         left:
              expensePercentage > 85
                ? 'calc(70% - 13px)' // Stop at 85% to avoid overlapping with budget
                : `calc(${expensePercentage}% - 13px)`, }}
            className="absolute transition-all duration-500 ease-out"
          >
            {expense} $
          </p>
          <p className="ml-auto">{budget} $</p>
        </div>
      </article>

        {/* legend */}
        <article className="flex flex-col items-start space-y-2 p-4 w-52 h-20 rounded-lg bg-white shadow-xl">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
            <span className="text-sm font-semibold text-gray-600">Expense</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-gray-300 mr-2"></span>
            <span className="text-sm font-semibold text-gray-600">Remaining budget</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ExpenseBar;
