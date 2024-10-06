const ExpenseBar = ({ expense, budget }) => {
  const expensePercentage = (expense / budget) * 100;

  return (
    <section className="flex flex-col justify-between  w-custom-width h-custom-expense-height rounded-global p-8 pt-6 ml-8 border bg-white dark:bg-dark-secondary shadow-md">
      <p className="text-groupComponentHeader font-bold text-secondary dark:text-primary">
        Expense vs budget
      </p>

      <div className="flex justify-between items-start">
        <article className="w-custom-bar pr-4">
          {/* progress bar */}
          <div className="relative w-full h-8 rounded-lg bg-gray-200 mb-2 mt-4 overflow-hidden">
            <p
              className="absolute left-0 top-0 bg-primary h-full transition-all duration-500 ease-out rounded-lg"
              style={{ width: `${expensePercentage}%` }}
            ></p>
            {/* white tip in front of primary movable bar */}
            <p
              className="absolute top-0 bg-white h-full transition-all duration-500 ease-out"
              style={{
                width: "4px", // width of the white tip in front of primary bar
                left: `calc(${expensePercentage}% - 2px)`, //the white tip moves with the progress
              }}
            ></p>
          </div>
          {/* numbers */}
          <div className="flex justify-between text-sm font-bold text-secondary relative dark:text-dark-text">
            <p
              style={{
                left:
                  expensePercentage > 70
                    ? "calc(70% - 13px)" // Stop at 70% to avoid overlapping with budget figure
                    : `calc(${expensePercentage}% - 13px)`,
              }}
              className="absolute transition-all duration-500 ease-out"
            >
              {expense} $
            </p>
            <p className="ml-auto">{budget} $</p>
          </div>
        </article>

        {/* legend */}
        <article className="flex flex-col items-start text-xs font-bold space-y-2 p-4 w-44 h-24 rounded-lg bg-white shadow-custom">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
            <span className="font-bold text-legend">Expense</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-gray-300 mr-2"></span>
            <span className="text-legend font-bold ">Remaining budget</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ExpenseBar;
