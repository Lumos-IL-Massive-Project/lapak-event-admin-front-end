import React, { useState } from "react";
import SideBar from "../../../../components/SideBar";
import Navbar from "../../../../components/Navbar";
import Modal from "../../../../components/Modal";

const Provinsi = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  return (
    <div className="bg-[#DDE5E9]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="bg-slate-950 w-full">
          <Navbar />
          <main className="container mx-auto bg-white p-8">
            <section className="mb-5">
              <h2 className="text-3xl font-bold text-[#7A51E3]">Provinsi</h2>
            </section>

            <section>
              <div className="relative shadow-md sm:rounded-lg border overflow-hidden">
                <div className="mb-2 p-3">
                  <button
                    onClick={() => {
                      setShowModalAdd(true);
                    }}
                    className="bg-[#5925DC] hover:bg-[#4f388f] w-7 text-center rounded-sm inline-block mt-2.5">
                    <i className="fa-solid fa-plus text-white"></i>
                  </button>
                  <div className="float-right">
                    <input
                      type="search"
                      placeholder="Search"
                      name="username"
                      id="username"
                      autoComplete="off"
                      className="rounded-md border border-[#7A51E3] py-1.5 pl-3 text-[#7A51E3] placeholder:text-[#7A51E3] focus:ring-2 focus:ring-inset focus:ring-[#7A51E3] sm:text-sm sm:leading-6 w-60 mr-2"
                    />
                  </div>
                </div>

                <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="text-xs text-white">
                    <tr className="bg-[#7A51E3]">
                      <th scope="col" className="px-6 py-3 text-center">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Provinsi
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>001</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Kepulauan Riau</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <button
                          onClick={() => {
                            setEditModal(true);
                          }}
                          className="text-[#7A51E3]">
                          Edit
                        </button>
                        <span className="mx-1">|</span>
                        <button
                          onClick={() => {
                            setshowDeleteModal(true);
                          }}
                          className="text-red-500">
                          Hapus
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>002</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Jawa Barat</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <button
                          onClick={() => {
                            setEditModal(true);
                          }}
                          className="text-[#7A51E3]">
                          Edit
                        </button>
                        <span className="mx-1">|</span>
                        <button
                          onClick={() => {
                            setshowDeleteModal(true);
                          }}
                          className="text-red-500">
                          Hapus
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>003</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Sumatera Utara</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <button
                          onClick={() => {
                            setEditModal(true);
                          }}
                          className="text-[#7A51E3]">
                          Edit
                        </button>
                        <span className="mx-1">|</span>
                        <button
                          onClick={() => {
                            setshowDeleteModal(true);
                          }}
                          className="text-red-500">
                          Hapus
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>004</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Kalimantan Timur</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <button
                          onClick={() => {
                            setEditModal(true);
                          }}
                          className="text-[#7A51E3]">
                          Edit
                        </button>
                        <span className="mx-1">|</span>
                        <button
                          onClick={() => {
                            setshowDeleteModal(true);
                          }}
                          className="text-red-500">
                          Hapus
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>005</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Sulawesi Selatan</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <button
                          onClick={() => {
                            setEditModal(true);
                          }}
                          className="text-[#7A51E3]">
                          Edit
                        </button>
                        <span className="mx-1">|</span>
                        <button
                          onClick={() => {
                            setshowDeleteModal(true);
                          }}
                          className="text-red-500">
                          Hapus
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>005</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Sulawesi Selatan</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <button
                          onClick={() => {
                            setEditModal(true);
                          }}
                          className="text-[#7A51E3]">
                          Edit
                        </button>
                        <span className="mx-1">|</span>
                        <button
                          onClick={() => {
                            setshowDeleteModal(true);
                          }}
                          className="text-red-500">
                          Hapus
                        </button>
                      </td>
                    </tr>
                    <tr className="border">
                      <td className="px-6 py-4" colSpan="2">
                        <div className="">
                          <button
                            type="button"
                            className="text-white bg-[#7A51E3] border border-[#7A51E3] focus:outline-none hover:bg-[#4d3591] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white dark:hover:bg-[#7A51EB] dark:focus:ring-[#7A51E3]">
                            Previous
                          </button>
                          <button
                            type="button"
                            className="text-white bg-[#7A51E3] border border-[#7A51E3] focus:outline-none hover:bg-[#4d3591] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white dark:hover:bg-[#7A51EB] dark:focus:ring-[#7A51E3]">
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
                    onClick={() => setEditModal(false)}>
                    <i className="fa fa-close"></i>
                  </button>
                  <h2 className="text-2xl font-bold text-[#7A51E3] mb-10">
                    Edit Provinsi
                  </h2>

                  <div className="form mb-16">
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="nama"
                        className="block text-lg font-medium leading-6">
                        Provinsi
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          value="Kepulauan Riau"
                          name="nama"
                          id="nama"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <button
                      type="button"
                      className="text-white bg-[#7A51E3] border focus:outline-none hover:bg-[#7A51E3] focus:ring-4 focus:ring-[#7A51E3] font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 [#7A51E3]:bg-[#7A51E3] [#7A51E3]:text-white [#7A51E3]:border-[#7A51E3] dark:hover:bg-[#7A51E3] [#7A51E3]:focus:ring-[#7A51E3] float-right"
                      onClick={() => setEditModal(false)}>
                      Simpan
                    </button>
                  </div>
                </div>
              </Modal>
            )}

            {showModalAdd && (
              <Modal>
                <div className="max-w-2xl relative w-full p-16 mx-auto bg-white rounded-md shadow-lg">
                  <button
                    className="float-right px-2 py-2"
                    onClick={() => setShowModalAdd(false)}>
                    <i className="fa fa-close"></i>
                  </button>

                  <h2 className="text-3xl font-bold text-[#7A51E3] mb-10 mt-8">
                    Tambah Provinsi
                  </h2>

                  <div className="form mb-16">
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="nama"
                        className="block text-lg font-medium leading-6">
                        Provinsi
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="Masukan Provinsi"
                          name="nama"
                          id="nama"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <button
                      type="button"
                      className="text-white bg-[#7A51E3] border focus:outline-none hover:bg-[#7A51E3] focus:ring-4 focus:ring-[#7A51E3] font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 [#7A51E3]:bg-[#7A51E3] [#7A51E3]:text-white [#7A51E3]:border-[#7A51E3] dark:hover:bg-[#7A51E3] [#7A51E3]:focus:ring-[#7A51E3] float-right"
                      onClick={() => setShowModalAdd(false)}>
                      Tambah
                    </button>
                  </div>
                </div>
              </Modal>
            )}

            {showDeleteModal && (
              <Modal>
                <div className="max-w-lg relative w-full px-9 pt-9 pb-4 mx-auto bg-white rounded-md shadow-lg">
                  <div className="w-full">
                    <h2 className="font-semibold text-lg mb-3">
                      Yakin mau menghapus data?
                    </h2>

                    <div className="w-full text-right">
                      <button
                        type="button"
                        className="text-white bg-[#d43a3a] border border-[#d43a3a] focus:outline-none hover:bg-[#a13c3c] focus:ring-4 ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        onClick={() => setshowDeleteModal(false)}>
                        Hapus
                      </button>
                      <button
                        type="button"
                        className="text-white bg-[#7A51E3] border border-[#7A51E3] focus:outline-none hover:bg-[#4d3591] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white dark:hover:bg-[#7A51EB] dark:focus:ring-[#7A51E3]"
                        onClick={() => setshowDeleteModal(false)}>
                        Batal
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

export default Provinsi;
