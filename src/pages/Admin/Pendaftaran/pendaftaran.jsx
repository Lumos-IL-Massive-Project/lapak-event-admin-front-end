import React from "react";
import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/Navbar";

const Pendaftaran = () => {
  return (
    <div className="bg-[#DDE5E9]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="bg-slate-950 w-full bg-white">
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
                      autocomplete="off"
                      className="rounded-md border border-[#7A51E3] py-1.5 pl-3 text-[#7A51E3] placeholder:text-[#7A51E3] focus:ring-2 focus:ring-inset focus:ring-[#7A51E3] sm:text-sm sm:leading-6 w-50 mr-2"
                    />

                    <button
                      type="button"
                      className="text-white bg-[#7A51E3] border focus:outline-none hover:bg-[#7A51E3] focus:ring-4 focus:ring-[#7A51E3] font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 [#7A51E3]:bg-[#7A51E3] dark:text-white [#7A51E3]:border-[#7A51E3] [#7A51E3]:hover:bg-[#7A51E3] dark:focus:ring-[#7A51E3]"
                    >
                      <i class="fa-solid fa-filter mr-2"></i> Filter
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
                        <a href="#" className="text-amber-300">
                          Detail
                        </a>
                        <span className="mx-2">|</span>
                        <a href="#" className="text-indigo-600">
                          Edit
                        </a>
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
                        <a href="#" className="text-amber-300">
                          Detail
                        </a>
                        <span className="mx-2">|</span>
                        <a href="#" className="text-indigo-600">
                          Edit
                        </a>
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
                        <a href="#" className="text-amber-300">
                          Detail
                        </a>
                        <span className="mx-2">|</span>
                        <a href="#" className="text-indigo-600">
                          Edit
                        </a>
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
                        <a href="#" className="text-amber-300">
                          Detail
                        </a>
                        <span className="mx-2">|</span>
                        <a href="#" className="text-indigo-600">
                          Edit
                        </a>
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
                        <a href="#" className="text-amber-300">
                          Detail
                        </a>
                        <span className="mx-2">|</span>
                        <a href="#" className="text-indigo-600">
                          Edit
                        </a>
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
                        <a href="#" className="text-amber-300">
                          Detail
                        </a>
                        <span className="mx-2">|</span>
                        <a href="#" className="text-indigo-600">
                          Edit
                        </a>
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
                        <a href="#" className="text-amber-300">
                          Detail
                        </a>
                        <span className="mx-2">|</span>
                        <a href="#" className="text-indigo-600">
                          Edit
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
          </main>{" "}
        </div>
      </div>
    </div>
  );
};

export default Pendaftaran;
