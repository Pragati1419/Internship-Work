import BottomTabView from "../components/Profile/BottomTabView";
import BottomTabs from "../components/home/BottomTabs";
import Entypo from "react-native-vector-icons/Entypo";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ProfileBody, ProfileButtons } from "../components/Profile/ProfileBody";

const imageUrl = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
const ProfileScreen = () => {
  let circuls = [];
  let numberofcircels = 8;

  for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="plus" style={{fontSize: 40, color: 'black'}} />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'black',
              opacity: 0.1,
              marginHorizontal: 5,
            }}></View>
        )}
      </View>,
    );
  }

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', padding: 10}}>
        <ProfileBody
          name="@cleverqazi"
          profileImage={{uri: imageUrl}}
          followers="3.6M"
          following="30"
          Channels="4"
        />
        <ProfileButtons
          id={0}
          name="cleverqazi"
          accountName="cleverqazi"
          profileImage={{uri: imageUrl}}
        />
      </View>
      <View>
        <Text
          style={{
            padding: 5,
            letterSpacing: 1,
            fontSize: 14,
          }}>
          Story Highlights
         
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius : 20,
          }}>
          {circuls}
        </ScrollView>
      </View>
       <BottomTabView /> 
      
       
    </View>
  );
};

export default ProfileScreen;