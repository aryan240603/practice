import Card from "@/app/components/card";
import Link from "next/link";

export default function Archived() {
  return (
    <>
      <Card>
        <div>
          <h1 className="text-3xl font-bold underline">Archived Notification</h1>
        </div>
        <div>
          <Link
            className="text-blue-500 hover:text-blue-700"
            href="/complex-dashboard"
          >
            Back to Notifications
          </Link>
        </div>
      </Card>
    </>
  );
}
