import React, { useState } from "react";
import Navbar from "../componants/Navbar";
import axios from "axios";
import { useEffect } from "react";
const api = import.meta.env.VITE_API_URL
const Dashboard = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${api}/products`,
        { name, price },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(`Product added: ${name}, Price: ${price}`);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchProducts = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${api}/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h2>Add Product</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Enter product name"
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          name="price"
          placeholder="Enter product price"
        />
        <button type="submit">Submit</button>
      </form>

       <div>
        {products?.map((x) => {
          return <p key={x.id}>{x.name}</p>;
        })}
      </div>

      
    </div>
  );
};

export default Dashboard;
