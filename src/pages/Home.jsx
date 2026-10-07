import React from "react";
import { Link } from "react-router";

function Home() {
  const faqs = [
    {
      id: 1,
      question: "Cara Mendaftar Akun",
      subAnswer: "Petunjuk langkah demi langkah mendaftar.",
    },
    {
      id: 2,
      question: "Metode Pembayaran",
      subAnswer: "Daftar metode pembayaran yang didukung.",
    },
    {
      id: 3,
      question: "Kebijakan Pengembalian",
      subAnswer: "Syarat dan ketentuan refund.",
    },
  ];

  return (
    <div>
      <h1 className="mb-2 text-sm font-medium text-primary">Pusat Bantuan</h1>
      <h2 className="text-3xl font-bold tracking-tight text-foreground">
        Pertanyaan Umum
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
        Temukan jawaban dari pertanyaan yang sering ditanyakan.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {faqs.map((faq) => (
          <Link
            to={`/home/${faq.id}`}
            key={faq.id}
            className="h-full rounded-xl border border-border bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
          >
            <div className="bg-primary/10 font-bold w-10 h-10 rounded-md text-primary flex items-center justify-center mb-5">
              {faq.id}
            </div>
            <h3 className="mb-2 text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
              {faq.question}
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              {faq.subAnswer}
            </p>
            <div className="mt-5 flex items-center text-sm font-medium text-primary">
              Lihat detail
              <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
