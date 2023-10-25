import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import RozetkaLogo from "../assets/roz.svg";

const Guarantee = () => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <View style={styles.group_comp}>
          <Icon
            style={styles.logo1}
            name={"wallet-outline"}
            size={30}
            color="gray"
          />
          <Text style={styles.text1}>
            Оплата. Оплата при получении товара, Оплата картой в отделении,
            Google Pa...{" "}
          </Text>

          <Icon
            style={styles.arrow}
            name={"chevron-down-outline"}
            size={30}
            color="gray"
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.group_comp}>
          <Icon
            style={styles.logo1}
            name={"shield-checkmark-outline"}
            size={30}
            color="gray"
          />
          <Text style={styles.text1_1}>
            Гарантия. 24 месяца официальной гарантии от производителя
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 20,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "white",
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 0,
  },
  group_comp: {
    flexDirection: "row",
    alignItems: "center",

    padding: 15,
  },
  group_comp_desc: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    padding: 15,
  },
  logo1: {
    marginLeft: 10,
    marginRight: 25,
  },
  icon2: {
    marginLeft: -30,
  },
  text1: {
    width: 240,
    fontSize: 16,
    marginRight: 10,
  },
  text1_1: {
    width: 280,
    fontSize: 16,
    marginRight: 10,
  },
  text2: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textFirst: {
    marginLeft: 10,
    marginBottom: 5,
  },
  textFirst_1: {
    marginLeft: -20,
    marginBottom: 5,
  },
  textFirst_2: {
    marginLeft: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textFirst_2_2: {
    marginLeft: -20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textFirst_3: {
    marginLeft: 10,
    color: "#3e77aa",
    marginBottom: 5,
  },
  textFirst_3_3: {
    marginLeft: -20,
    color: "#3e77aa",
    marginBottom: 5,
  },
  textSecond: {
    marginLeft: 10,
    alignItems: "top",
    color: "#00a046",
  },
});

export default Guarantee;
