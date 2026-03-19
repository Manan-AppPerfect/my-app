import { CartItem as CartItemType } from "@/types";

type Props = {
    item: CartItemType;
    onRemove: (id: number) => void;
};

export default function CartItem( {item, onRemove}: Props) {
    return (
        <div className="border p-4 rounded mb-2">
            <h3>{item.product.title}</h3>
            <p>Price: ₹{item.product.price}</p>
            <p>Quantity: {item.quantity}</p>

            <button onClick={() => onRemove(item.product.id)} className="mt-3 bg-red-400 p-1 rounded text-white">
                Remove
            </button>
        </div>
    )
}