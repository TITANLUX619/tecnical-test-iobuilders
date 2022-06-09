import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "containers/root/App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjoxdMJLaJgINGWvYC95ZAUE7fkX-BDlc",
  authDomain: "technical-test-obuilders.firebaseapp.com",
  projectId: "technical-test-obuilders",
  storageBucket: "technical-test-obuilders.appspot.com",
  messagingSenderId: "1092529405766",
  appId: "1:1092529405766:web:a7bb0f7cbe970cc8672f47",
  measurementId: "G-0N95R9B7BJ",
};

initializeApp(firebaseConfig);

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>
);

serviceWorker.unregister();

reportWebVitals();
