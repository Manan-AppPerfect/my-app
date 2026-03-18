export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-black text-white font-bold">
            <h1 className="text-blue-400">Mini-Commerce</h1>

            <div className="text-blue-400 space-x-4">
                <button>Home</button>
                <button>Cart</button>
            </div>
        </nav>
    );
}