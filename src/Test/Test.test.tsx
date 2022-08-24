/* eslint-disable prettier/prettier */
import { render, screen } from "@testing-library/react";

import { Card } from "../components/Card";

const card = {
  description: "descrição para teste",
  id: 2,
  name: "phone",
  photo: "./img",
  price: "900",
  quantity: 1,
};
describe("Card Component", () => {
  test("deve iniciar o titulo com o valor 0", () => {

    const { getByText } = render(
      <Card data={card} handleClick={jest.fn()} /> );
      screen.logTestingPlaygroundURL();
      const teste = getByText(/comprar/i);
      // fireEvent.click(teste);
      expect(teste).toBeInTheDocument();
  });
});
