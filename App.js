import React from "react";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import productsReducers from "./store/reducers/productsReducers/productsReducers";
import cartReducers from "./store/reducers/cartReducers/cartReducers";

import ShopNavigator from "./navigation/ShopNavigator/ShopNavigator";
import ordersReducers from "./store/reducers/ordersReducers/ordersReducers";

enableScreens();

const rootReducer = combineReducers({
  products: productsReducers,
  cart: cartReducers,
  orders: ordersReducers,
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
