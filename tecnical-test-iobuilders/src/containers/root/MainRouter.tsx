import React from "react";

import SignInComponent from "containers/guest/SignIn/SignIn";
import SignUpComponent from "containers/guest/SignUp/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import WalletPage from "containers/main/pages/Wallet/Wallet";

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUpComponent />} />
        <Route path="/sign-up" element={<SignUpComponent />} />
        <Route path="/sign-in" element={<SignInComponent />} />
        <Route path="/wallet" element={<WalletPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
