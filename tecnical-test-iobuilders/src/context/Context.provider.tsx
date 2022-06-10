import { useState } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import AppContext, { AppContextModel } from "./context.model";
import React from "react";

interface AppContextProviderProps {
  children?: React.ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState("");
  const [transactions, setTransactions] = useState<any>([]);
  const db = getFirestore();

  const getUserTransactions = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("user", user);
        const q1 = query(
          collection(db, "transactions"),
          where("origin", "==", user)
        );
        const q2 = query(
          collection(db, "transactions"),
          where("destinatary", "==", user)
        );

        const querySnapshot1 = await getDocs(q1);
        const querySnapshot2 = await getDocs(q2);
        Promise.all([querySnapshot1, querySnapshot2]).then((values) => {
          const data1 = values[0].docs.map((doc) => doc.data());
          const data2 = values[1].docs.map((doc) => doc.data());
          const data = [...data1, ...data2];
          data
            .sort((a, b) => {
              return a.date.seconds - b.date.seconds;
            })
            .reverse();
          console.log("data", data);

          data.forEach((transaction, index) => {
            let type: "increase" | "decrease" =
              user === transaction.destinatary ? "increase" : "decrease";
            data[index].type = type;
          });

          setTransactions(data);
          resolve(data);
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  const contextModel: AppContextModel = {
    db,
    user,
    setUser,
    getUserTransactions,
    transactions,
  };

  return (
    <AppContext.Provider value={contextModel}>{children}</AppContext.Provider>
  );
};

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
}

export default AppContextProvider;
