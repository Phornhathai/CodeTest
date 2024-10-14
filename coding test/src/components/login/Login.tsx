import { useForm } from "react-hook-form";
import { Button, TextField, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./login.scss";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

interface FormInputs {
  username: string;
  password: string;
}

export function Login({ onLogin }: LoginProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>({
    criteriaMode: "all",
  });

  const navigate = useNavigate();

  const onSubmit = (data: FormInputs) => {
    onLogin(data.username, data.password);
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <Typography variant="h4" className="login-title">
          Holla, Welcome Back
        </Typography>
        <Typography className="login-description">
          Hey, welcome back to your special place
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          className="login-form"
        >
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            {...register("username", {
              required: "Username is required.",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters long.",
              },
            })}
            error={!!errors.username}
            helperText={errors.username ? errors.username.message : ""}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long.",
              },
            })}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="MuiButton-root"
            sx={{ mt: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </div>

      <div className="login-right">
        <div className="image-text">
          <img
            src="./images/pic_login1.jpg"
            alt="login_picture"
            className="image-content"
          />
        </div>
      </div>
    </div>
  );
}
