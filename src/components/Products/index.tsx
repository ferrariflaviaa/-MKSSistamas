import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import api from "../../services/api";
import { increment } from "../../store/Stock.store";
import { Card, IDataProps } from "../Card";
import { Container } from "./styled";

interface IListProducts {
  products: IDataProps[];
}

export const Products = () => {
  const [product, setProduct] = useState<IDataProps[]>([]);
  const dispatch = useDispatch();

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
  );
};
