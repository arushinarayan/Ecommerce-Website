import styles from './index.css'; 
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {BrowserRouter as Router,  Routes, Route, Link, } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="NavBar" style={styles.NavBar}>
        <h1 style={{flex: 3, paddingLeft: 100, color: "white"}}>ShopKart.</h1>
        <div style={{flex: 1, display: "flex", color: "white", justifyContent:"space-between", paddingRight: 20}}>
        <Link to="/home" style={{ textDecoration: 'none', color: "white"}}>
        <h3 style={{padding: 10}}>Products</h3>
           </Link>
          <Link to="/" style={{ textDecoration: 'none', color: "white"}}> 
          <h3 style={{padding: 10}}>Login</h3>
          </Link>
          <Link to="/cart" style={{ textDecoration: 'none', color: "white"}}>
          <ShoppingCartIcon style={{paddingTop: 28, paddingLeft: 10, paddingRight: 10}} />
          </Link>
        </div>
      </div>
  );
};

export default Navbar;