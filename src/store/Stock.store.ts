import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IListCart {
  photo: string;
  name: string;
  price: string;
  id: number;
  quantity: number;
}

const INITIAL_STATE: IListCart[] = [];

const store = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    increment(state, { payload }: PayloadAction<IListCart>) {
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
      }
      const newProduct: IListCart = {
        photo: payload.photo,
        name: payload.name,
        price: payload.price,
        id: payload.id,
        quantity: 1,
      };
      return [...state, newProduct];
    },
  },
});
