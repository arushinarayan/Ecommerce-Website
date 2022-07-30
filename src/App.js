import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Hyperlink from "@material-ui/core/Link";
import CardActions from "@material-ui/core/CardActions";
import React from 'react';
import styles from './index.css'; 
import ReactDOM from "react-dom/client";
import Navbar from './Navbar'
import {Link} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Card
        style={{
          height: "40%",
          width: "40%",
          display: "block",
          justifyContent: 'center',
          alignItems: 'center',
          margin: "auto",
          marginTop: "22%"
        }}
      >
        <CardContent>
          <h2>Login</h2>
        </CardContent>
        <CardActions style={{
          display: "block"
        }}>
          <TextField style={{width:"90%", padding: 10, paddingLeft: 15, backgroundColor: "aliceblue", borderRadius: 18, margin: 10}}placeholder="Email Address" InputProps={{ disableUnderline: true }}></TextField>
          <TextField style={{width:"90%", padding: 10, backgroundColor: "aliceblue", borderRadius: 18, margin: 10}} placeholder="Password" InputProps={{ disableUnderline: true }}></TextField>
          <Hyperlink style={{width:"50%", padding: 10, flex: 'left', color:"#4267B2"}}>New User? Create an Account</Hyperlink>
          <Link to="./home" style={{ textDecoration: 'none'}}> 
          <Button size="small" style={{width:"30%", padding: 10, backgroundColor: "#4267B2", margin: 20, borderRadius: 18, color: "white"}}>Login</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;