import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { toUnicode } from "punycode";

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
                price: String(
                  (Number(item.price) / item.quantity) * (item.quantity + 1)
                ),
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

    decrement(state, { payload }: PayloadAction<IDataProps>) {
      const existis = state.find((item) => item.id === payload.id);
      if (existis && existis.quantity > 1) {
        const edited = state.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                quantity: item.quantity - 1,
                price: String(
                  (Number(item.price) / item.quantity) * (item.quantity - 1)
                ),
              }
            : item
        );
        return edited;
      }
      const filtered = state.filter((item) => item.id !== payload.id);
      return filtered;
    },

    remove(state, { payload }: PayloadAction<IDataProps>) {
      const existis = state.find((item) => item.id === payload.id);
      if (existis) {
        const filtered = state.filter((item) => item.id !== payload.id);
        return filtered;
      }
      return existis;
    },
    finalizePurchase(state) {
      alert("Finalizado");
      return [];
    },
  },
});

export const { increment, decrement, remove, finalizePurchase } = stock.actions;
export default stock.reducer;
