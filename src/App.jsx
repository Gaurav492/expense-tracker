import { useState, useEffect } from "react";
import ExpenseList from "./components/ExpenseList";
import { db } from "./config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [expenseName, setexpenseName] = useState("");
  const [expenseAmount, setexpenseAmount] = useState(0);

  const [expenses, setexpenses] = useState([]);
  const expenseCollectionref = collection(db, "expenses");

  let msgTotal = expenses.reduce(function (prev, cur) {
    return prev + cur.expenseAmount;
  }, 0);

  const createUser = async () => {
    await addDoc(expenseCollectionref, {
      expenseName: expenseName,
      expenseAmount: Number(expenseAmount),
    });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "expenses", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "expenses", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getexpenses = async () => {
      const data = await getDocs(expenseCollectionref);
      setexpenses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getexpenses();
  }, []);

  return (
    <>
      <h1 className="text-6xl font-bold text-center text-violet-800">
        🧮 Expense Tracker : <span className="text-white">₹ {msgTotal}</span>
      </h1>

      <form className="w-4/5 m-auto mt-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Expense Name</span>
          </label>
          <input
            placeholder="Enter your Expense"
            className="input input-primary"
            onChange={(event) => {
              setexpenseName(event.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Expense Amount</span>
          </label>
          <input
            type="number"
            placeholder=" Enter your Expense Amount"
            className="input input-primary"
            onChange={(event) => {
              setexpenseAmount(event.target.value);
            }}
          />
        </div>
      </form>
      <div className="w-4/5 m-auto mt-5">
        <div className="form-control">
          <button className="btn btn-primary" onClick={createUser}>
            {" "}
            Add Expense
          </button>
        </div>
      </div>

      <ExpenseList expenses={expenses} />
    </>
  );
}

export default App;
