import React, { useState } from "react";
import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/Navbar";
import Modal from "../../../components/Modal";

const Transaction = () => {
  const [editModal, setEditModal] = useState(false);
  return (
    <div className="bg-[#DDE5E9] w-full">
      <div className="flex flex-row ">
        <SideBar />
        <div className="bg-slate-950 w-ful">
          <Navbar />
          <main className="container mx-auto bg-white p-8">
            <section className="mb-6">
              <h2 className="text-3xl font-bold text-[#7A51E3]">Transaksi</h2>
            </section>

            <section>
              <div className="relative shadow-md sm:rounded-lg border overflow-hidden">
                <div className="mb-5 p-3">
                  <div className="float-right">
                    <input
                      type="search"
                      placeholder="Search"
                      name="username"
                      id="username"
                      autoComplete="off"
                      className="rounded-md border border-[#7A51E3] py-1.5 pl-3 text-[#7A51E3] placeholder:text-[#7A51E3] focus:ring-2 focus:ring-inset focus:ring-[#7A51E3] sm:text-sm sm:leading-6 w-50 mr-2"
                    />

                    <button
                      type="button"
                      className="text-white bg-[#7A51E3] border focus:outline-none hover:bg-[#7A51E3] focus:ring-4 focus:ring-[#7A51E3] font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 [#7A51E3]:bg-[#7A51E3] dark:text-white [#7A51E3]:border-[#7A51E3] [#7A51E3]:hover:bg-[#7A51E3] dark:focus:ring-[#7A51E3]"
                    >
                      <i className="fa-solid fa-filter mr-2"></i> Filter
                    </button>
                  </div>
                </div>

                <table className="w-full text-sm text-left mt-4 rtl:text-right">
                  <thead className="text-xs text-white">
                    <tr className="bg-[#7A51E3]">
                      <th scope="col" className="px-6 py-3 text-center">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        No. Transaksi
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Tanggal
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Total
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>1</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>TRS001</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>2020-12-23</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>RP 1.900.000</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <button
                          onClick={() => {
                            setEditModal(true);
                          }}
                          className="text-[#7A51E3]"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>2</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>TRS002</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>2020-12-23</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>RP 2.000.000</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <button
                          onClick={() => {
                            setEditModal(true);
                          }}
                          className="text-[#7A51E3]"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>3</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>TRS003</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>2020-12-23</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>RP 2.000.000</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <button
                          onClick={() => {
                            setEditModal(true);
                          }}
                          className="text-[#7A51E3]"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>4</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>TRS004</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>2020-12-23</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>RP 1.900.000</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <button
                          onClick={() => {
                            setEditModal(true);
                          }}
                          className="text-[#7A51E3]"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>5</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>TRS005</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>2020-12-23</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>RP 2.500.000</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <button
                          onClick={() => {
                            setEditModal(true);
                          }}
                          className="text-[#7A51E3]"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>6</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>TRS006</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>2020-12-23</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>RP 1.900.000</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <button
                          onClick={() => {
                            setEditModal(true);
                          }}
                          className="text-[#7A51E3]"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>7</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>TRS007</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>2020-12-23</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>RP 2.500.000</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <button
                          onClick={() => {
                            setEditModal(true);
                          }}
                          className="text-[#7A51E3]"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="border">
                      <td className="px-6 py-4" colSpan="3">
                        <div className="">
                          <button
                            type="button"
                            className="text-white bg-[#7A51E3] border border-[#7A51E3] focus:outline-none hover:bg-[#4d3591] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white dark:hover:bg-[#7A51EB] dark:focus:ring-[#7A51E3]"
                          >
                            Previous
                          </button>
                          <button
                            type="button"
                            className="text-white bg-[#7A51E3] border border-[#7A51E3] focus:outline-none hover:bg-[#4d3591] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white dark:hover:bg-[#7A51EB] dark:focus:ring-[#7A51E3]"
                          >
                            Next
                          </button>
                        </div>
                      </td>

                      <td className="text-right px-6 py-4">
                        <span>Page 1 of 10</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {editModal && (
              <Modal>
                <div className="max-w-2xl relative w-full p-16 mx-auto bg-white rounded-md shadow-lg">
                  <button
                    className="float-right px-2 py-2"
                    onClick={() => setEditModal(false)}
                  >
                    <i className="fa fa-close"></i>
                  </button>

                  <h2 className="text-3xl font-bold text-[#7A51E3] mb-10 mt-8">
                    Edit Promo
                  </h2>

                  <div className="form mb-16">
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="nama"
                        className="block text-lg font-medium leading-6"
                      >
                        No. Transaksi
                      </label>
                      <div className="mt-2">
                        <input
                          name="nama"
                          id="nama"
                          value="2432356643"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="nama"
                        className="block text-lg font-medium leading-6"
                      >
                        Tanggal
                      </label>
                      <div className="mt-2">
                        <input
                          type="date"
                          name="nama"
                          id="nama"
                          autoComplete="on"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="nama"
                        className="block text-lg font-medium leading-6"
                      >
                        Total
                      </label>
                      <div className="mt-2">
                        <input
                          name="nama"
                          id="nama"
                          value="Rp. 1.200.000"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <button
                        type="button"
                        className="text-white bg-[#7A51E3] border focus:outline-none hover:bg-[#7A51E3] focus:ring-4 focus:ring-[#7A51E3] font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 [#7A51E3]:bg-[#7A51E3] [#7A51E3]:text-white [#7A51E3]:border-[#7A51E3] dark:hover:bg-[#7A51E3] [#7A51E3]:focus:ring-[#7A51E3] float-right"
                        onClick={() => setEditModal(false)}
                      >
                        Simpan
                      </button>
                    </div>
                  </div>
                </div>
              </Modal>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
