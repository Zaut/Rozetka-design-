import { View, Text, StyleSheet, TextInput, StatusBar } from "react-native";
import { Icon } from "react-native-elements";
import Сart from "react-native-vector-icons/Ionicons";
import RozetkaLogo from "../assets/roz.svg";

const Header = () => {
  return (
    <View style={styles.container}>
      <Icon name="menu" type="material" color="white" size={50} />
      <RozetkaLogo width={50} height={50} />
      <TextInput
        style={styles.serch}
        placeholder="Я ищу..."
        width={200}
        height={50}
      />

      <Сart name="cart-outline" type="material" color="white" size={40} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    padding: 10,
    margin: 0,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  logo: {
    color: "white",
    margin: 0,
  },
  serch: {
    margin: 0,
    backgroundColor: "#ffff",
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    fontSize: 18,
    padding: 10,
  },
});

export default Header;
