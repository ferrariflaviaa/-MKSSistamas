import { useEffect, useState } from "react";
import { isTemplateExpression } from "typescript";

import api from "../../services/api";
import { Card, IDataProps } from "../Card";
import { Container } from "./styled";

interface IListProducts {
  products: IDataProps[];
}
interface IListCart {
  photo: string;
  name: string;
  price: string;
  id: number;
  quantity: number;
}

export const Products = () => {
  const [product, setProduct] = useState<IDataProps[]>([]);
  const [cart, setCart] = useState<IListCart[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get<IListProducts>(
        "/products?page=1&rows=8&sortBy=name&orderBy=DESC"
      );
      setProduct(data.products);
    }
    loadProducts();
  }, []);

  const purchase = (data: IDataProps) => {
    const existis = cart.find((item) => item.id === data.id);
    if (existis) {
      const edited = cart.map((item) =>
        item.id === data.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: String(Number(item.price) * (item.quantity + 1)),
            }
          : item
      );
      setCart(edited);
    } else {
      const newProduct: IListCart = {
        photo: data.photo,
        name: data.name,
        price: data.price,
        id: data.id,
        quantity: 1,
      };
      setCart([...cart, newProduct]);
    }
  };

  return (
    <>
      <Container>
        {product.map((products) => {
          return (
            // <article key={products.id}>
            <Card key={products.id} data={products} handleClick={purchase} />
            // </article>
          );
        })}
      </Container>
      <button onClick={() => console.log(cart)}>verificar</button>
    </>
  );
};
