// src/App.js
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import GuideScreen from "./src/screens/GuideScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faMap, faUser } from "@fortawesome/free-solid-svg-icons";
import commonStyles from "./src/styles/commonStyles";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Trail Guide" component={GuideScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}