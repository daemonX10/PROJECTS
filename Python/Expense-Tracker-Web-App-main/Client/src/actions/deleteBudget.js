// react-toastify
import { toast } from "react-toastify";

// helper functions
import { deleteData, getAllMatchingItems } from "../helpers";

// react-router-dom imports
import { redirect } from "react-router-dom";

export function deleteBudget({ params }) {
  try {
    deleteData({
      key: "budgets",
      id: params.id,
    });
    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });
    associatedExpenses.forEach((expense) => {
      deleteData({
        key: "expenses",
        id: expense.id,
      });
    });
    toast.success("Budget deleted successfully!");
  } catch (e) {
    throw new Error("Error deleting budget!");
  }
  return redirect("/");
}
