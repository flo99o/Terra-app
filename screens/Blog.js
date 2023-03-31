import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  SectionList,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Blog = () => {
  const navigation = useNavigation();

  const SECTIONS = [
    {
      mainTitle: "Plus d'articles",
      horizontal: true,
      data: [
        { id: "1", title: "Rhumes", imgArt: require("../assets/beauty.jpg") },
        {
          id: "3",
          title: "Savez-vous reconnaitre ",
          info: "date min to read",
          imgArt: require("../assets/rhumes.jpg"),
        },
        {
          id: "4",
          title: "A sert l'artemsia?",
          imgArt: require("../assets/beauty.jpg"),
        },
      ],
    },
  ];

  // const ListItem = ({ item }) => {
  //   return (
  //     <TouchableOpacity onPress={()=> navigation.navigate("BlogArticle")}>
  //       <Text></Text>

  //     </TouchableOpacity>
  //   );
  // };
  return (
    <View style={styles.container}>
      <Text style={{ padding: 25, fontSize: 30 }}>Hello (name)</Text>
      <View style={styles.mainArticle}>
        <TouchableOpacity onPress={() => navigation.navigate("BlogArticle")}>
          <Text>Title article</Text>
          <Image
            style={styles.itemPhoto}
            source={require("../assets/beauty.jpg")}
          />
          <Text style={styles.titleArticle}>
            Magna duis irure pariatur tempor dolore ut nostrud laboris
            reprehenderit.(titre article)
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1}}>
        {SECTIONS && (
          <FlatList
            data={SECTIONS}
            renderItem={({ item: section }) => {
              return (
                <SafeAreaView>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("BlogArticle")}
                  >
                    <Text>{section.mainTitle}</Text>
                    {section.data.map((item) => (
                      <View style={styles.moreArticles} key={item.id}>
                        <Image
                          style={styles.imgMoreArticle}
                          // source={require("../assets/beauty.jpg")}
                          source={item.imgArt}
                        />
                        <Text>{item.title}</Text>
                        {/* <Text>{item.}</Text> */}
                      </View>
                    ))}
                  </TouchableOpacity>
                </SafeAreaView>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAD2C8",
  },
  mainArticle: {
    margin: 20,
  },
  titleArticle: {
    fontWeight: "700",
    fontSize: 18,
  },
  itemPhoto: {
    width: 350,
    height: 250,
    borderRadius: 5,
    justifyContent: "center",
  },
  moreArticles: {
    margin: 10,
  },
  imgMoreArticle: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  itemText: {
    color: "black",
  },
});
