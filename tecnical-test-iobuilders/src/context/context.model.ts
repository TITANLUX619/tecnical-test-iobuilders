import { Firestore } from "firebase/firestore";
import { createContext } from "react";

export interface AppContextModel {
  db: Firestore;
  user: string;
  setUser: (user: string) => void;
  getUserTransactions: () => Promise<any[]>;
  transactions: any[];
}

const AppContext = createContext<AppContextModel>(null);

export default AppContext;
