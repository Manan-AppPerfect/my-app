import { CartItem as CartItemType } from "@/types"
import CartItem from "./CartItem";

type CartListProps = {
    cart: CartItemType[];
    removeFromCart: (id: number) => void;
};

export default function CartList({ cart, removeFromCart }: CartListProps) {
    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">
                Your Cart
            </h2>

            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                cart.map((item) => (
                    <CartItem 
                        key={item.product.id}
                        item={item}
                        onRemove={removeFromCart}
                    />
                ))
            )}
        </div>
    );
}