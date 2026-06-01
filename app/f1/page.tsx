import Link from "next/link";

export default function F1() {
  return (
    <>
      <div>
        <h1>F1 Dashboard</h1>
        <p>Welcome to the F1 Dashboard!</p>
      </div>
      <div>
        <Link href="/f1/f2" style = {{color: "blue"}}>Go to F2 Dashboard</Link><br></br>
        <Link href="/f3" style = {{color: "blue"}}>Go to intercepted and then real F3 Dashboard</Link><br></br>
        <Link href="/f1/f2/f4" style = {{color: "blue"}}>Go to intercepted and then real F4 Dashboard</Link><br></br>
      </div>
    </>
  );
}
