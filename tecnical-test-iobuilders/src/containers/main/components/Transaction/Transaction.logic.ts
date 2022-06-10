import { useAppContext } from "context/Context.provider";

const useLogic = (props) => {
  const { key, label, amount, date, destinatary, origin, type } = props;

  return { key, label, amount, date, destinatary, origin, type };
};

export default useLogic;
