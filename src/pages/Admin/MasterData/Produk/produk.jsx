import React, { useState } from "react";
import SideBar from "../../../../components/SideBar";
import Navbar from "../../../../components/Navbar";
import Modal from "../../../../components/Modal";

const Kategori = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#DDE5E9]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="bg-slate-950 w-full">
          <Navbar />
          <main className="container mx-auto bg-white p-8">
            <section className="mb-5">
              <h2 className="text-3xl font-bold text-[#7A51E3]">Produk</h2>
            </section>

            <section>
              <div className="relative shadow-md sm:rounded-lg border overflow-hidden">
                <div className="mb-4 p-3">
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
                      className="text-white bg-[#7A51E3] border focus:outline-none hover:bg-[#7A51E3] focus:ring-4 focus:ring-[#7A51E3] font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 [#7A51E3]:bg-[#7A51E3] [#7A51E3]:text-white [#7A51E3]:border-[#7A51E3] dark:hover:bg-[#7A51E3] [#7A51E3]:focus:ring-[#7A51E3]">
                      <i className="fa-solid fa-filter mr-2"></i> Filter
                    </button>
                  </div>
                </div>

                <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="text-xs text-white">
                    <tr className="bg-[#7A51E3]">
                      <th scope="col" className="px-6 py-3 text-center">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Nama
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Kategori
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Deskripsi
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
                        <span>Product Launching for Company</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Pernikahan</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>
                          Produk ini Menyediakan berbagai keperluan untuk acara
                          pernikahan anda
                        </span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <div className="mx-auto">
                          <button
                            onClick={() => {
                              setShowModal(true);
                            }}
                            className="text-yellow-500">
                            Detail
                          </button>
                          <span className="mx-1">|</span>
                          <span className="text-[#7A51E3]">Edit</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>2</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Product Launching for Company</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Pernikahan</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>
                          Produk ini Menyediakan berbagai keperluan untuk acara
                          pernikahan anda
                        </span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <div className="mx-auto">
                          <button
                            onClick={() => {
                              setShowModal(true);
                            }}
                            className="text-yellow-500">
                            Detail
                          </button>
                          <span className="mx-1">|</span>
                          <span className="text-[#7A51E3]">Edit</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>3</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Product Launching for Company</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Pernikahan</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>
                          Produk ini Menyediakan berbagai keperluan untuk acara
                          pernikahan anda
                        </span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <div className="mx-auto">
                          <button
                            onClick={() => {
                              setShowModal(true);
                            }}
                            className="text-yellow-500">
                            Detail
                          </button>
                          <span className="mx-1">|</span>
                          <span className="text-[#7A51E3]">Edit</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>4</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Product Launching for Company</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Pernikahan</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>
                          Produk ini Menyediakan berbagai keperluan untuk acara
                          pernikahan anda
                        </span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <div className="mx-auto">
                          <button
                            onClick={() => {
                              setShowModal(true);
                            }}
                            className="text-yellow-500">
                            Detail
                          </button>
                          <span className="mx-1">|</span>
                          <span className="text-[#7A51E3]">Edit</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>5</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Product Launching for Company</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Pernikahan</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>
                          Produk ini Menyediakan berbagai keperluan untuk acara
                          pernikahan anda
                        </span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <div className="mx-auto">
                          <button
                            onClick={() => {
                              setShowModal(true);
                            }}
                            className="text-yellow-500">
                            Detail
                          </button>
                          <span className="mx-1">|</span>
                          <span className="text-[#7A51E3]">Edit</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="my-5 float-right">
                  <span className="mr-14">1 of 10</span>
                  <span className="mr-20">
                    <a href="#">&lt;</a>
                  </span>
                  <span className="mr-5">
                    <a href="#">&gt;</a>
                  </span>
                </div>
              </div>
            </section>

            {showModal && (
              <Modal>
                <div className="max-w-2xl relative w-full p-16 mx-auto bg-white rounded-md shadow-lg">
                  <h2 className="text-3xl font-bold text-[#7A51E3] mb-10">
                    Detail Produk
                  </h2>

                  <div className="form  mb-16">
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="nama"
                        className="block text-lg font-medium leading-6">
                        Nama
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          readOnly
                          value="Product Launching for Company"
                          name="nama"
                          id="nama"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="kategori"
                        className="block text-lg font-medium leading-6">
                        Kategori
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          readOnly
                          value="Pernikahan"
                          name="kategori"
                          id="kategori"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="deskripsi"
                        className="block text-lg font-medium leading-6">
                        Deskripsi
                      </label>
                      <div className="mt-2">
                        <textarea
                          name="deskripssi"
                          id="deskripsi"
                          readOnly
                          className="block w-full h-24 rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border">
                          Produk ini Menyediakan berbagai keperluan untuk acara
                          pernikahan anda
                        </textarea>
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="deskripsi"
                        className="block text-lg font-medium leading-6">
                        Portofolio
                      </label>
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        <img src="/src/img/produk.png" alt="Produk" />
                        <img src="/src/img/produk.png" alt="Produk" />
                        <img src="/src/img/produk.png" alt="Produk" />
                      </div>
                    </div>

                    <h4 className="text-lg font-medium leading-6 mb-2 mt-6">
                      Paket
                    </h4>

                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="deskripsi"
                        className="block text-md font-medium leading-6">
                        Nama Paket
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          readOnly
                          value="Silver"
                          name="kategori"
                          id="kategori"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="deskripsi"
                        className="block text-lg font-medium leading-6">
                        Deskripsi Paket
                      </label>
                      <div className="mt-2">
                        <textarea
                          name="deskripssi"
                          id="deskripsi"
                          readOnly
                          className="block w-full h-24 rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border">
                          Basic product launch planning.
                        </textarea>
                      </div>
                    </div>

                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="deskripsi"
                        className="block text-lg font-medium leading-6">
                        Service
                      </label>
                      <div className="mt-2">
                        <textarea
                          name="deskripssi"
                          id="deskripsi"
                          readOnly
                          className="block w-full h-24 rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border">
                          Basic product launching planning consultation. Venue
                          booking and setup. Audio-visual equipment for
                          presentations. Catering for up to 50 attendees. Light
                          refreshments for attendees. Event coordination on the
                          day.
                        </textarea>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <button
                      type="button"
                      className="text-white bg-[#7A51E3] border focus:outline-none hover:bg-[#7A51E3] focus:ring-4 focus:ring-[#7A51E3] font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 [#7A51E3]:bg-[#7A51E3] [#7A51E3]:text-white [#7A51E3]:border-[#7A51E3] dark:hover:bg-[#7A51E3] [#7A51E3]:focus:ring-[#7A51E3] float-right"
                      onClick={() => setShowModal(false)}>
                      Kembali
                    </button>
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

export default Kategori;
