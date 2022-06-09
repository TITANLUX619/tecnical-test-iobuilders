import { useAppContext } from "context/Context.provider";
import { useEffect } from "react";

const useLogic = () => {
  const { getUserTransactions, transactions } = useAppContext();

  useEffect(() => {
    getUserTransactions();
  }, []);

  return { transactions };
};

export default useLogic;
