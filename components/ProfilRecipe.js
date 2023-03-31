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
import { Ingredients } from "./Ingredients";
import { Notes } from "./Notes";
import { useState } from "react";
import { faArrowLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const ProfilRecipe = () => {
  const [hideComponent, showComponent] = useState(false);
  const [arrowRight, arrowDown] = useState(false);

  return (
    <View
      style={[
        styles.recipeContainer,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 2, backgroundColor: "#6d7967" }}>
        <View style={styles.imgContainer}>
          <View style={{ flexDirection: "row" }}>
            <FontAwesomeIcon icon={faArrowLeft} size={30} style={{color:"#fff"}} />
            <Text style={{ color: "white", fontSize: 28, padding: 10 }}>
              Soupe au groseil
            </Text>
            <FontAwesomeIcon
              icon={faHeart}
              size={32}
              style={{ color: "white" }}
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
        <View style={{flexDirection:"row"}}>
          <Pressable onPress={() => console.log("hello ingredient")}>
            <Ingredients />
            <FontAwesomeIcon icon={faChevronRight} />
          </Pressable>
        </View>
        <View>
          <Pressable>
            <StepRecipe />
            <FontAwesomeIcon icon={faChevronRight} />
          </Pressable>
        </View>
        <View>
          <Pressable>
            <Notes />
            <FontAwesomeIcon icon={faChevronRight} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeContainer: {
    flex: 1,
  },
  imgContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imgProfileRecipe: {
    width: 200,
    height: 200,
    borderRadius: 7,
  },
  stepRecipes: {
    flex: 3,
   
  },
});

