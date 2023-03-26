import React, { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "../hooks/localStorageKullan";



import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [geceModuAc, setGeceModuAc] = useLocalStorage("nachtMode" ,false);
  const [userInf, setuserInf] = useLocalStorage("loggedInUser", {
    userName: "yokke",
    userEmail: "vidivici@vokke.com",

  });
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={geceModuAc ? "dark-mode App" : "App"}>
      <Navbar geceModuAc={geceModuAc} setGeceModuAc={setGeceModuAc} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
