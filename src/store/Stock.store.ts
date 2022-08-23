import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IDataProps } from "../components/Card";

const INITIAL_STATE: IDataProps[] = [];

const stock = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    increment(state, { payload }: PayloadAction<IDataProps>) {
      const existis = state.find((item) => item.id === payload.id);
      if (existis) {
        const edited = state.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: String(Number(item.price) * (item.quantity + 1)),
              }
            : item
        );
        return edited;
      }
      const newProduct: IDataProps = {
        photo: payload.photo,
        description: payload.description,
        name: payload.name,
        price: payload.price,
        id: payload.id,
        quantity: 1,
      };
      return [...state, newProduct];
    },
  },
});

export const { increment } = stock.actions;
export default stock.reducer;
