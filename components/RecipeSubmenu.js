import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const RecipeSubmenu = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const styles = StyleSheet.create({
    stepPreparation: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: 25,
      borderWidth: 0.2,
      borderColor: "#AC7A65",
      borderBottomColor: isOpen ? "transparent" : "#AC7A65",
      color: "#AC7A65",
      justifyContent: "space-between",
    },
    content: {
      padding: 25,
    },
    icon: {
      transform: isOpen ? [{ rotate: "90deg" }] : [],
      
    },
  });

  return (
    <View style={{ width: "100%" }}>
      <Pressable
        style={styles.stepPreparation}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text>{title}</Text>
        <FontAwesomeIcon
          icon={faChevronRight}
          color={"#AC7A65"}
          style={styles.icon}
          size={25}
        />
      </Pressable>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
};

export default RecipeSubmenu;
