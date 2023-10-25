import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import RozetkaLogo from "../assets/roz.svg";

const Delivery = () => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <View style={styles.group_comp}>
          <Icon
            style={styles.logo1}
            name={"md-location-sharp"}
            size={30}
            color="gray"
          />
          <Text style={styles.text1}>Доставка в</Text>
          <Text style={styles.text2}>Днепр</Text>
          <Icon
            style={styles.arrow}
            name={"chevron-forward-outline"}
            size={30}
            color="gray"
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.group_comp_desc}>
          <RozetkaLogo width={30} height={30} />

          <View>
            <Text style={styles.textFirst}>
              Самовыво из точек выдачи {"\n"} Rozetka
            </Text>
            <Text style={styles.textFirst_2}>Забрать 28 октября с 14:00</Text>
            <Text style={styles.textFirst_3}>Смотреть на карте</Text>
          </View>
          <Text style={styles.textSecond}>Бесплатно</Text>
        </View>

        <View style={styles.group_comp_desc}>
          <Icon name={"rocket-outline"} size={30} color="gray" />

          <View>
            <Text style={styles.textFirst}>
              Доставка курьером Rozetka, {"\n"} Meest ПОШТА
            </Text>
            <Text style={styles.textFirst_2}>Отправим 27 октября</Text>
          </View>
          <Text style={styles.textFirst}> 99 ₴ - 120 ₴</Text>
        </View>

        <View style={styles.group_comp_desc}>
          <Icon2
            name={"storefront-outline"}
            size={30}
            color="gray"
            style={styles.icon2}
          />

          <View>
            <Text style={styles.textFirst_1}>
              Самовыво из отделений {"\n"} почтовых операторов
            </Text>
            <Text style={styles.textFirst_2_2}>Отправим 27 октября</Text>
            <Text style={styles.textFirst_3_3}>Смотреть на карте</Text>
          </View>
          <Text style={styles.textFirst}>119 ₴</Text>
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
    fontSize: 16,
    marginRight: 10,
  },
  text2: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: "30%",
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

export default Delivery;
