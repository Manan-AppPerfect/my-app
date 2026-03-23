import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 border-b border-gray-200">
            <Link href="/" className="text-4xl font-bold tracking-tight">
                MiniCommerce
            </Link>

            <div className="text-blue-400 space-x-4">
                <Link href="/"><button>Home</button></Link>
                <Link href="/cart"><button>Cart</button></Link>
                    
            </div>
        </nav>
    );
}