import { SafeAreaView, View, StyleSheet, Text } from "react-native";

const Product_description = () => {
  return (
    <Text style={style.text}>
      Ноутбук ASUS ROG Strix Scar 18 (2023) G834JY-N6082X (90NR0CG1-M00630)
      Black + Рюкзак ROG backpack + Мышка ROG Impact Gaming
    </Text>
  );
};

const style = StyleSheet.create({
  text: {
    color: "#000000",
    fontSize: 18,
    padding: 20,
    fontWeight: "bold",
  },
});

export default Product_description;
