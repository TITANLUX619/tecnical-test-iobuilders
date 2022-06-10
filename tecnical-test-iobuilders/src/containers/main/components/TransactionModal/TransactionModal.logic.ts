import { useDisclosure } from "@chakra-ui/react";
import { useAppContext } from "context/Context.provider";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

const useLogic = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { db, user, getUserTransactions } = useAppContext();
  const [label, setLabel] = useState("");
  const [destinatary, setDestinatary] = useState("");
  const [amount, setAmount] = useState(0);

  const onLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const onDestinataryChange = (e) => {
    setDestinatary(e.target.value);
  };

  const onAmountChange = (e) => {
    console.log(e);
    setAmount(e.target.value);
  };

  const sendTransaction = async () => {
    await addDoc(collection(db, "transactions"), {
      label: label,
      origin: user,
      destinatary: destinatary,
      date: new Date(),
      amount: amount,
    }).then(() => {
      onClose();
      getUserTransactions();
    });
  };

  return {
    isOpen,
    onOpen,
    onClose,
    onLabelChange,
    onDestinataryChange,
    onAmountChange,
    sendTransaction,
  };
};

export default useLogic;
