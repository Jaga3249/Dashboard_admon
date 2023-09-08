import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Inventory from "../pages/inventory/Inventory";
import Customers from "../pages/customers/Customers";
import Orders from "../pages/orders/Orders";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
