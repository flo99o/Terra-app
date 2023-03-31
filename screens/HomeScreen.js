import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Category } from "../components/Category";
import { Recipes } from "../components/Recipes";
import { SearchBar } from "../components/SearchBar";
import { TabButton } from "../components/TabButton";

const TABS = {
  Catégories: <Category />,
  Recettes: <Recipes />,
};

export const HomeScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Catégories");

  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.buttonContainer}>
        <TabButton
          title={"Catégories"}
          onToggle={setActiveTab}
          activeTab={activeTab}
        />
        <TabButton
          title={"Recettes"}
          onToggle={setActiveTab}
          activeTab={activeTab}
        />
      </View>
      {TABS[activeTab]}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#EFE7DF",
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
   
  },
});
