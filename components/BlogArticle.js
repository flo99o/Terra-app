import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  Button,
} from "react-native";

export const BlogArticle = () => {
  return (
    <View style={styles.containerBlog}>
      <View style={styles.headerBlog}>
        <ImageBackground
          source={require("../assets/cherry.jpg")}
          style={styles.blogPicture}
        >
          <View style={styles.iconBlog}>
            <Pressable>
              <Text>Retour</Text>
            </Pressable>
            <Pressable>
              <Text>like</Text>
            </Pressable>
          </View>
          <View>
            <Text style={{color:"white", fontWeight:"800", fontSize:40}}>Titre de l'article</Text>
          </View>

          <View>
            <Text>Tag</Text>

            <Text>Time of read</Text>
            <Pressable>
              <Text>Comment</Text>
            </Pressable>
            <Text>number of like</Text>
          </View>
        </ImageBackground>
      </View>
      <View>
        <View style={styles.blogContent}>
          <Text> Jane Doe et  date de publication </Text>
          
        </View>

        <Text style={{fontWeight:"700", marginTop:10}}>
          {" "}
          Sit eu mollit sunt adipisicing ipsum occaecat occaecat veniam
          exercitation ipsum velit. Elit culpa amet consequat in anim aliqua
          laboris amet Lorem veniam laborum. 
        </Text>

        <Text style={{marginTop:20, fontWeight:"300"}}>
          {" "}
          Sunt voluptate sint dolore enim dolor do magna. Est cupidatat
          consequat mollit ipsum tempor sit laboris mollit esse duis. Esse
          aliquip Lorem aliquip quis sint excepteur esse velit excepteur aliqua
          labore. Irure aliqua magna velit sunt anim nulla aute cillum aliquip
          ut laboris tempor enim dolor. Dolore consectetur duis deserunt
          consectetur enim et quis sint voluptate. Tempor labore laboris do id
          aliquip quis Lorem sunt cillum magna minim.
        </Text>
       <View style={styles.buttonMore}>
        <Button
         title="Read More"
          color={"#6d7967"}
        />

       
       </View>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBlog: {
    flex: 1,
  },
  headerBlog: {},
  blogPicture: {
    width: "auto",
    height: 400,
  },
  blogContent: {
    marginTop:20,
  },
  buttonMore :{
   width:200,
  }

});
