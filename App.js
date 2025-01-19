// src/App.js
import React from "react";
import { StatusBar } from "react-native";
import axios, { Axios } from "axios";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import GuideScreen from "./src/screens/GuideScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faMap, faUser } from "@fortawesome/free-solid-svg-icons";
import commonStyles from "./src/styles/commonStyles";

//For database
axios.defaults.baseURL = "https://infinite-quetzal-set.ngrok-free.app";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer style={commonStyles.container}>
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: {
                backgroundColor: "#121212", // Match your app's background color
                borderTopWidth: 0, // Remove the top border
                elevation: 0, // Remove elevation on Android
                shadowOpacity: 0, // Remove shadow on iOS
                height: 50, // Adjust height if needed
                paddingBottom: 20, // Add padding at the bottom
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
              },
              tabBarActiveTintColor: "#ffffff",
              tabBarInactiveTintColor: "#aaaaaa",
              headerStyle: {
                backgroundColor: "#1e1e1e",
              },
              headerTintColor: "#ffffff",
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon icon={faHome} color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Trail Guide"
              component={GuideScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon icon={faMap} color={color} size={size} />
                ), headerShown: false,
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon icon={faUser} color={color} size={size} />
                ), headerShown: false,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}