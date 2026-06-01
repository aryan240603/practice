import Link from "next/link";

export default function F3() {
  return (
    <>
      <div>
        <h1>Intercepted F3 Dashboard</h1>
        <p>Welcome to the intercepted F3 Dashboard!</p>
      </div>
      <div>
        <Link href="/f3" style = {{color: "blue"}}>Go to F3 Dashboard</Link>
      </div>
    </>
  );
}
