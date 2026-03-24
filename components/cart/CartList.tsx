import { CartItem as CartItemType } from "@/types"
import CartItem from "./CartItem";

type Props = {
    cart: CartItemType[];
    removeFromCart: (id: number) => void;
};

export default function CartList({ cart, removeFromCart }: Props) {
    return (
        <div className="grid grid-cols-4 gap-6 mt-4">
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