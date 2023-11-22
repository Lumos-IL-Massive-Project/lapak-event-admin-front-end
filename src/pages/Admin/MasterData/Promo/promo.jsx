import React from "react";
import SideBar from "../../../../components/SideBar";
import voucher from "../../../../img/voucher.png";

const Promo = () => {
  return (
    <div className="bg-[#eef1f3]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="w-full">
          <section className="mb-5">
              <h2 className="text-3xl font-bold text-[#7A51E3]">Kategori</h2>
          </section>
          <div className="flex justify-center items-center h-screen p-5">
            <div className="mx-auto py-10 bg-white text-white rounded-2xl shadow-lg">
              <div className="bg-indigo-600 w-7 text-center rounded-sm inline-block mt-2.5">
              <i class="fa-solid fa-plus text-white"></i>
              </div>
              <table className="main-w-full border-gray-300 shadow-md">
                <thead>
                  <tr>
                    <th className="py-2 px-5 border-b bg-violet-800">ID</th>
                    <th className="py-2 px-10 border-b bg-violet-800">Nama</th>
                    <th className="py-2 px-10 border-b bg-violet-800">Gambar</th>
                    <th className="py-2 px-10 border-b bg-violet-800">Waktu Mulai</th>
                    <th className="py-2 px-10 border-b bg-violet-800">Waktu Sampai</th>
                    <th className="py-2 px-10 border-b bg-violet-800">Kriteria</th>
                    <th className="py-2 px-10 border-b bg-violet-800">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-5 border-b text-black">1</td>
                    <td className="py-2 px-10 border-b text-black">10.10</td>
                    <td className="py-2 px-10 border-b text-black">
                      <img src={voucher} />
                    </td>
                    <td className="py-2 px-10 border-b text-black text-center">10/10/2023</td>
                    <td className="py-2 px-10 border-b text-black text-center">20/10/2023</td>
                    <td className="py-2 px-10 border-b text-black">Diskon 5% untuk pembelian <br />paket product launching</td>
                    <td className="py-2 px-10 border-b text-violet-800 text-center">Edit</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="py-2 px-5 border-b text-black">2</td>
                    <td className="py-2 px-10 border-b text-black">10.10</td>
                    <td className="py-2 px-10 border-b text-black">
                      <img src={voucher} />
                    </td>
                    <td className="py-2 px-10 border-b text-black text-center">10/10/2023</td>
                    <td className="py-2 px-10 border-b text-black text-center">20/10/2023</td>
                    <td className="py-2 px-10 border-b text-black">Diskon 5% untuk pembelian <br />paket product launching</td>
                    <td className="py-2 px-10 border-b text-violet-800 text-center">Edit</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="py-2 px-5 border-b text-black">3</td>
                    <td className="py-2 px-10 border-b text-black">10.10</td>
                    <td className="py-2 px-10 border-b text-black">
                      <img src={voucher} />
                    </td>
                    <td className="py-2 px-10 border-b text-black text-center">10/10/2023</td>
                    <td className="py-2 px-10 border-b text-black text-center">20/10/2023</td>
                    <td className="py-2 px-10 border-b text-black">Diskon 5% untuk pembelian <br />paket product launching</td>
                    <td className="py-2 px-10 border-b text-violet-800 text-center">Edit</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-black">
                  <p>1 of 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;