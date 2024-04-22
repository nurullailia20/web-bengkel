import React from "react";
import { useToggleForm } from "../../hooks/useToggleForm";

function RegisterForm() {
  const { toggleHandler } = useToggleForm();
  return (
    <div className="w-[600px] h-auto shadow-xl rounded-2xl px-10 py-5 flex flex-col gap-y-5">
      <div className="font-semibold text-xl text-center">Registrasi</div>
      <form className="w-full h-full flex flex-col gap-y-3">
        <div className="flex flex-col">
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            name=""
            id="name"
            className="border p-3 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Email</label>
          <input
            type="text"
            name=""
            id="email"
            className="border p-3 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone_number">No HP</label>
          <input
            type="text"
            name=""
            id="phone_number"
            className="border p-3 rounded-md"
          />
        </div>
        <div className="flex gap-x-3 ">
          <div className="w-1/2 flex flex-col">
            <label htmlFor="password">Kata Sandi</label>
            <input
              type="text"
              name=""
              id="password"
              className="border p-3 rounded-md"
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <label htmlFor="confirm_password">Konfirmasi Kata Sandi</label>
            <input
              type="text"
              name=""
              id="confirm_password"
              className="border p-3 rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="px-10 p-3 bg-teal-400 rounded-md ">
            Buat Akun
          </button>
        </div>
        <div className="flex gap-x-1 justify-center">
          <p>Sudah punya akun? </p>
          <span
            onClick={toggleHandler}
            className="text-blue-500 cursor-pointer "
          >
            Masuk
          </span>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
