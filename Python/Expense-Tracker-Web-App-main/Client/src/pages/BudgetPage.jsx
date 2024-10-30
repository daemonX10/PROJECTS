import "../main.css";

// react-router-dom imports
import { useLoaderData } from "react-router-dom";

// helper functions
import { createExpense, deleteData, getAllMatchingItems } from "../helpers";

// components
import BudgetItem from "../components/BudgetItem";
import AddExpenseForm from "../components/AddExpenseForm";
import ExpensesTable from "../components/ExpensesTable";

// react-toastify
import { toast } from "react-toastify";

// loader
export async function budgetLoader({ params }) {
  const budget = await getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: params.id,
  })[0];
  const expenses = await getAllMatchingItems({
    category: "expenses",
    key: "budgetId",
    value: params.id,
  });
  if (!budget) {
    throw new Error("The budget does not exist!");
  }
  return { budget, expenses };
}

// action
export async function budgetAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success(`Expense ${values.newExpense} created!`);
    } catch (e) {
      throw new Error("Error creating expense!");
    }
  }
  if (_action === "deleteExpense") {
    try {
      deleteData({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success(`Expense deleted!`);
    } catch (e) {
      throw new Error("Error deleting budget!");
    }
  }
}

function BudgetPage() {
  const { budget, expenses } = useLoaderData();
  return (
    <div className="inner-hero mx-[20px] my-[10px]" style={{ "--accent": budget.color }}>
      <h1>
        <span>{budget.name}</span> Overview
      </h1>
      <div className="inner-hero">
        <BudgetItem budget={budget} showDelete={true} />
        <AddExpenseForm budgets={[budget]} />
      </div>
      {expenses && expenses.length > 0 && (
        <div className="inner-hero">
          <h1>
            <span>{budget.name}</span> Expenses
          </h1>
          <ExpensesTable expenses={expenses} showBudget={false} />
        </div>
      )}
    </div>
  );
}

export default BudgetPage;
