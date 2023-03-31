import React from 'react'
import { View, Text } from 'react-native'



export const ShopScreen = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description for Product 1.',
      price: 10,
      image: "require('')",
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description for Product 2.',
      price: 20,
      image: "require('')",
    },
    // Add more products here
  ];



  return (
    <View>
        <Text style={{margin:50}}>ShopScreen</Text>
    </View>
  )
}
