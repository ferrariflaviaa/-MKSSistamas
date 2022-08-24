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

  return (
    <>
      <Container>
        {product.map((product) => {
          return (
            <Card
              key={product.id}
              data={product}
              handleClick={() => dispatch(increment(product))}
            />
          );
        })}
      </Container>
      <button onClick={() => console.log(cart)}>verificar</button>
    </>
  );
};
