import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { Tagues } from "./Tagues";
import { StepRecipe } from "./StepRecipe";
import { useState } from "react";
import { faArrowLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const ProfilRecipe = () => {
  return (
    <View style={[styles.recipeContainer]}>
      <View style={{ flex: 2, backgroundColor: "#6d7967" }}>
        <View style={styles.imgContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              size={30}
              style={styles.backArrow}
            />
            <Text style={styles.titleRecipe}>Micro Minéreaux</Text>
            <FontAwesomeIcon
              icon={faHeart}
              size={30}
              style={styles.favoriteRecipe}
            />
          </View>

          <Image
            source={require("../assets/tearecipe.jpg")}
            style={styles.imgProfileRecipe}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Tagues />
      </View>

      <View style={styles.stepRecipes}>
        <StepRecipe />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeContainer: {
    flex: 1,
  },
  imgContainer: {
    marginTop: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  imgProfileRecipe: {
    width: 200,
    height: 200,
    borderRadius: 7,
  },
  titleRecipe: {
    fontSize: 30,
    color: "#fff",
    alignItems: "center",
    padding: 10,
  },
  stepRecipes: {
    flex: 3,
  },
  backArrow: {
    color: "#fff",
    marginRight: 40,
  },
  favoriteRecipe: {
    color: "#fff",
    marginLeft: 40,
  },
});
