import { useState } from 'react';
import './additem.css';
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddItems = () => {
  const  url="https://project-1-backend-3ey1.onrender.com";
  const [formData, setFormData] = useState({
    image: null,
    name: '',
    description: '',
    category: 'Salad',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = new FormData();
    productData.append('image', formData.image);
    productData.append('name', formData.name);
    productData.append('description', formData.description);
    productData.append('category', formData.category);
    productData.append('price', Number(formData.price));

    try {
      const response = await axios.post(`${url}/api/food/add`, productData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      if (response.data.success) {
        setFormData({
          image: null,
          name: '',
          description: '',
          category: 'Salad',
          price: '',
        });
        toast.success("Product added successfully!");
      } else {
        toast.error("Failed to add product.");
      }
    } catch (error) {
      toast.error("An error occurred while adding the product.");
    }
  };

  return (
    <div className="add-product-form">
      <h2 className="form-title">Add New Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Upload Image:</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Product Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Enter product name"
          />
        </div>

        <div className="form-group">
          <label>Product Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            placeholder="Enter product description"
          />
        </div>

        <div className="form-group">
          <label>Product Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="Salad">Salad</option>
            <option value="Rolls">Rolls</option>
            <option value="Deserts">Deserts</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Cake">Cake</option>
            <option value="Pure Veg">Pure Veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles">Noodles</option>
          </select>
        </div>

        <div className="form-group">
          <label>Product Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
            placeholder="Enter product price"
          />
        </div>

        <button type="submit" className="submit-button">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddItems;
