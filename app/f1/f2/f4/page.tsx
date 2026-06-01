import Link from "next/link";

export default function F4() {
  return (
    <>
      <div>
        <h1> F4 Dashboard</h1>
        <p>Welcome to the F4 Dashboard!</p>
        <Link href = "/f1" style = {{color: "blue"}}>Go to F1 Dashboard</Link>
      </div>

    </>
  );
}
