import React from "react";
import SideBar from "../../../components/SideBar";

function Notifikasi() {
  return (
    <div className="bg-[#DDE5E9]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="bg-slate-950 w-full">
          <main className="container mx-auto bg-white p-8">
            <section className="mb-6">
              <h2 className="text-3xl font-bold text-[#7A51E3]">Notifikasi</h2>
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
                      autocomplete="off"
                      className="rounded-md border border-indigo-400 py-1.5 pl-3 text-gray-900 placeholder:text-indigo-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-50 mr-2"
                    />

                    <button
                      type="button"
                      className="text-white bg-indigo-500 border focus:outline-none hover:bg-indigo-600 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                      <i class="fa-solid fa-filter mr-2"></i> Filter
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
                        Waktu
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Info
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
                        <span>Des, 21, 2023</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <p>
                          Ada vendor Wedding Planning yang Anda idam-idamkan?
                          Yuk, intip beragam pilihannya di sini!
                        </p>
                      </td>
                      <td className="text-center px-6 py-4">
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
                        <span>Nov, 07, 2023</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <p>
                          Ada vendor Wedding Planning yang Anda idam-idamkan?
                          Yuk, intip beragam pilihannya di sini!
                        </p>
                      </td>
                      <td className="text-center px-6 py-4">
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
                        <span>Sept, 03, 2023</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <p>
                          Ada vendor Wedding Planning yang Anda idam-idamkan?
                          Yuk, intip beragam pilihannya di sini!
                        </p>
                      </td>
                      <td className="text-center px-6 py-4">
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
                        <span>Agus, 25, 2023</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <p>
                          Ada vendor Wedding Planning yang Anda idam-idamkan?
                          Yuk, intip beragam pilihannya di sini!
                        </p>
                      </td>
                      <td className="text-center px-6 py-4">
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
                        <span>Des, 21, 2023</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <p>
                          Ada vendor Wedding Planning yang Anda idam-idamkan?
                          Yuk, intip beragam pilihannya di sini!
                        </p>
                      </td>
                      <td className="text-center px-6 py-4">
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
                        <span>Agus, 07, 2023</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <p>
                          Ada vendor Wedding Planning yang Anda idam-idamkan?
                          Yuk, intip beragam pilihannya di sini!
                        </p>
                      </td>
                      <td className="text-center px-6 py-4">
                        <a href="#" className="text-indigo-600">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>8</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Jun, 21, 2023</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <p>
                          Ada vendor Wedding Planning yang Anda idam-idamkan?
                          Yuk, intip beragam pilihannya di sini!
                        </p>
                      </td>
                      <td className="text-center px-6 py-4">
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
}

export default Notifikasi;
