import ExpenseItem from "./ExpenseItem";

function ExpensesTable({ expenses, showBudget = true }) {
  return (
    <div className="overflow-x-auto">
      <table className="myTable">
        <thead>
          <tr>
            {["Name", "Amount", "Date", showBudget ? "Budget" : "", "Action"].map(
              (i, index) => {
                return <th key={index}>{i}</th>;
              }
            )}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            return (
              <tr key={expense.id}>
                <ExpenseItem expense={expense} showBudget={showBudget} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ExpensesTable;
