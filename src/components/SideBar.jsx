import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import dashboardIcon from "../assets/dashboard-sidebar-icon.svg";
import dropdownIcon from "../assets/arrow-down.svg";
import masterdata from "../assets/masterdata.svg";
import gambar from "../img/gambar.png";

const SideBar = () => {
  const location = useLocation();
  const [openDropDown, setOpenDropDown] = useState(true);

  const isLinkActive = (pathname) => {
    return location.pathname === pathname
      ? "bg-white text-violet-500 font-bold"
      : "";
  };

  const handleDropdown = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <div className="w-[280px] bg-[#7A51E3] pb-10 md:pb-0 md:grid">
      <div id="sidebar-wrapper" className="h-screen text-white">
        <div title="profile" className="flex flex-col items-center mt-4">
          <div>
            <img src={gambar} className="rounded-full" />
          </div>
          <h1>Dinda marli</h1>
          <h2>abilong@gmial.com</h2>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 pt-8 shadow-inner shadow-slate-600">
          <ul className="flex flex-col items-start justify-center gap-[24px]">
            <li>
              <Link
                to="/admin/dashboard"
                className={` py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                  "/admin/dashboard"
                )}`}>
                <img src={dashboardIcon} alt="" />
                Dashboard
              </Link>
            </li>
            <ul>
              <li
                className={`py-1 pl-2 pr-1 rounded w-full flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold cursor-pointer`}
                onClick={handleDropdown}>
                <img src={masterdata} className="w-4 " />
                Master Data
                <img src={dropdownIcon} alt="" />
              </li>
              <ul className={`${openDropDown ? "hidden" : "block"}`}>
                <li>
                  <Link
                    to="/admin/kategori"
                    className={`ml-3 py-1 pl-2 pr-1 mt-2 rounded w-18 flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                      "/admin/kategori"
                    )}`}>
                    Kategori
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/produk"
                    className={`ml-3 py-1 pl-2 pr-1 mt-2 rounded w-18 flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                      "/admin/produk"
                    )}`}>
                    Produk
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/user"
                    className={`ml-3 py-1 pl-2 pr-1 mt-2 rounded w-18 flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                      "/admin/user"
                    )}`}>
                    User
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/promo"
                    className={`ml-3 py-1 pl-2 pr-1 mt-2 rounded w-18 flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                      "/admin/promo"
                    )}`}>
                    Promo
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/metode"
                    className={`ml-3 py-1 pl-2 pr-1 mt-2 rounded w-18 flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                      "/admin/metode"
                    )}`}>
                    Metode
                  </Link>
                </li>
              </ul>
            </ul>
            <li>
              <Link
                to="/admin/transaksi"
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                  "/admin/transaksi"
                )}`}>
                Transaksi
              </Link>
            </li>
            <li>
              <Link
                to="/admin/pendaftaran"
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                  "/admin/pendaftaran"
                )}`}>
                Pendaftaran
              </Link>
            </li>
            <li>
              <Link
                to="/admin/notifikasi"
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                  "/admin/notifikasi"
                )}`}>
                Notifikasi
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
