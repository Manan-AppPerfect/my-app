export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
};

export type CartItem = {
    product: Product;
    quantity: number;
}

