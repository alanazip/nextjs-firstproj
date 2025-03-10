import Link from "next/link";

export function NavBar() {
    return (
      <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-200">
        <Link
          href="/"
          className="uppercase font-bold text-md h-12 flex items-center"
        >
          Next Store
        </Link>
        {/* Aqui pode ter mais itens, botões, etc. */}
      </nav>
    );
  }