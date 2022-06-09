import Transaction from "containers/main/components/Transaction/Transaction";
import TransactionModalComponent from "containers/main/components/TransactionModal/TransactionModal";
import React from "react";
import useLogic from "./Wallet.logic";

const WalletPage: React.FC = () => {
  const { transactions } = useLogic();
  return (
    <div>
      <h1>Wallet</h1>
      {transactions.map((transaction) => (
        <Transaction
          key={transaction.id}
          label={transaction.label}
          destinatary={transaction.destinatary}
          origin={transaction.origin}
          amount={transaction.amount}
          date={transaction.date}
        />
      ))}
      <TransactionModalComponent />
    </div>
  );
};

export default WalletPage;
