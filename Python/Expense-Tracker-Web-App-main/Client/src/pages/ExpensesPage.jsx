import "../main.css";

// react-router-dom imports
import { useLoaderData } from "react-router-dom";

// helper functions
import { deleteData, fetchData } from "../helpers";

// components
import ExpensesTable from "../components/ExpensesTable";

// react-toastify
import { toast } from "react-toastify";

// loader
export function expensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}

// action
export async function expensesAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  if (_action === "deleteExpense") {
    try {
      deleteData({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success("Expense deleted!");
    } catch (e) {
      throw new Error("Error deleting budget!");
    }
  }
}

function ExpensesPage() {
  const { expenses } = useLoaderData();
  return (
    <div>
      {expenses && expenses.length > 0 ? (
        <div className="inner-hero mx-[20px] my-[10px]">
          <h1>
            All Expenses<span className="totalExp"><br/>(Total = {expenses.length})</span>
          </h1>
          <ExpensesTable expenses={expenses.sort((a, b) => b.createdAt - a.createdAt)} />
        </div>
      ) : (
        <p>No expenses to show</p>
      )}
    </div>
  );
}

export default ExpensesPage;
