import { SafeAreaView, View, StyleSheet, ScrollView } from "react-native";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Product_description from "./components/Product_description";
import Stars from "./components/Starts";
import Description from "./components/Description";
import GrayBar from "./components/GrayBar";
import Icons from "./components/Icons";
import ProductCard from "./components/ProductCard";
import Delivery from "./components/Delivery";
import Guarantee from "./components/Guarantee";

// From https://simpleicons.org/?q=expo
import ExpoLogo from "./assets/expo.svg";

export default function App() {
  return (
    <SafeAreaView style={style.area}>
      <Header />
      <ScrollView>
        <Carousel />
        <Product_description />
        <Stars />
        <Description />
        <GrayBar />
        <Icons />
        <ProductCard />
        <Delivery />
        <Guarantee />
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  area: {
    marginTop: 10,
    flex: 1,
    justifyContent: "top",
  },
});
