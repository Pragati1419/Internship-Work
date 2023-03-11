import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import NotificationScreen from "./screens/NotificationScreen";
import OTPScreen from "./screens/OTPScreen";
import OnboardScreen from "./screens/OnboardScreen";
import PostScreen from "./screens/PostScreen";
import ProfileScreen from "./screens/ProfileScreen";
import React from "react";
import RegisterScreen from "./screens/RegisterScreen";
import Search from "./screens/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import Test from "./screens/Test";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};
const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {/* <Stack.Screen name="Test" component={Test} /> */}
      <Stack.Screen name="PostScreen" component={PostScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
     <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> 
     
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;
