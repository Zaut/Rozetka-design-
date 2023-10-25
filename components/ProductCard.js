import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Rozfull from "../assets/roz_full.svg";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Private from "../assets/private.jpg";
import Mono from "../assets/mono.jpg";

export default function ProductCard() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.header}>
        <View style={styles.firs}>
          <Text style={styles.text}>Продавец:</Text>
          <Rozfull width={80} height={80} />
        </View>

        <View style={styles.divider} />

        <View style={styles.group_comp}>
          <View style={styles.left}>
            <Text style={styles.price}>189 999 ₴</Text>
            <Text style={styles.text2}>Есть в наличии</Text>
          </View>

          <View style={styles.iconContainer}>
            <Icon2
              name="balance-scale"
              style={styles.balance_scale}
              size={20}
              color="grey"
            />
            <Icon name="heart-outline" size={30} color="orange" />
            <Text style={styles.iconText}>200</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.buyButton}>
        <Icon name="cart-outline" size={20} color="white" />
        <Text style={styles.buttonText}>Купить</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.creditButton}>
        <Text style={styles.text3}>Купить в кредит</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <View style={styles.bankLogos}>
        <Image source={Private} style={styles.imagePrivate} />
        <Image source={Mono} style={styles.imageMono} />
      </View>
    </View>
  );
}

const styles = {
  cardContainer: {
    margin: 20,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "white",
  },
  group_comp: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  left: {},
  balance_scale: {
    marginRight: 15,
  },
  text: {
    fontSize: 16,
    color: "#797878",
  },
  text2: {
    color: "#00a046",
  },
  text3: {
    color: "#00a046",
    fontSize: 16,
  },
  firs: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  header: {},
  price: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buyButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00a046",
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
  creditButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 7,
    marginBottom: 15,
    borderColor: "#00a046",
    borderWidth: 1,
  },
  bankLogos: {
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 0,
  },

  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconText: {
    color: "#797878",
    marginHorizontal: 5,
  },
  scaleIcon: {
    marginLeft: 10,
  },
  imagePrivate: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginBottom: 5,
  },
  imageMono: {
    width: 50,
    height: 50,
    marginLeft: 20,
  },
};
