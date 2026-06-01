import Link from "next/link";

export default function F3() {
  return (
    <>
      <div>
        <h1>F3 Dashboard</h1>
        <p>Welcome to the F3 Dashboard!</p>
      </div>
      <div>
        <Link href="/f1/f2" style = {{color: "blue"}}>Go to F2 Dashboard</Link>
      </div>
    </>
  );
}
