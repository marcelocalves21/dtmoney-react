import { useTransaction } from "../../hooks/useTransaction";
import Logo from "../../assets/Logo.svg";

export const Navbar = () => {
    const { addTransaction } = useTransaction();

    return (
        <section>
            <img
                src={Logo}
                alt="Money sign inside of a green circle and dt money logo"
            />
            <button>
                New Transaction
            </button>
        </section>
    );
};
