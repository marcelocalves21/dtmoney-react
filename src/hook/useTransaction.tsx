import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

interface Transaction {
    id: number;
    title: string;
    amount: string;
    category: string;
    createdAt: string;
    type: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionContextData {
    transactionsList: Transaction[];
    addTransaction: (newInpout: TransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

const TransactionsContext = createContext<TransactionContextData>(
    {} as TransactionContextData
);

const url: string = "http://localhost:5000/transactions";

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactionsList, setTransactionsList] = useState<Transaction[]>([]);

    function getTransactions() {
        fetch(url)
            .then((resp) => resp.json())
            .then((res) => setTransactionsList(res))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getTransactions();
    }, []);

    async function addTransaction(newInput: TransactionInput) {
        const lastIndex: number = transactionsList.length - 1;
        const id: number = transactionsList[lastIndex].id + 1;
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                ...newInput,
                createdAt: new Date(),
            }),
            redirect: "follow",
        })
            .then((resp) => getTransactions())
            .catch((err) => console.log(err));
    }
    return (
        <TransactionsContext.Provider
            value={{ transactionsList, addTransaction }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}

export const useTransaction = () => {
    const context = useContext(TransactionsContext)
    return context
}