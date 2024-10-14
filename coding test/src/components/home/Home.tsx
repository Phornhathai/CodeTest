import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  TextField,
} from "@mui/material";
import { employeeList } from "../../utils/dataEmployees";
import "./home.scss";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };


  const filteredEmployees = employeeList.filter((employee) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      employee.name.toLowerCase().includes(lowerCaseQuery) ||
      employee.mobile.includes(lowerCaseQuery)
    );
  });

  return (
    <div className="home-container">
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <TextField
          label="Search Employees"
          variant="outlined"
          sx={{ marginBottom: 3, width: "500px", marginTop: "50px" }}
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="profile-items">
        {filteredEmployees.map((employee, index) => (
          <Card sx={{ borderRadius: 4 }} key={`${employee.mobile} - ${index}`}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 2,
                }}
              >
                <Avatar
                  sx={{
                    marginRight: 2,
                    bgcolor: "primary.main",
                    width: 56,
                    height: 56,
                  }}
                  src={employee.image}
                  alt={employee.name}
                />
              </Box>

              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {employee.name}
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginBottom: 1 }}
              >
                {employee.position}
              </Typography>

              <Box
                sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
              >
                <Typography variant="body2">📞 {employee.mobile}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2">✉️ {employee.email}</Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
