import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionic from "react-native-vector-icons/Ionicons";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrollView, Text, View } from "react-native";

const BottomTabView = () => {
  const Tab = createMaterialTopTabNavigator();

  let squares = [];
  let numberOfSquare = 12;

  for (let index = 0; index < numberOfSquare; index++) {
    squares.push(
      <View key={index}>
        <View
          style={{
            width: 131,
            height: 131,
            marginVertical: 1,
            marginHorizontal: 6,
            backgroundColor: 'black',
            opacity: 0.2,
            borderRadius:5,
            borderColour: 'black',
          }}></View>
      </View>,
    );
  }

  const Posts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between',
          }}>
          {squares}
        </View>
      </ScrollView>
    );
  };
  const Video = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between',
          }}>
          {squares}
        </View>
      </ScrollView>
    );
  };
  const Tags = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between',
          }}>
          {squares}
        </View>
      </ScrollView>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: 'black',
          height: 1.5,
        },
        tabBarIcon: ({focused, colour}) => {
          let iconName;
          if (route.name === 'Posts') {
            iconName = focused ? 'appstore1' : 'appstore1';
            colour = focused ? 'black' : 'gray';
          } else if (route.name === 'Reels') {
            iconName = focused ? 'playcircleo' : 'play';
            colour = focused ? 'black' : 'gray';
          } else if (route.name === 'Tags') {
            iconName = focused ? 'tagso' : 'tags';
            colour = focused ? 'black' : 'grey';
          }

          return <AntDesign name={iconName} color={colour} size={24} />;
        },
      })}>
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Reels" component={Video} />
      <Tab.Screen name="Tags" component={Tags} />
    </Tab.Navigator>
  );
};

export default BottomTabView;