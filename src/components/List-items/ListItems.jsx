import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./listitems.css"
const ListItems = () => {
    const url="http://localhost:3000";
    const [list,setList]=useState([]);
    const fetchList=async()=>{
        const respone=await axios.get(`${url}/api/food/list`);
        console.log(respone.data);
        if(respone.data.success){
            setList(respone.data.data)
        }
        else{
            toast.error("Error");
        }
    }
    const removeFood=async(foodId)=>{
        console.log(foodId);
        const respone=await axios.post(`${url}/api/food/remove`,{id:foodId});
        await fetchList();
    }
    useEffect(()=>{
        fetchList();
    },[])
  return (
    <div className="food-list">
        <h2>All Food List</h2>
        <div className="list-table">
            <div className="list-table-format">
                <b>Image</b>
                <b>Name</b>
                <b>Category</b>
                <b>Price</b>
                <b>Action</b>
            </div>
            {list.map((item,index)=>{
                return (
                    <div key={index} className="list-table-format">
                        {console.log(item.image)}
                        <img src={`${url}/images/${item.image}`}></img>
                        <p>{item.name}</p>
                        <p>
                            {item.category}
                        </p>
                        <p>
                            ${item.price}
                        </p>
                        <p > 
                            <button onClick={()=>removeFood(item._id)}>X</button>
                        </p>
                    </div>
                )
            })}
        </div>
    </div>
  );
};

export default ListItems;