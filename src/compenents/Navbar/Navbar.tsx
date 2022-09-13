import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionProvider";
import Logo from "../../assets/Logo.svg";

export const Navbar = () => {
    const { addTransaction } = useContext(TransactionsContext);

    const newInput = {
        title: "web app development - Jason",
        amount: "10000.00",
        category: "development",
        type: "income",
    };
    return (
        <section>
            <img
                src={Logo}
                alt="Money sign inside of a green circle and dt money logo"
            />
            <button onClick={() => addTransaction(newInput)}>
                {" "}
                New Transaction
            </button>
        </section>
    );
};
