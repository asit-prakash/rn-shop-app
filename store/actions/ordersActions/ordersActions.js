export const ADD_ORDER = "ADD_ORDER";

export const addOrder = (cartItems, cartTotal) => {
  return async (dispatch) => {
    const date = new Date();

    //can execute async code here
    const response = await fetch(
      "https://rn-shop-app-2516a.firebaseio.com/orders/u1.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartItems,
          amount: cartTotal,
          date: date.toISOString,
        }),
      }
    );
    const resData = await response.json();

    dispatch({
      type: ADD_ORDER,
      orderData: {
        id: resData.name,
        items: cartItems,
        amount: cartTotal,
        date: date,
      },
    });
  };
};
