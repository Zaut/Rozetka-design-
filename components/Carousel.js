import { View, Image, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const Carousel = () => {
  return (
    <Swiper
      style={styles.wrapper}
      loop={true}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
    >
      <View style={styles.slide}>
        <Image
          source={require("../assets/notebook/1.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../assets/notebook/2.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../assets/notebook/3.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../assets/notebook/5.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../assets/notebook/7.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../assets/notebook/9.png")}
          style={styles.image}
        />
      </View>
    </Swiper>
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.3,
  },
  slide: {
    flex: 1,
    marginTop: 30,
    justifyContent: "top",
    alignItems: "top",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  dot: {
    backgroundColor: "gray",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: "#00a046",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
});
export default Carousel;
