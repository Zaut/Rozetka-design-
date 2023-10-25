import React from "react";
import { View, StyleSheet } from "react-native";

const GrayBar = () => {
  return <View style={styles.grayBar} />;
};

const styles = StyleSheet.create({
  grayBar: {
    backgroundColor: "#a6a5a5",
    height: 1,
    width: "95%",
    marginStart: 10,
  },
});

export default GrayBar;
