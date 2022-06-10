import { useAppContext } from "context/Context.provider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useLogic = () => {
  const { getUserTransactions, transactions } = useAppContext();
  const navigate = useNavigate();

  const getBalance = () => {
    let balance: number = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === "increase") {
        balance = (balance + +transaction.amount) as number;
      } else {
        balance = (balance - +transaction.amount) as number;
      }
    });
    return balance;
  };

  const signOut = () => {
    navigate("/sign-in");
  };

  useEffect(() => {
    getUserTransactions();
  }, []);

  return { transactions, getBalance, signOut };
};

export default useLogic;
