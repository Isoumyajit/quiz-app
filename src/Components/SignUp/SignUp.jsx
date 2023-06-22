import React , {useState} from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { Button, Card, CardContent } from '@mui/material'
import { Dashboard } from '../DashBoard/Dashboard'
import { useNavigate } from "react-router-dom";
export const SignUp = ({ start }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(null);
  const navigate = useNavigate();
  return (
    <Dashboard>
      <Card sx={{ width: 400, justifyContent: "center", alignItems: "center" }}>
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
                label="Name"
                variant="outlined"
                onChange={(event) => setUsername(event.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Age"
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
                Sign Up
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Dashboard>
  );
};
