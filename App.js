import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "expo-dev-client";
import { HomeScreen } from "./screens/HomeScreen";
import { UserProfil } from "./screens/UserProfil";
import { ProfilRecipe } from "./components/ProfilRecipe";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ShopScreen } from "./screens/ShopScreen";
//import { CureCalendar } from "./screens/CureCalendar";
import { Blog } from "./screens/Blog";
import { BlogArticle } from "./components/BlogArticle";
import {
  faBlog,
  faCartShopping,
  faHouseChimney,
  faShop,
  faSpa,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Favorites } from "./components/Favorites";

function TabBottom() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { height: 60, backgroundColor: "white" },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Blog"
        component={Blog}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon
              icon={faBlog}
              size={28}
              style={[{ color: "#6d7967" }]}
            />
          ),
          header: () => null,
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon
              icon={faHouseChimney}
              size={28}
              style={[{ color: "#6d7967" }]}
            />
          ),
          header: () => null,
        }}
      />
      <Tab.Screen
        name="Eshop"
        component={ShopScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon
              icon={faCartShopping}
              size={28}
              style={[{ color: "#6d7967" }]}
            />
          ),
          header: () => null,
        }}
      />

      {/* <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesomeIcon icon={faShop} size={28} style={[{ color: '#6d7967' }]} />
          ),
          header: () => null,
        }}
      /> */}

      <Tab.Screen
        name="User"
        component={UserProfil}
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesomeIcon
              icon={faUser}
              size={28}
              style={[{ color: "#6d7967" }]}
            />
          ),
          header: () => null,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App({ navigation }) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Terra" component={TabBottom} />
        <Stack.Screen name="RecipeProfile" component={ProfilRecipe} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="BlogArticle" component={BlogArticle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
