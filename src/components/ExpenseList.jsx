import React from "react";

function ExpenseList({ expenses }) {
  return (
    <>
      <div className="overflow-x-auto w-4/5 m-auto mt-5">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Expense</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((row, index) => (
                <tr className="" key={index}>
                  <th>{index}</th>
                  <td>{row.expenseName}</td>
                  <td>{row.expenseAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul></ul>
      </div>
    </>
  );
}

export default ExpenseList;
