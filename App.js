import React, { Component } from "react";
import { Spinner, Header, Container, Icon } from "native-base";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import CoffeeList from "./Components/CoffeeList";
import CoffeeDetail from "./Components/CoffeeDetail";
import CoffeeCart from "./Components/CoffeeCart";

import Cart from "./Cart";

const { Navigator, Screen } = createStackNavigator();

export default class App extends Component {
  // state = {
  //   loading: true,
  // };

  // async componentDidMount() {
  //   await Expo.Font.loadAsync({
  //     Roboto: require("native-base/Fonts/Roboto.ttf"),
  //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //   });
  //   this.setState({ loading: false });
  // }
  touchytouch() {
    navigation.navigate("CoffeeCart");
  }
  render() {
    // if (this.state.loading) {
    //   return <Spinner color="#132D4B" />;
    // }
    return (
      <NavigationContainer>
        <Navigator initialRouteName="Login">
          <Screen name="CoffeeCart" component={CoffeeCart} />
          <Screen
            name="CoffeeDetail"
            component={CoffeeDetail}
            options={({ navigation, route }) => {
              const { coffeeshop } = route.params;
              return {
                title: coffeeshop.name,
                headerRight: () => (
                  <Icon
                    name="cart"
                    button
                    onPress={() => navigation.navigate("CoffeeCart")}
                  />
                ),
              };
            }}
          />
          <Screen
            name="CoffeeList"
            component={CoffeeList}
            options={({ navigation }) => {
              return {
                title: "Flavors",
                headerRight: () => (
                  <Icon
                    name="cart"
                    button
                    onPress={() => navigation.navigate("CoffeeCart")}
                  />
                ),
              };
            }}
          />
          <Screen
            name="Signup"
            component={Signup}
            options={{ title: "Register!" }}
          />
          <Screen
            name="Login"
            component={Login}
            options={{
              title: "Login mate!",
              headerStyle: {
                backgroundColor: "rgb(20,90,100)",
              },
            }}
          />
        </Navigator>
      </NavigationContainer>
    );
  }
}
