import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import api from "../../services/api";
import { RootState } from "../../store";
import { increment } from "../../store/Stock.store";
import { Card, IDataProps } from "../Card";
import { Container } from "./styled";

interface IListProducts {
  products: IDataProps[];
}

export const Products = () => {
  const [product, setProduct] = useState<IDataProps[]>([]);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.stock);

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
    // const existis = cart.find((item) => item.id === data.id);
    // if (existis) {
    //   const edited = cart.map((item) =>
    //     item.id === data.id
    //       ? {
    //           ...item,
    //           quantity: item.quantity + 1,
    //           price: String(Number(item.price) * (item.quantity + 1)),
    //         }
    //       : item
    //   );
    //   setCart(edited);
    // } else {
    //   const newProduct: IListCart = {
    //     photo: data.photo,
    //     name: data.name,
    //     price: data.price,
    //     id: data.id,
    //     quantity: 1,
    //   };
    //   setCart([...cart, newProduct]);
    // }
  };

  return (
    <>
      <Container>
        {product.map((product) => {
          return (
            // <article key={products.id}>
            <Card
              key={product.id}
              data={product}
              handleClick={() => dispatch(increment(product))}
            />
            // onClick={() => dispatch(increment())}
            // </article>
          );
        })}
      </Container>
      <button onClick={() => console.log(cart)}>verificar</button>
    </>
  );
};
