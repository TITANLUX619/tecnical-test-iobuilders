import { Button, Stack } from "@chakra-ui/react";
import Transaction from "containers/main/components/Transaction/Transaction";
import TransactionModalComponent from "containers/main/components/TransactionModal/TransactionModal";
import React from "react";
import useLogic from "./Wallet.logic";

const WalletPage: React.FC = () => {
  const { transactions, getBalance, signOut } = useLogic();
  return (
    <div>
      <h1>Wallet</h1>
      <h2>Balance: {getBalance()}$</h2>
      {transactions.map((transaction) => (
        <Transaction
          key={transaction.id}
          label={transaction.label}
          destinatary={transaction.destinatary}
          origin={transaction.origin}
          amount={transaction.amount}
          date={transaction.date}
          type={transaction.type}
        />
      ))}
      <Stack spacing={10}>
        <TransactionModalComponent />
        <Button
          onClick={signOut}
          bg={"red.400"}
          color={"white"}
          _hover={{
            bg: "red.500",
          }}
        >
          Sign out
        </Button>
      </Stack>
    </div>
  );
};

export default WalletPage;
