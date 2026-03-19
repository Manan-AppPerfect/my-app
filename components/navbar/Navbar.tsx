import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-black text-white font-bold">
            <h1 className="text-blue-400">Mini-Commerce</h1>

            <div className="text-blue-400 space-x-4">
                <Link href="/"><button>Home</button></Link>
                <Link href="/cart"><button>Cart</button></Link>
                    
            </div>
        </nav>
    );
}