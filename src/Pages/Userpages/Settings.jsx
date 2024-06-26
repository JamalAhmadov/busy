import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdLockOutline } from "react-icons/md";

import profile from "../../../public/user-128.svg";

const Settings = () => {
  const user = {
    name: "Jamal",
    email: "jamal@gmail.com",
    password: "12356",
    number: "+994-70-070-88-99",
    utype: "işaxtaran",
    avatar:
      "data:image/jpeg;base64,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",
  };

  return (
    <div className="flex justify-center w-full">
      <div className="w-11/12">
        <h1 className="py-10 text-2xl font-normal">Profil</h1>
        <div className="w-full shadow-custom mb-10">
          <div className="border-b border-gray-300 min-h-10 p-6">
            <div className="flex items-center gap-2 text-blue-700 font-semibold">
              <CgProfile />
              <h1>Mənim hesabım</h1>
            </div>
          </div>
          <div className="sm:p-10 py-10 gap-5 w-full flex flex-col xl:flex-row">
            <div className="w-2/12 pl-6">
              <img
                className=" sm:block hidden min-w-40 bg-slate-200 rounded-sm"
                src={user.avatar ? user.avatar : profile}
                alt=""
              />
            </div>
            <div className="flex w-10/12 flex-col">
              <div className="w-full flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 sm:px-6  pl-3">
                  <h5 className="py-3">Ad-soyad</h5>
                  <input
                    className="border p-2 rounded-sm w-full"
                    type="text"
                    name="name"
                    value={user.name}
                    id="name"
                  />
                </div>
                <div className="w-full sm:w-1/2 sm:px-6  pl-3">
                  <h5 className="py-3">Mobil telefon</h5>
                  <input
                    className="border p-2 rounded-sm w-full"
                    type="text"
                    name="number"
                    value={user.number}
                    id="number"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 sm:px-6  pl-3">
                  <h5 className="py-3">hesabın növü</h5>
                  <div className="bg-green-600 flex items-center justify-center cursor-pointer text-white p-2 rounded-sm w-full">
                    {user.utype}
                  </div>
                </div>
                <div className="w-full sm:w-1/2 sm:px-6 pl-3">
                  <h5 className="py-3">E-poçt ünvanı</h5>
                  <input
                    className="border p-2 rounded-sm w-full"
                    type="text"
                    name="email"
                    value={user.email}
                    id="email"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full shadow-custom">
          <div className="border-b border-gray-300 min-h-10 p-6">
            <div className="flex items-center gap-2 text-blue-700 font-semibold">
              <MdLockOutline />
              <h1>Təhlükəsizlik</h1>
            </div>
          </div>
          <div className="w-full grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-6">
            <div className="px-6">
              <h5 className="py-3">indiki parol</h5>
              <input className="border p-2 rounded-sm w-full" type="password" />
            </div>
            <div className="px-6">
              <h5 className="py-3">yeni parol</h5>
              <input className="border p-2 rounded-sm w-full" type="password" />
            </div>
            <div className="px-6">
              <h5 className="py-3">yeni parolu təkrarla</h5>
              <input className="border p-2 rounded-sm w-full" type="password" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end items-center h-36">
          <button className="w-36 h-12 rounded-md text-white bg-blue-500">
            Yadda saxla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
