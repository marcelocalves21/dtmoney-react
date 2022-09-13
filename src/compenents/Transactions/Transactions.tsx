import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionProvider";
import "./transaction.css";

const newInput = {
    title: "web app development - Carolina",
    value: "1000.00",
    category: "development",
    type: "income",
};
export const Transactions = () => {
    const { transactionsList } = useContext(TransactionsContext);
    return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionsList.map((transaction, index) => {
                        return (
                            <tr key={index}>
                                <td>{transaction.title}</td>
                                <td
                                    className={
                                        transaction.type === "income"
                                            ? "income"
                                            : "expense"
                                    }
                                >
                                    {transaction.type === "income"
                                        ? transaction.amount
                                        : `-${transaction.amount}`}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {transaction.createdAt.substring(0, 10)}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </section>
    );
};
