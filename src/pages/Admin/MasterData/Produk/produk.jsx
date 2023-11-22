import React from "react";
import SideBar from "../../../../components/SideBar";
import Navbar from "../../../../components/Navbar";

const Kategori = () => {
  return (
    <div className="bg-[#DDE5E9]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="bg-slate-950 w-full bg-white">
          <Navbar />
          <main className="container mx-auto bg-white p-8">
            <section className="mb-5">
              <h2 className="text-3xl font-bold text-[#7A51E3]">Produk</h2>
            </section>

            <section>
              <div className="relative shadow-md sm:rounded-lg border overflow-hidden">
                <div className="mb-4 p-3">
                  <div className="bg-[#7A51E3] w-7 text-center rounded-sm inline-block mt-2.5">
                    <i class="fa-solid fa-plus text-white"></i>
                  </div>

                  <div className="float-right">
                    <input
                      type="search"
                      placeholder="Search"
                      name="username"
                      id="username"
                      autocomplete="off"
                      className="rounded-md border border-[#7A51E3] py-1.5 pl-3 text-[#7A51E3] placeholder:text-indigo-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-50 mr-2"
                    />

                    <button
                      type="button"
                      className="text-white bg-[#7A51E3] border focus:outline-none hover:bg-indigo-600 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 [#7A51E3]:bg-[#7A51E3] dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      <i class="fa-solid fa-filter mr-2"></i> Filter
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
                        <a href="#" className="text-indigo-600">
                          <p className="text-[#7A51E3]">
                            <span className="text-yellow-500">Detail</span> |
                            Edit
                          </p>
                        </a>
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
                        <a href="#" className="text-indigo-600">
                          <p className="text-[#7A51E3]">
                            <span className="text-yellow-500">Detail</span> |
                            Edit
                          </p>
                        </a>
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
                        <a href="#" className="text-indigo-600">
                          <p className="text-[#7A51E3]">
                            <span className="text-yellow-500">Detail</span> |
                            Edit
                          </p>
                        </a>
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
                        <a href="#" className="text-indigo-600">
                          <p className="text-[#7A51E3]">
                            <span className="text-yellow-500">Detail</span> |
                            Edit
                          </p>
                        </a>
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
                        <a href="#" className="text-indigo-600">
                          <p className="text-[#7A51E3]">
                            <span className="text-yellow-500">Detail</span> |
                            Edit
                          </p>
                        </a>
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
          </main>
        </div>
      </div>
    </div>
  );
};

export default Kategori;
