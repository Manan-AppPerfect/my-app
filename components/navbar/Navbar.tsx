import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-3 border-b border-gray-400">
            <Link href="/" className="text-xl text-gray-900 font-bold">
                MiniCommerce
            </Link>

            <div className="px-3 flex items-center gap-6 text-lg text-gray-700">
                <Link href="/"><button>Home</button></Link>
                <Link href="/cart"><button>Cart</button></Link>     
            </div>
        </nav>
    );
}