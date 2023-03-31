import { View, Text, StyleSheet, FlatList } from "react-native";
import RecipeSubmenu from "./RecipeSubmenu";

export const StepRecipe = () => {
  const submenus = [
    {
      title: "Ingrédients",
      content: (
        <FlatList
          data={[
            { key: "Oignons" },
            { key: "Algues" },
            { key: "B9" },
            { key: "Minéraux" },
            { key: "Curcuma" },
            { key: "Basilic" },
          ]}
          renderItem={({ item }) => <Text style={styles.item}> {item.key}</Text>}
        />
      ),
    },
    {
      title: "Préparation",
      content: (
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
      ),
    },
    {
      title: "Mode d'emploi",
      content: (
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
      ),
    },
  ];
  return (
    <View>
      {submenus.map((menu) => (
        <RecipeSubmenu title={menu.title}>{menu.content}</RecipeSubmenu>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  stepPreparation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderWidth: 0.2,
    borderColor: "#AC7A65",
    color: "#AC7A65",
  },
  icons: {},
  item: {
    fontSize: 20,
    
  },
});
