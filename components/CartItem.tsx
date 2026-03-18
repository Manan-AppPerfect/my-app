import { CartItem as CartItemType } from "@/types";

type CartProps = {
    item: CartItemType;
    onRemove: (id: number) => void;
};

export default function CartItem( {item, onRemove}: CartProps) {
    return (
        <div className="border p-4 rounded mb-2">
            <h3>{item.product.title}</h3>
            <p>Price: ₹{item.product.price}</p>
            <p>Quantity: {item.quantity}</p>

            <button onClick={() => onRemove(item.product.id)} className="bg-red-400 text-white">
                Remove
            </button>
        </div>
    )
}