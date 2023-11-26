import React from "react";
import SideBar from "../../../../components/SideBar";
import voucher from "../../../../img/voucher.png";
import Navbar from "../../../../components/Navbar";

const Promo = () => {
  return (
    <div className="bg-[#DDE5E9]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="bg-slate-950 w-full">
          <Navbar />
          <main className="container mx-auto bg-white p-8">
            <section className="mb-5">
              <h2 className="text-3xl font-bold text-[#7A51E3]">Promo</h2>
            </section>

            <section>
              <div className="relative shadow-md sm:rounded-lg border overflow-hidden">
                <div className="mb-4 p-3">
                  <div className="bg-[#7A51E3] w-7 text-center rounded-sm inline-block mt-2.5">
                    <i className="fa-solid fa-plus text-white"></i>
                  </div>

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

                <table className="main-w-full border-gray-300 shadow-md">
                  <thead>
                    <tr className="text-white">
                      <th className="py-2 px-5 border-b bg-violet-800">ID</th>
                      <th className="py-2 px-10 border-b bg-violet-800">
                        Nama
                      </th>
                      <th className="py-2 px-10 border-b bg-violet-800">
                        Gambar
                      </th>
                      <th className="py-2 px-10 border-b bg-violet-800">
                        Waktu Mulai
                      </th>
                      <th className="py-2 px-10 border-b bg-violet-800">
                        Waktu Sampai
                      </th>
                      <th className="py-2 px-10 border-b bg-violet-800">
                        Kriteria
                      </th>
                      <th className="py-2 px-10 border-b bg-violet-800">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-5 border-b text-black">1</td>
                      <td className="py-2 px-10 border-b text-black">10.10</td>
                      <td className="py-2 px-10 border-b text-black">
                        <img src={voucher} />
                      </td>
                      <td className="py-2 px-10 border-b text-black text-center">
                        10/10/2023
                      </td>
                      <td className="py-2 px-10 border-b text-black text-center">
                        20/10/2023
                      </td>
                      <td className="py-2 px-10 border-b text-black">
                        Diskon 5% untuk pembelian <br />
                        paket product launching
                      </td>
                      <td className="py-2 px-10 border-b text-violet-800 text-center">
                        Edit
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td className="py-2 px-5 border-b text-black">2</td>
                      <td className="py-2 px-10 border-b text-black">10.10</td>
                      <td className="py-2 px-10 border-b text-black">
                        <img src={voucher} />
                      </td>
                      <td className="py-2 px-10 border-b text-black text-center">
                        10/10/2023
                      </td>
                      <td className="py-2 px-10 border-b text-black text-center">
                        20/10/2023
                      </td>
                      <td className="py-2 px-10 border-b text-black">
                        Diskon 5% untuk pembelian <br />
                        paket product launching
                      </td>
                      <td className="py-2 px-10 border-b text-violet-800 text-center">
                        Edit
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td className="py-2 px-5 border-b text-black">3</td>
                      <td className="py-2 px-10 border-b text-black">10.10</td>
                      <td className="py-2 px-10 border-b text-black">
                        <img src={voucher} />
                      </td>
                      <td className="py-2 px-10 border-b text-black text-center">
                        10/10/2023
                      </td>
                      <td className="py-2 px-10 border-b text-black text-center">
                        20/10/2023
                      </td>
                      <td className="py-2 px-10 border-b text-black">
                        Diskon 5% untuk pembelian <br />
                        paket product launching
                      </td>
                      <td className="py-2 px-10 border-b text-violet-800 text-center">
                        Edit
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

export default Promo;
