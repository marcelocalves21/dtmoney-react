import { useTransaction } from "../../hooks/useTransaction";
import "./transaction.css";

export const Transactions = () => {
    const { transactionsList } = useTransaction();
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
