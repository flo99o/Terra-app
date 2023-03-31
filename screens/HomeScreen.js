import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { Category } from "../components/Category";
import { Recipes } from "../components/Recipes";
import { SearchBar } from "../components/SearchBar";

export const HomeScreen = ({ navigation }) => {
  const [searchByKeyWord, setSearchKeyWord] = useState("");
  const [toggleHome, setToggleHome] = useState(false);

  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.buttonContainer}>
        <View style={styles.categoryButton}>
          <Pressable
            onPress={() => setToggleHome(false)}
            style={{ backgroundColor: toggleHome ? "transparent" : "#AC7A65", padding:10, borderRadius:1 }}
          >
            <Text style={{ fontSize: 25 }}>Categories</Text>
          </Pressable>
        </View>

        <View style={styles.recipeButton}>
          <Pressable
            onPress={() => setToggleHome(true)}
            style={{ backgroundColor: toggleHome ? "#AC7A65" : "transparent", padding:10, borderRadius:1 }}
          >
            <Text style={{ fontSize: 25 }}>Recettes</Text>
          </Pressable>
        </View>
      </View>
      {toggleHome ? <Recipes /> : <Category />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:"#EFE7DF"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
  recipeButton: {
    marginLeft: 40,
  },
  categoryButton: {
    marginRight: 40,
  },
});
