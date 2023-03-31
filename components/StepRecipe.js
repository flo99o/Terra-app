import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const StepRecipe = ({ isOpen, isClose }) => {




  return (
    <View>
      <Pressable
        style={styles.stepPreparation}
        onPress={() => console.log("hello ingredient")}
      >
        <Text>Ingredients</Text>
        <FlatList
          data={[
            { key: "Oignons" },
            { key: "Algues" },
            { key: "B9" },
            { key: "Minéraux" },
            { key: "Curcuma" },
            { key: "Basilic" },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          color={"#AC7A65"}
          style={{ marginLeft: 250 }}
          size={25}
        />
      </Pressable>
      <Pressable style={styles.stepPreparation}>
        <Text>Preparation</Text>
        <Text >
          Elit aute in id ea aute incididunt nisi ullamco adipisicing elit
          ipsum. Nisi consectetur eiusmod culpa excepteur elit. Qui magna id
          proident proident pariatur et enim anim velit proident veniam eiusmod
          enim. Aute occaecat non dolore pariatur do consectetur culpa
          adipisicing et officia anim exercitation aliquip pariatur. Eiusmod
          amet amet magna officia ipsum in laboris laborum esse do cillum
          voluptate laboris mollit. Nisi pariatur mollit sunt adipisicing ipsum
          eu cupidatat quis.
        </Text>
        <FontAwesomeIcon
          icon={faChevronRight}
          color={"#AC7A65"}
          style={{ marginLeft: 240 }}
          size={25}
        />
      </Pressable>

      <Pressable style={styles.stepPreparation}>
        <Text>Mode d'emploi</Text>
        {}
        <Text>
          Elit aute in id ea aute incididunt nisi ullamco adipisicing elit
          ipsum. Nisi consectetur eiusmod culpa excepteur elit. Qui magna id
          proident proident pariatur et enim anim velit proident veniam eiusmod
          enim. Aute occaecat non dolore pariatur do consectetur culpa
          adipisicing et officia anim exercitation aliquip pariatur. Eiusmod
          amet amet magna officia ipsum in laboris laborum esse do cillum
          voluptate laboris mollit. Nisi pariatur mollit sunt adipisicing ipsum
          eu cupidatat quis.
        </Text>
        <FontAwesomeIcon
          icon={faChevronRight}
          color={"#AC7A65"}
          style={{ marginLeft: 218 }}
          size={25}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  stepPreparation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 25,
    borderWidth: 0.2,
    borderColor: "#AC7A65",
    color: "#AC7A65",
  },
  item:{
    fontSize: 10,

  }
});
