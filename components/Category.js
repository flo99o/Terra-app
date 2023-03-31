import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";

export const Category = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View>
                <ImageBackground
                  style={styles.item}
                  source={item.imgUrl}
                  imageStyle={{ borderRadius: 3}}
                >
                  <View style={styles.titleList}>
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 33,
                        color: "#110000",
                        fontWeight: "bold",
                        backgroundColor: 'transparent',
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const Data = [
  {
    id: "1",
    title: "Rhumes",
    imgUrl: require("../assets/glow.jpg"),
  },
  {
    id: "3",
    title: "Les cures",
    imgUrl: require("../assets/glow.jpg"),
  },
  {
    id: "5",
    title: "Cosmétique",
    imgUrl: require("../assets/glow.jpg"),
  },
  {
    id: "6",
    title: "Corps",
    imgUrl: require("../assets/glow.jpg"),
  },
  {
    id: "7",
    title: "Gueule de bois",
    imgUrl: require("../assets/glow.jpg"),
  },
  {
    id: "8",
    title: "Acné",
    imgUrl: require("../assets/glow.jpg"),
  },
  {
    id: "9",
    title: "Déodorant",
    imgUrl: require("../assets/glow.jpg"),
  },
  {
    id: "10",
    title: "Coloration naturelle",
    imgUrl: require("../assets/glow.jpg"),
  },
];

const styles = StyleSheet.create({
  item: {
    height: 150,
    width: 380,
    margin: 5,
    backgroundColor: "transparent",
  },
  titleList: {
    fontSize: 40,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    opacity: .9,
  },
});
