"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import { RootState } from "@/store/store";
import { useFeature } from "@/hooks/useFeature";

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const newNavbar = useFeature("newNavbar");

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  
  // 🆕 NEW NAVBAR UI
  if (newNavbar) {
    return (
      <nav className="flex justify-between items-center p-4 bg-black text-white">
        <Link href="/" className="text-2xl font-bold">
          🚀 MiniCommerce Pro
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/cart">Cart 🛒</Link>

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-1 rounded"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </nav>
    );
  }

  // 🟢 OLD NAVBAR (YOUR ORIGINAL)
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