import DropDownPicker from "react-native-dropdown-picker";
import React, { useState } from "react";
import { Image, Picker, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/Instagram_logo.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.push("PostScreen")}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => <DropDown />}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/material-rounded/24/ffffff/line-width.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

 /* const DropDown = () => (
  <MenuProvider style={{ flexDirection: "column", padding: 30 }}>
    <Menu>
      <MenuTrigger onPress={onPress} />
      <MenuOptions>
        <MenuOption value={1} text="Posts" />
        <MenuOption value={2} text="Sessions" />
        <MenuOption value={3} text="Posts & Sessions" />
      </MenuOptions>
    </Menu>
  </MenuProvider>
);   */

 

 /* const DropDown = () => {
  const [selectedValue, setSelectedValue] = useState(1);

  return (
    <View style={{ flex: 1, padding: 30 }}>
      <Text>Select your option:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Posts" value={1} />
        <Picker.Item label="Sessions" value={2} />
        <Picker.Item label="Posts & Sessions" value={3} />
      </Picker>
    </View>
  );
};  
   */


const DropDown = ()  =>{
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Posts', value: 'Posts'},
    {label: 'Sessions', value: 'Sessions'},
    {label: 'Posts & Sessions', value: 'Posts & Sessions'},
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={item => console.log(item.label, item.value)}
    />
  );
}



const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },

  iconContainer: {
    flexDirection: "row",
  },

  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },

  unreadBadge: {
    backgroundColor: "red",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },

  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});

export default Header;
