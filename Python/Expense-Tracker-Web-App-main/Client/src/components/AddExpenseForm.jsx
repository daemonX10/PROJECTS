// library imports
import { PlusCircleIcon } from "@heroicons/react/24/solid";

// react imports
import { useEffect, useRef } from "react";

// react-router-dom imports
import { Form, useFetcher } from "react-router-dom";

function AddExpenseForm({ budgets }) {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();
  useEffect(() => {
    if (!isSubmitting) {
      // clear form
      formRef.current.reset();
      // reset focus
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
      <h2 className="head2">
        Add New{" "}
        <span>{budgets.length === 1 && `${budgets.map((b) => b.name)}`}</span>{" "}
        Expense
      </h2>
      <fetcher.Form method="post" className="myForm" ref={formRef}>
        <div className="inner-myForm">
          <label htmlFor="newExpense">Expense Name</label>
          <input
            type="text"
            name="newExpense"
            id="newExpense"
            placeholder="Eg. Juice, Tea, etc."
            required
            ref={focusRef}
          />
        </div>
        <div className="inner-myForm">
          <label htmlFor="newExpenseAmount">Amount</label>
          <input
            type="number"
            step="0.01"
            name="newExpenseAmount"
            id="newExpenseAmount"
            placeholder="Eg. Rs. 40"
            inputMode="decimal"
            required
          />
        </div>
        <div className="inner-myForm" hidden={budgets.length === 1}>
          <label htmlFor="newExpenseBudget">Budget Category</label>
          <select name="newExpenseBudget" id="newExpenseBudget" required>
            {budgets
              .sort((a, b) => a.createdAt - b.createdAt)
              .map((budget) => {
                return (
                  <option key={budget.id} value={budget.id}>
                    {budget.name}
                  </option>
                );
              })}
          </select>
        </div>
        <input type="hidden" name="_action" value="createExpense" />
        <button
          type="submit"
          className="btn bg-[#00b386] border-[#00b386]"
          style={{ width: "140px" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span>Creating...</span>
          ) : (
            <>
              <span>Create</span>
              <PlusCircleIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
}

export default AddExpenseForm;
