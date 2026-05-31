import Analytics from "./@analytics/page";
import Notifications from "./@notifications/page";
import Revenue from "./@revenue/page";

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        minHeight: "100vh",
      }}
    >
      <div>{children}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "2rem",
        }}
      >
        <div style = {{display: "flex", flexDirection: "column", flex: 1, marginRight: "1rem"}}>
        <div>
          <Analytics />
        </div>
        <div>
          <Revenue />
        </div>
        </div>
        <div style = {{display: "flex", flex: 1}}>
          <Notifications />
        </div>
      </div>
    </div>
  );
}
