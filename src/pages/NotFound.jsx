import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 ">
      <p className="font-bold tracking-tight text-muted-foreground -mb-8">
        error
      </p>
      <h1 className="text-9xl font-bold tracking-tight text-muted-foreground">
        404
      </h1>
      <h2 className="text-3xl font-bold tracking-tight text-foreground ">
        Halaman Tidak Ditemukan
      </h2>
      <p className="max-w-md text-center text-sm leading-6 text-muted-foreground mb-2">
        Sepertinya halaman yang Anda cari sedang tersesat, dipindahkan, atau
        memang belum pernah ada.
      </p>
      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="rounded-lg bg-black px-3 py-2 text-sm font-medium transition-all duration-200  hover:bg-gray-700 hover:-translate-y-1 text-white flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Home
        </Link>
        <Link
          to="/"
          className="rounded-lg bg-white border px-3 py-2 text-sm font-medium transition-all duration-200  hover:bg-gray-100  text-primary flex items-center gap-2"
        >
          Pusat Bantuan
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
