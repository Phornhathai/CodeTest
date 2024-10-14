import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  IconButton,
  TextField,
} from "@mui/material";
import { employeeList } from "../../utils/dataEmployees";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./home.scss";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCardClick = (id: number) => {
    navigate(`/profile/${id}`);
  };

  const filteredEmployees = employeeList.filter((employee) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return employee.name.toLowerCase().includes(lowerCaseQuery);
  });

  return (
    <div className="home-container">
      <div className="search-item">
        <TextField
          label="Search Employees"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 3, width: "500px", marginTop: "20px" }}
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="profile-items">
        {filteredEmployees.map((employee, index) => (
          <Card
            sx={{
              borderRadius: 4,
            }}
            key={`${employee.mobile} - ${index}`}
            onClick={() => handleCardClick(employee.id)}
          >
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
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
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
                <img
                  src="./images/mobile_icon.svg"
                  alt="Phone Icon"
                  style={{ width: "24px", marginRight: "8px" }}
                />
                <Typography variant="body2">{employee.mobile}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src="./images/email_icon.svg"
                  alt="Email Icon"
                  style={{ width: "24px", marginRight: "8px" }}
                />
                <Typography variant="body2">{employee.email}</Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
