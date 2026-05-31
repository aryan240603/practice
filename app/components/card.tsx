export default function Card(
    {children}: {children: React.ReactNode}){
    const cardStyle = {
        padding: "100px",
        margin: "10px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        marginBottom: "1rem",
        display: "flex",
        JustifyContent: "center",
        alignItems: "center",

    }
    return(
        <div className={"p-4 bg-white rounded shadow"} style={cardStyle}>
            {children}
        </div>
    );
}