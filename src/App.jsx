import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Admin/Login/Login";
import Admin from "./pages/Admin/Dashboard/Dashboard";
import Transaction from "./pages/Admin/Transaction/transaksi";
import Pendaftaran from "./pages/Admin/Pendaftaran/pendaftaran";
import Notifikasi from "./pages/Admin/Notifikasi/Notifikasi";

import Kategori from "./pages/Admin/MasterData/Kategori/Kategori";
import User from "./pages/Admin/MasterData/User/user";
import Produk from "./pages/Admin/MasterData/Produk/produk";
import Promo from "./pages/Admin/MasterData/Promo/promo";
import Metode from "./pages/Admin/MasterData/Metode/Metode";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/admin" />
          <Route element={<Admin />} path="/admin/dashboard" />
          <Route element={<Kategori />} path="/admin/kategori" />
          <Route element={<User />} path="/admin/user" />
          <Route element={<Produk />} path="/admin/Produk" />
          <Route element={<Promo />} path="/admin/Promo" />
          <Route element={<Metode />} path="/admin/Metode" />
          <Route element={<Transaction />} path="/admin/transaksi" />
          <Route element={<Pendaftaran />} path="/admin/pendaftaran" />
          <Route element={<Notifikasi />} path="/admin/Notifikasi" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
