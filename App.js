import React, { useState, useEffect } from "react";
import { StatusBar, Modal, View, Text, Button } from "react-native";
import axios from "axios";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import GuideScreen from "./src/screens/GuideScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SignUpStack from "./src/screens/SignUpStack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faMap, faUser } from "@fortawesome/free-solid-svg-icons";
import commonStyles from "./src/styles/commonStyles";
import 'react-native-gesture-handler';
import { Sign } from "crypto";
import { UserProvider } from "./src/context/UserProvider";

// For database
axios.defaults.baseURL = "https://infinite-quetzal-set.ngrok-free.app";

const Tab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 50,
          paddingBottom: 20,
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
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faMap} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isModalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    // Show the popup on app launch
    setModalVisible(true);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
        <StatusBar barStyle="light-content" />
        <UserProvider> {/* Wrap with UserProvider */}
          <NavigationContainer style={commonStyles.container}>
            <MainStack.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }}>
              <MainStack.Screen name="SignUp" component={SignUpStack} />
              <MainStack.Screen name="Main" component={TabNavigator} />
            </MainStack.Navigator>
          </NavigationContainer>
        </UserProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
