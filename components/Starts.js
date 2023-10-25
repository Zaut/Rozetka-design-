import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StarRating from "react-native-star-rating";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.leftContainer}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={4.5}
            fullStarColor="gold"
            emptyStarColor="gray"
            halfStarEnabled={true}
            starSize={25}
          />
          <Text style={styles.text2}>5 отзывов</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.text}>Код: 383237856</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row", // Это делает дочерние элементы расположенными в ряд
    alignItems: "center", // Выравнивание по вертикали
    justifyContent: "flex-start",
  },
  leftContainer: {
    flexDirection: "row", // Это делает элементы внутри левой оболочки в ряд
    alignItems: "center", // Выравнивание по вертикали
  },
  rightContainer: {
    marginLeft: 80, // Отступ между левой и правой оболочками
  },
  text: {},
  text2: {
    color: "#3e77aa",
    marginLeft: 10,
  },
});

export default App;
