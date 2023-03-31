import { View,Text, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faTimer} from "@fortawesome/free-regular-svg-icons"





export const Tagues = () => {
  return (
    <View style={styles.taguesContainer}>
        <Text style={{backgroundColor:"#AC7A65", padding:10,borderRadius:7}}>Facile</Text>
        <Text style={{backgroundColor:"#AC7A65",padding:10,borderRadius:7,marginLeft:5}}>Vegan</Text>
        <Text style={{backgroundColor:"#AC7A65",padding:10,borderRadius:7, marginLeft:5}}>Tags</Text>
        <Text  style={{padding:10,borderRadius:7, marginLeft:5}}> 20 min </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  taguesContainer:{
    marginTop:45,
    flexDirection:"row",
    flexWrap:"wrap",
    margin:10,
    

  }

})