import { useEffect, useState } from "react";

import api from "../../services/api";
import { Card } from "../Card";

interface IProduct {
  id: string;
  name: string;
  price: string;
  photo: string;
  description: string;
}

interface IListProducts {
  products: IProduct[];
}

export const Products = () => {
  const [product, setProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get<IListProducts>(
        "/products?page=1&rows=8&sortBy=name&orderBy=DESC"
      );
      setProduct(data.products);
    }
    loadProducts();
  }, []);

  return (
    <div>
      {product.map((products) => {
        return (
          <article key={products.id}>
            <Card
              img={`${products.photo}`}
              name={`${products.name}`}
              description={`${products.description}`}
              price={`${products.price}`}
            />
          </article>
        );
      })}
    </div>
  );
};
