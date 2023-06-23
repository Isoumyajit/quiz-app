import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button, Card, CardContent, Grid } from "@mui/material";
import { Dashboard } from "../DashBoard/Dashboard";
import { useNavigate } from "react-router-dom";
export const LogIn = ({ start }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(null);
  const navigate = useNavigate();
  return (
    <Dashboard>
      <Card
        sx={{
          width: {
            xs: 300,
            sm: 400,
            md: 500,
            lg: 800,
            xl: 900,
          },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Box
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "90%",
              },
            }}
          >
            <form>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                onChange={(event) => setUsername(event.target.value)}
              />
              <TextField
                id="outlined-basic"
                type="password"
                label="Password"
                variant="outlined"
                onChange={(event) => setAge(event.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ m: 1, width: "90%" }}
                onClick={() => {
                  localStorage.setItem("username", username);
                  localStorage.setItem("age", age);
                  navigate("/topics");
                }}
              >
                Log In
              </Button>
            </form>
            <div>
              <p>Don't have an account ? </p>
              <button
                className="cursor-pointer text-blue-400"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </div>
          </Box>
        </CardContent>
      </Card>
    </Dashboard>
  );
};
