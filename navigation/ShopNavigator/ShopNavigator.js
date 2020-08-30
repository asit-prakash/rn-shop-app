import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ProductsScreen from "../../screens/shop/ProductsScreen/ProductsScreen";
import ProductDetailsScreen from "../../screens/shop/ProductDetailsScreen/ProductDetailsScreen";
import colors from "../../constants/colors/colors";
import CartScreen from "../../screens/shop/CartScreen/CartScreen";
import OrdersScreen from "../../screens/shop/OrdersScreen/OrdersScreen";
import UserProductsScreen from "../../screens/user/UserProductsScreen/UserProductsScreen";
import EditProductScreen from "../../screens/user/EditProductScreen/EditProductScreen";

const defaultNavSettings = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.primaryLight : "",
  },
  headerTintColor: "white",
};

const ProductsNavigator = createStackNavigator(
  {
    Products: ProductsScreen,
    ProductDetails: ProductDetailsScreen,
    Cart: CartScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name="md-cart" size={23} color={drawerConfig.tintColor} />
      ),
    },
    defaultNavigationOptions: defaultNavSettings,
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name="md-list" size={23} color={drawerConfig.tintColor} />
      ),
    },
    defaultNavigationOptions: defaultNavSettings,
  }
);

const AdminNavigator = createStackNavigator(
  {
    UserProducts: UserProductsScreen,
    EditProducts: EditProductScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name="md-create" size={23} color={drawerConfig.tintColor} />
      ),
    },
    defaultNavigationOptions: defaultNavSettings,
  }
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator,
  },
  {
    contentOptions: {
      activeTintColor: colors.primary,
    },
  }
);

export default createAppContainer(ShopNavigator);
