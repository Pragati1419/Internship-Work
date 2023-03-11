import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  useState,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const LoginForm = ({ navigation }) => {
  let value, name;
  const [user, setuser] = React.useState({
    email: "",
    password: "",
  });
  const handelchange = (e, name) => {
    value = e;
    setuser({ ...user, [name]: value });
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: user.email, password: user.password }),
  };

  const login = async () => {
    try {
      await fetch(
        "https://syntheim.herokuapp.com/api/login",
        requestOptions
      ).then((response) => {
        response
          .json()
          .then((data) => {
            // Alert.alert("user created at : ",
            // data.createdAt);
            navigation.push("HomeScreen");
          })
          .catch((error) => {
            console.warn("Api call error");
            console.log(error);
            alert(error);
          });
      });
    } catch (error) {
      console.error(error);
    }
  };
  // const login=async(e)=>{
  //   e.prventDefault();
  //   const{name,username,email,password,confirmpassword}=user;
  //   const res=await fetch('/login',{
  //     method:"POST",
  //     headers:{
  //       "Content-Type":"application/json"
  //     },
  //     body:Json.stringify({name,username,email,password,confirmpassword}
  //     )
  //   })
  // const data=await res.json()
  // if(data.status==400)
  // window.console.error(data.message);
  // else
  // window.console.success(data.message);

  // }

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder="Phone number,username or email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          onChangeText={(e) => handelchange(e, "email")}
          name="email"
          value={user.email}
          autoFocus={true}
        />
      </View>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(e) => handelchange(e, "password")}
          name="password"
          value={user.password}
          textContentType="password"
        />
      </View>
      <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
        <Text style={{ color: "#6BB0F5" }}>Forgot password?</Text>
      </View>
      <Pressable titleSize={20} style={styles.button} onPress={() => login()}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>
      <View style={styles.signupContainer}>
        <Text style={{ color: "white" }}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.push("RegisterScreen")}>
          <Text style={{ color: "#6BB0F5" }}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },

  inputField: {
    borderRadius: 4,
    padding: 6,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },

  button: {
    backgroundColor: "#0096F6",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});
export default LoginForm;
