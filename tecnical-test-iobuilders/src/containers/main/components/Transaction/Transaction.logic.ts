import { useAppContext } from "context/Context.provider";
import { useEffect } from "react";

const useLogic = (props) => {
  const { key, label, amount, date, destinatary, origin } = props;

  useEffect(() => {
    console.log("TransactionComponent", props);
  }, []);

  const { user } = useAppContext();

  const type: "increase" | "decrease" =
    user === destinatary ? "increase" : "decrease";

  return { key, label, amount, date, destinatary, origin, type };
};

export default useLogic;
