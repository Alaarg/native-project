import React from "react";
import { StyleSheet, Viwe } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./component/HomeScreen";
//  import Footer from "./component/Footer"
import Postitem from "./component/Postitem";
import Login from "./component/Login";
import Signup from "./component/Signup";
import ProfileScreen from "./component/ProfileScreen";
import Search from "./component/Search";
import Addpost from "./component/Addpost";

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },

    Profile: ProfileScreen,
    //  footer:Footer,
    post: Postitem,
    login: Login,
    signup: Signup,
    search: Search,
    add: Addpost
  },
  {
    initialRouteName: "login"
  }
);

const AppContainer = createAppContainer(RootStack);

export default function App() {
  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
