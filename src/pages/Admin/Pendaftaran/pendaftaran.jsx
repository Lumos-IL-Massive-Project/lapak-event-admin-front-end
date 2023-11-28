import React, { useState } from "react";
import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/Navbar";
import Modal from "../../../components/Modal";

const Pendaftaran = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#DDE5E9]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="bg-slate-950 w-full">
          <Navbar />
          <main className="container mx-auto bg-white p-8">
            <section className="mb-7">
              <h2 className="text-3xl font-bold text-[#7A51E3]">Pendaftaran</h2>
            </section>

            <section>
              <div className="relative shadow-md sm:rounded-lg border overflow-hidden">
                <div className="mb-6 p-3">
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
                      className="text-white bg-[#7A51E3] border focus:outline-none hover:bg-[#7A51E3] focus:ring-4 focus:ring-[#7A51E3] font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 [#7A51E3]:bg-[#7A51E3] dark:text-white [#7A51E3]:border-[#7A51E3] [#7A51E3]:hover:bg-[#7A51E3] dark:focus:ring-[#7A51E3]">
                      <i className="fa-solid fa-filter mr-2"></i> Filter
                    </button>
                  </div>
                </div>

                <table className="w-full text-sm mt-5 text-left rtl:text-right">
                  <thead className="text-xs text-white">
                    <tr className="bg-[#7A51E3]">
                      <th scope="col" className="px-6 py-3 text-center">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Nama
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        No Telpon
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Status
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
                        <span>Piyorin</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>piyorin@gmail.com</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>082847383783</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span className="text-green-500 font-semibold italic">
                          Selesai
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
                        <span>Kazuto</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>kazuto@gmail.com</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>082847383783</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span className="text-green-500 font-semibold italic">
                          Selesai
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
                        <span>Kayaka</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>kayaka@gmail.com</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>082847383783</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span className="text-gray-500 font-semibold italic">
                          Proses
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
                        <span>Vampix</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>vampix@gmail.com</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>082847383783</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span className="text-gray-500 font-semibold italic">
                          Proses
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
                        <span>Aquane</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>aquane@gmail.com</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>082847383783</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span className="text-gray-500 font-semibold italic">
                          Proses
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
                        <span>6</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Fitriana</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>fitriana@gmail.com</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>082847383783</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span className="text-green-500 font-semibold italic">
                          Selesai
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
                        <span>7</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Risna</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>risna@gmail.com</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>082847383783</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span className="text-green-500 font-semibold italic">
                          Selesai
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
                    <tr className="border">
                      <td className="px-6 py-4" colSpan="3">
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

            {showModal && (
              <Modal>
                <div className="max-w-2xl relative w-full p-16 mx-auto bg-white rounded-md shadow-lg">
                  <h2 className="text-3xl font-bold text-[#7A51E3] mb-10">
                    Detail Produk
                  </h2>

                  <div className="form  mb-16">
                    <h4 className="block text-xl font-bold leading-6 mb-2 text-[#7A51E3]">
                      Informasi Perusahaan
                    </h4>

                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="nama"
                        className="block text-lg font-medium leading-6">
                        Nama Perusahaan
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          readOnly
                          value="Xiomi"
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
                        Pemilik Perusahan
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          readOnly
                          value="Mark Zuckberg"
                          name="kategori"
                          id="kategori"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="kategori"
                        className="block text-lg font-medium leading-6">
                        NPWP Perusahaan
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          readOnly
                          value="0923412"
                          name="kategori"
                          id="kategori"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>

                    <h4 className="block text-xl font-bold leading-6 mb-2 mt-7 text-[#7A51E3]">
                      Informasi Perusahaan
                    </h4>

                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="kategori"
                        className="block text-lg font-medium leading-6">
                        Nama Event Organizer
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          readOnly
                          value="0923412"
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
                        BIO
                      </label>
                      <div className="mt-2">
                        <textarea
                          name="deskripssi"
                          id="deskripsi"
                          readOnly
                          className="block w-full h-32 rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border">
                          Event Organizer kreatif, berpengalaman, dan handal
                          menciptakan momen tak terlupakan. Solusi lengkap untuk
                          acara sukses dan berkesan.
                        </textarea>
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="kategori"
                        className="block text-lg font-medium leading-6">
                        Negara
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          readOnly
                          value="Indonesia"
                          name="kategori"
                          id="kategori"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="kategori"
                        className="block text-lg font-medium leading-6">
                        Propinsi
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          readOnly
                          value="Sulawesi Selatan"
                          name="kategori"
                          id="kategori"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="kategori"
                        className="block text-lg font-medium leading-6">
                        Kota
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          readOnly
                          value="Bulukumba"
                          name="kategori"
                          id="kategori"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="kategori"
                        className="block text-lg font-medium leading-6">
                        Kode Post
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          readOnly
                          value="92552"
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
                        Alamat Kantor
                      </label>
                      <div className="mt-2">
                        <textarea
                          name="deskripssi"
                          id="deskripsi"
                          readOnly
                          className="block w-full h-32 rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border">
                          Desa Towale KAbupaten Donggala Sulwesi tengah Dan lain
                          lain
                        </textarea>
                      </div>
                    </div>

                    <h4 className="block text-xl font-bold leading-6 mb-2 mt-7 text-[#7A51E3]">
                      Sosial Media
                    </h4>

                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="kategori"
                        className="block text-lg font-medium leading-6">
                        Instagram
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          readOnly
                          value="Ali Asagri"
                          name="kategori"
                          id="kategori"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="kategori"
                        className="block text-lg font-medium leading-6">
                        Linkedin
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          readOnly
                          value="94351"
                          name="kategori"
                          id="kategori"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="kategori"
                        className="block text-lg font-medium leading-6">
                        Drible
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          readOnly
                          value="94351"
                          name="kategori"
                          id="kategori"
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

export default Pendaftaran;
