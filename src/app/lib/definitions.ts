
export type Cash = {
    id: number;
    id_user: number;
    requests: Requests[];
    value: number;
}

export type Kitchen = {
    id_request: number;
    id_user: number;
    products: Product[];
    observation: ModifyProduct[] | null;
    status: boolean;
}

export type ModifyProduct = {
    id_product: number;
    id_ingredient: number;
    append: boolean;
    mount: number;
}

export type Requests = {
    id: number;
    id_user: number;
    products: Product[];
    observation: ModifyProduct[] | null;
}

export type Category = {
    id: number;
    name: string;
}

export type Product = {
    id: number;
    name: string;
    price: number;
    category: Category;
    recipe: Ingredient[] | null;
    description: string | null;
}

export type Ingredient = {
    id: number;
    name: string;
    mount: number;
    price: number;
}

export type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
    pedidos: Requests[];
}

export type Nav = {
    name: string;
    href: string;
  }