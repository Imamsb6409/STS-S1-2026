import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router";

function FaqDetail() {
  const { id } = useParams();

  return (
    <div>
      <p className="text-sm font-medium text-primary mb-2 flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" /> Kembali ke HOME
      </p>
      <div class="mt-6 rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
        <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
          {id}
        </div>
        <p class="mb-2 text-sm font-medium text-primary">Detail Pertanyaan</p>
        <h2 class="text-2xl font-bold  text-foreground sm:text-3xl">
          Detail HOME - ID: {id}
        </h2>
        <p class="mt-4 text-base leading-7 text-muted-foreground">
          Ini adalah halaman detail untuk HOME dengan ID:{" "}
          <span class="font-semibold text-foreground">{id}</span>.
        </p>
        <div class="my-6 h-px bg-border"></div>
        <div class="rounded-xl bg-muted/50 p-4">
          <p class="text-sm  text-muted-foreground">
            Informasi lengkap mengenai pertanyaan ini dapat ditampilkan pada
            halaman detail.
          </p>
        </div>
        <div class="mt-6">
          <Link
            to="/"
            class="flex w-max items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            Kembali ke HOME
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FaqDetail;
