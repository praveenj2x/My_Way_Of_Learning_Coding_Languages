import { LogoIcon } from "@/components/LocalComp/logo";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen grid gap-10 lg:grid-cols-2 p-6">

      {/* LEFT SECTION */}
      <section className="
        p-6 flex flex-col gap-6 
        border border-gray-400
        rounded-2xl shadow-md
      ">
        <Link href="/" className="w-fit">
          <LogoIcon />
        </Link>

        <div className="flex-1">
          {children}
        </div>
      </section>

      {/* RIGHT SECTION */}
      <section className="
        p-6 flex flex-col gap-6 
        border border-gray-400
        rounded-2xl shadow-md 
        relative overflow-hidden
      ">

        {/* QUOTE */}
        <div className="relative z-10 mt-6 space-y-3">
          <blockquote className="text-2xl font-semibold text-gray-100 text-center leading-snug">
            "Securely manage your finances with Finac - Your trusted personal finance tracker."
          </blockquote>

          <div className="flex items-center justify-between">
            <div>
              <cite className="text-gray-200">- Finac Team</cite>
              <p className="text-sm text-gray-300">Your partners in financial wellness</p>
            </div>
          </div>

          {/* Stars */}
          <div className="flex gap-1 text-yellow-300">
            {[1, 2, 3, 4, 5].map((num) => (
            <span key={num}>⭐</span>
            ))}
          </div>
        </div>

        {/* IMAGE BLOCK */}
        <div className="
          relative flex-1 w-full h-full 
          rounded-xl overflow-hidden border border-gray-400 shadow-md
        ">
          <Image
            src="/assets/demo.png"
            alt="Demo Image"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>
    </main>
  );
};

export default layout;
