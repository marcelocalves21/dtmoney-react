import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TransactionsProvider } from "./hooks/useTransaction";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <TransactionsProvider>
        <App />
    </TransactionsProvider>
);
