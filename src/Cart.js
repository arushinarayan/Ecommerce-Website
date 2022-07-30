import Delete from "@material-ui/icons/Cancel";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from 'react';
import Navbar from './Navbar'
import { useState, useEffect } from "react";
import IncDecCounter from "./Counter";
import Button from "@material-ui/core/Button";


function App() {
const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [isOpen, setIsOpen] = useState(false);

 useEffect(() => {
  const getData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/products`
        // `http://localhost:5000/orders`
      );
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      setData(actualData);
      setError(null);
    } catch(err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }  
  }
  getData()
}, [])

  return (
    <div>
      <Navbar></Navbar>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div style={{display:'flex'}}>
      <div style={{backgroundColor: "white", display: "flex", flexWrap: "wrap", justifyContent: 'space-evenly', paddingLeft: 30, paddingRight: 30, width: '50%'}}>
      {data &&
          data.map(({title, description, image, amount, rating }) => (
      <Card
        style={{
          height: 200,
          width: 500,
          margin: 20,
          display: 'flex'
        }}
      >
        <CardContent>
          <div style={{display:'flex'}}>
        <img style={{width: '20%', aspectRatio: 1, padding: 10}}
            src={image}
          />
          <div>
          <h3 style={{color:'gray'}}>{title}</h3>
          <h4 style={{color:'gray'}}>₹ {amount}</h4>
          <IncDecCounter />
          </div>
          <Delete style={{color:'red', paddingTop: 70}}/>
          </div>
        </CardContent>
      </Card>
       ))}
      </div>
      <div>
      <Card
        style={{
          height: 400,
          width: 400,
          margin: 20,
        }}
      >
        <CardContent>    
          <h3 style={{color:'gray'}}>Price Details</h3>
          <div style={{padding: 0}}>
          <div style={{display:'flex', justifyContent: 'space-between'}}>
          <h4 style={{color:'gray'}}>Price</h4>
          <h4 style={{color:'gray'}}>xyz</h4>
          </div>
          <div style={{display:'flex', justifyContent: 'space-between'}}>
          <h4 style={{color:'gray'}}>Discount Price</h4>
          <h4 style={{color:'gray'}}>xyz</h4>
          </div>
          <div style={{display:'flex', justifyContent: 'space-between'}}>
          <h4 style={{color:'gray'}}>Delivery Charge</h4>
          <h4 style={{color:'gray'}}>xyz</h4>
          </div>
          <hr
          style={{
            color: "black",
            backgroundColor: "black",
            height: 0.5
           }}
           />
          <div style={{display:'flex', justifyContent: 'space-between'}}>
          <h5 style={{color:'gray'}}>Total</h5>
          <h5 style={{color:'gray'}}>xyz</h5>
          </div>
          </div>
        </CardContent>
      </Card>
      <Button size="small" style={{width:"30%", padding: 10, backgroundColor: "#4267B2", margin: 20, borderRadius: 18, color: "white", float:'right'}}>Place Order</Button>
      </div>
      </div>
    </div>
  );
}

export default App;
