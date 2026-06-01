import Analytics from "./@analytics/page";
import Notifications from "./@notifications/page";
import Revenue from "./@revenue/page"
import Login from "./@login/page";
import Card from "@/app/components/card";

export default function ComplexDashboardLayout({
  children,
  analytics,
  notifications,
  revenue,
  login,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true; // Simulate user authentication status
    return isLoggedIn ? (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        minHeight: "100vh",
      }}
    >
      {children}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            marginRight: "1rem",
          }}
        >
          <div>
            {analytics}
          </div>
          <div>
            {revenue}
          </div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>
          {notifications}
        </div>
      </div>
    </div>
  ) : 
    <Card>
      Please login to view the dashboard.
    </Card>  
}


