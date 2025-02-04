import React from "react";
import { useSelector } from "react-redux";
import { Container, Typography, Card, CardContent } from "@mui/material";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // Required for Chart.js in React 18+

const Dashboard = () => {
  const user = useSelector((state) => state.user.data);

  if (!user) {
    return <Typography variant="h6">No user data available</Typography>;
  }

  // Sample Data for Chart (modify based on actual data)
  const chartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "User Activity",
        data: [5, 10, 15, 20],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
      },
    ],
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User Dashboard
      </Typography>

      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6">User Details</Typography>
          <Typography><strong>Name:</strong> {user.name}</Typography>
          <Typography><strong>Email:</strong> {user.email}</Typography>
          <Typography><strong>Phone:</strong> {user.phone}</Typography>
          <Typography><strong>Address:</strong> {user.address}</Typography>
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ marginTop: 3 }}>
        <CardContent>
          <Typography variant="h6">User Activity Chart</Typography>
          <Line data={chartData} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default Dashboard;


