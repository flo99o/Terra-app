import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Recipes = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {Data && (
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("RecipeProfile")}
            >
              <View style={styles.mainCardView}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={styles.subCardView}>
                    <Image
                      style={styles.subCardView}
                      source={require("../assets/beauty.jpg")}
                    />
                  </View>
                  <View style={{ marginLeft: 12 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "#000000",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                      }}
                    >
                      <Text style={styles.title}>{item.title}</Text>
                    </Text>
                    <View
                      style={{
                        marginTop: 4,
                        borderWidth: 0,
                        width: "85%",
                      }}
                    >
                      <Text
                        style={{
                          color: "#AC7A65",
                          fontSize: 12,
                        }}
                      ></Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const Data = [
  {
    id: "1",
    title: "baumes lèvres",
    imgUrl:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "3",
    title: "tisane pour la toux",
    imgUrl:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "5",
    title: "huile coco ambre",
    imgUrl:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "6",
    title: "huile pour articulation",
    imgUrl:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "8",
    title: "huile coco ambre",
    imgUrl:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "9",
    title: "huile pour articulation",
    imgUrl:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

const styles = StyleSheet.create({
  mainCardView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    shadowRadius: 2,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 4,
    borderRadius:3,
  },
  subCardView: {
    height: 120,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius:3,
    borderTopLeftRadius:3
  },

  title: {
    fontSize: 20,
  },
});
