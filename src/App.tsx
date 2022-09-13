import { useState } from "react";
import "./App.css";
import { Dashboard } from "./compenents/Dashboard/Dasboard";
import IncomeIcon from "./assets/Income.svg";
import WithdrawIcon from "./assets/Withdraw.svg";
import TotalIcon from "./assets/Total.svg";
import { Transactions } from "./compenents/Transactions/Transactions";
import { Navbar } from "./compenents/Navbar/Navbar";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Dashboard
                title="Income"
                icon={IncomeIcon}
                total={(1000.0).toFixed(2)}
            />
            <Transactions />
        </div>
    );
}

export default App;
