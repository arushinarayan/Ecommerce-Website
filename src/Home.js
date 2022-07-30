import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Favourite from "@material-ui/icons/Favorite";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import React from 'react';
import Navbar from './Navbar'
import { useState, useEffect } from "react";
import Popup from './popup';


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

const togglePopup = () => {
  setIsOpen(!isOpen);
}

function handleClick(jsonData) {
  // Send data to the backend via POST
  fetch('http://localhost:5000/orders', { 
    method: 'POST', 
    body: JSON.stringify(jsonData) 
  })
  
}

  return (
    <div>
      <Navbar></Navbar>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: 'space-evenly', paddingLeft: 30, paddingRight: 30 }}>
      {data &&
          data.map(({title, description, image, amount, rating }) => (
      <Card
        style={{
          height: "15%",
          width: "20%",
          margin: 20,
        }}
      >
        <CardContent>
        <img style={{width: '100%', aspectRatio: 1}}
            src={image}
          />
          <h5 style={{color:'gray'}} onClick={togglePopup}>{title}</h5>
          <h5 style={{color:'gray'}}>₹ {amount}</h5>
          <div style={{backgroundColor: 'green', width: 40, textAlign: 'center', color: 'white', borderRadius: 20}}>
          {rating}
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Favourite style={{color: 'gray', paddingTop: 30}}/>
          <ShoppingCartIcon style={{color: 'gray', paddingTop: 30}} onClick={handleClick({title, description, image, amount, rating })}/>
          </div>
          {isOpen && <Popup
          content={<>
        <div style={{display:'flex'}}>
        <img style={{width: '40%', aspectRatio: 1}}
            src={image}
          />
          <div style={{display:'block', padding: 20}}>
           <h2 style={{color:'black'}}>{title}</h2>
           <h6 style={{color:'black'}}>{description}</h6>
          <h2 style={{color:'black'}}>₹ {amount}</h2>
          <div style={{justifyContent: 'space-evenly'}}>
          <Button size="small" style={{width:"30%", padding: 10, backgroundColor: "white", margin: 20,  border: '2px solid black', color: "black"}} onClick={handleClick}>Buy Now</Button>
          <Button size="small" style={{width:"30%", padding: 10, backgroundColor: "black", margin: 20, color: "white"}} onClick={handleClick({title, description, image, amount, rating })}>Add to Basket</Button>
          </div>
          </div>
        </div>
      </>}
      handleClose={togglePopup}
    />}
        </CardContent>
      </Card>
      ))}
      </div>
    </div>
  );
}

export default App;
