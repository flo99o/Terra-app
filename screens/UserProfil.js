import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";

export const UserProfil = () => {
  const [userName, changeUserName] = useState("Kimberly");
  const inputElement = useRef(null)

  return (
    <View style={styles.profilContainer}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/profilpic.jpg")}
          style={styles.profilPicture}
        />
        <View style={styles.headerProfil}>
          <TextInput
            style={{ padding: 12, color:"#AC7A65", fontSize:25 }}
            onChangeText={changeUserName}
            value={userName}
            ref={inputElement}
          />
          <Pressable
            onPress={() => inputElement.current.focus()}
            style={{ padding: 10 }}
          >
            <FontAwesomeIcon icon={faPenToSquare} size={25} style={{color:"#AC7A65"}} />
          </Pressable>
        </View>
      </View>
      <View style={{ marginTop:40}}>
        <View style={styles.ongletProfil}>
          <Pressable  onPress={() => console.log("hello mon profil")}  
          >
            <Text style={{color:"#AC7A65"}}>Mon Profil</Text>
          </Pressable>
        </View>
        <View style={styles.ongletProfil}>
          <Pressable onPress={() => console.log("hello gerer mon abonement")}>
            <Text style={{color:"#AC7A65"}}>Gerer mon abonnement</Text>
          </Pressable>
        </View>
        <View style={styles.ongletProfil}>
          <Pressable onPress={() => console.log("hello aide")}>
            <Text style={{color:"#AC7A65"}}>Aide</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profilContainer: {
    flex: 1,
    backgroundColor:"#EFE7DF"

  },
  profilPicture: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  headerContainer: {
    alignItems: "center",
    marginTop:50,
  },
  headerProfil: {
    flexDirection: "row",

  },
  ongletProfil:{
    padding:20,
    borderWidth:0.2,
    borderColor: '#AC7A65',   
    
    
  }
});
