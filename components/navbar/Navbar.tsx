"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import { RootState } from "@/store/store";

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <nav className="flex justify-between items-center p-3 border-b border-gray-400">
      <Link href="/" className="text-xl text-gray-900 font-bold">
        MiniCommerce
      </Link>

      <div className="px-3 flex items-center gap-6 text-lg text-gray-700">
        <Link href="/"><button>Home</button></Link>
        <Link href="/cart"><button>Cart</button></Link>
        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}