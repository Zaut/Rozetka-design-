import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import RamImage from "../assets/notebook/ram.png";
import IPSImage from "../assets/notebook/ips.png";

const Icons = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={RamImage} style={styles.image} />
        <Image source={IPSImage} style={styles.image} />
      </View>
      <Text style={styles.text}>Подробнее о товаре</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#3e77aa",
    fontSize: 14,
    marginTop: 10,
  },
  container: {
    alignItems: "start",
    padding: 15,
  },
  imageContainer: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});

export default Icons;
