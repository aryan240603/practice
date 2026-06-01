import Link from "next/link";


export default function F2 (){
    return(
        <div>
            <h1>F2 Dashboard</h1>
            <p>Welcome to the F2 Dashboard!</p>
            <Link style = {{color: "blue"}}href="/f1">Go to F1 Dashboard</Link>
        </div>
    );
}