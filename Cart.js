import React from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import { Icon, Card, CardItem, Thumbnail, Text, Left, Container } from "native-base";

// Style
const Cart = ({ navigation }) => (
    <Container>
        <Icon name='cart' button onPress={() => navigation.navigate("CoffeeCart")} />
    </Container>
);

export default Cart;
