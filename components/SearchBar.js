import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  ViewComponent,
  Pressable,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useNavigation } from "@react-navigation/native";

export const SearchBar = () => {
  const [searchText, OnChangeSearchText] = useState("");
  const [searchByKeyWord, setSearchByKeyWord] = useState("");

  console.log(searchText)
  const navigation = useNavigation();


  return (
    <View style={styles.searchContainer}>
      <View style={styles.headerSearchContainer}>
        <View style={styles.titleHome}>
          <Text style={styles.searchTitle}>Recherche</Text>
        </View>
        <View style={styles.favButton}>
          <Pressable onPress={()=> navigation.navigate("Favorites")}>
            <FontAwesomeIcon icon={faHeart} size={30} style={{color:"#AC7A65"}} />
          </Pressable>
        </View>
      </View>
<View style={styles.inputSearch}>
<TextInput
        style={styles.input}
        onChangeText={OnChangeSearchText}
        value={searchText}
        placeholder="Rechercher"
      />
</View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  searchTitle: {
    marginTop: 45,
    fontWeight: "light",
    fontFamilly: "Comfortaa",
    fontSize: 40,
    color: "#6d7967",
    padding:5,
  },
  inputSearch:{
  marginTop:20,
  },
  input: {
    height: 55,
    borderWidth: 1,
    padding: 15,
    borderColor: "#6d7967",
    backgroundColor:"#fff"
   
  },
  headerSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
 favButton:{
 marginTop:48,
 marginLeft:140,
 }

});
