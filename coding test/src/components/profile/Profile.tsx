import { useParams } from "react-router-dom";
import { employeeList } from "../../utils/dataEmployees";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

export function Profile() {
  const { id } = useParams();
  const employee = employeeList.find((emp) => String(emp.id) === id);

  if (!employee) {
    return <Typography variant="h6">Employee not found</Typography>;
  }

  return (
    <Box sx={{ padding: "20px", display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 400, borderRadius: 4 }}>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
            <Avatar
              src={employee.image}
              alt={employee.name}
              sx={{ width: 100, height: 100 }}
            />
          </Box>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
            {employee.name}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", marginBottom: 2, color: "text.secondary" }}>
            {employee.position}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            📞 {employee.mobile}
          </Typography>
          <Typography variant="body2">
            ✉️ {employee.email}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
