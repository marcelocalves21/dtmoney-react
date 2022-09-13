interface DashboardInterface {
    title: string;
    icon: string;
    total: string;
}

export const Dashboard = (props: DashboardInterface) => {
    return (
        <section>
            <div className="topboard">
                <h4>{props.title}</h4>
                <img src={props.icon} />
            </div>
            <h2>${props.total}</h2>
        </section>
    );
};
