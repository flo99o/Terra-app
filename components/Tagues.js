import { View,Text, StyleSheet } from 'react-native'





export const Tagues = () => {
  return (
    <View style={styles.taguesContainer}>
        <Text style={{backgroundColor:"#AC7A65", padding:10,borderRadius:7}}>Facile</Text>
        <Text style={{backgroundColor:"#AC7A65",padding:10,borderRadius:7,marginLeft:5}}>Vegan</Text>
        <Text style={{backgroundColor:"#AC7A65",padding:10,borderRadius:7, marginLeft:5}}>Tags</Text>
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