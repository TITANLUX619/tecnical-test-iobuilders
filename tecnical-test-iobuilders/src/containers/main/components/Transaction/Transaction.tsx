import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import React from "react";
import useLogic from "./Transaction.logic";
import { TransactionComponentProps } from "./Transaction.types";

const TransactionComponent: React.FC<TransactionComponentProps> = (props) => {
  const { key, label, amount, date, destinatary, origin, type } =
    useLogic(props);

  return (
    // div with outline
    <div
      key={key}
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{amount} $</StatNumber>
        <StatHelpText>
          <StatArrow type={type} />
          {type === "increase" && <StatHelpText>Origin: {origin}</StatHelpText>}
          {type === "decrease" && (
            <StatHelpText>Destinatary: {destinatary}</StatHelpText>
          )}
        </StatHelpText>
        <StatHelpText>
          Date: {new Date(date.seconds * 1000).toLocaleDateString("en-US")}
        </StatHelpText>
      </Stat>
    </div>
  );
};

export default TransactionComponent;
