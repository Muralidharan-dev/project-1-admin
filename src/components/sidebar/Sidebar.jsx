import "./sidebar.css";
import { assets } from "../../assets/assets";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="side-bar">
       <Link to="/add-items"> 
      <div className="add-items">
         <img src={assets.add} alt="Add" className="icon"  />  
        <p>Add items</p>
      </div> 
      </Link>  
      <Link to="/list-items">
      <div className="last-items">
        <img src={assets.listmenu} alt="Add" className="icon" />
       <p>List items</p>
      </div>
      </Link>  
      <div className="order">
        <img src={assets.orders} alt="Add" className="icon" />
        <p>Orders</p>
      </div>
    </div>
  );
};

export default Sidebar;
