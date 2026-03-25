import AuthGuard from "@/components/auth/AuthGuard";
import CartPage from "@/components/cart/CartPage";

export default function CartItemsPage(){
    return (
        <AuthGuard>
            <CartPage />
        </AuthGuard>
    );
}