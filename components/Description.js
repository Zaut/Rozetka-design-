import { SafeAreaView, View, StyleSheet, Text } from "react-native";

const Description = () => {
  return (
    <Text style={style.text}>
      Экран 18" IPS (2560x1600) WQXGA 240 Гц, матовый / Intel Core i9-13980HX
      (4.0 - 5.6 ГГц) / RAM 32 ГБ / SSD 2 ТБ / nVidia GeForce 4090, 16 ГБ / без
      ОД / LAN / Wi-Fi / Bluetooth / Windows 11 Pro / 3.1 кг / черный / рюкзак +
      игровая мышь
    </Text>
  );
};

const style = StyleSheet.create({
  text: {
    color: "#000000",
    fontSize: 14,
    padding: 20,
  },
});

export default Description;
