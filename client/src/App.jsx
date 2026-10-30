import React, { useState } from "react";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Footer from "./Components/Footer";
import ShopContextProvider from "./context/Shopcontext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <ShopContextProvider>
      <div>
        {!isLoggedIn ? (
          <Signin onLogin={handleLogin} />
        ) : (
          <>
            <Home />
            <Footer />
          </>
        )}
      </div>
    </ShopContextProvider>
  );
}

export default App;