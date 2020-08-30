import { ADD_ORDER } from "../../actions/ordersActions/ordersActions";
import Order from "../../../models/orders";

const initialState = {
  orders: [],
};

const ordersReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        action.orderData.id,
        action.orderData.items,
        action.orderData.amount,
        action.orderData.date
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
  }
  return state;
};

export default ordersReducers;
