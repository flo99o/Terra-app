import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

export const TabButton = ({ onToggle, activeTab, title }) => {
  console.log(activeTab, title);
  const isActive = activeTab === title;

  return (
    <View style={styles.button}>
      <Pressable
        onPress={() => onToggle(title)}
        style={{
          backgroundColor: isActive ? "#fff" : "transparent",
          padding: 10,
          borderRadius: 1,
        }}
      >
        <Text style={{ fontSize: 25, color: isActive ? "#AC7A65" : "#6d7967" }}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin:0,
    
  },
});
