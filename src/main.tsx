import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
<<<<<<< HEAD
import { TransactionsProvider } from "./hooks/useTransaction";
=======
import { TransactionsProvider } from "./hook/useTransaction";
>>>>>>> fe8f75b087170b9d54037581ca45e1eb96983894
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <TransactionsProvider>
        <App />
    </TransactionsProvider>
);
