import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
// import { sign } from "crypto";

const RegisterForm = ({ navigation }) => {
  let value,content;
const [user,setuser]=React.useState({
  name:"",username:"",email:"",password:"",confirmpassword:"",
})
const handelchange=(e,content)=>{
  
  value=e;
  setuser({...user,[content]:value});
}
// const signin=async(e)=>{
//   e.prventDefault();
//   const{name,username,email,password,confirmpassword}=user;
//   const res=await fetch('/api/register',{
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


const requestOptions = {
  
  method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({name:user.name,username:user.username,confirmpassword:user.confirmpassword,email:user.email,password:user.password}
    )
};

const signin = async () => {
  try {
      await fetch(
          'https://syntheim.herokuapp.com/api/register', requestOptions)
          .then(response => {
             response.json()
                .then(data => {
                      Alert.alert("OTP sent to your registered email");
                      navigation.push("OPTScreen")
                  }).catch((error)=>{
                    console.log("Api call error");
                    console.log(user.name,user.username,user.confirmpassword,user.email,user.password)
                    
                    alert(error);
                 });;
          })
  }
  catch (error) {
      console.error(error);
  }
}


  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder="Mobile number or email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          onChangeText={(e)=>handelchange(e,"email")}
          name="email"
          value={user.email}
          autoFocus={true}
        />
      </View>

      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder=" Full name"
          autoCapitalize="none"
          keyboardType="full-name"
          onChangeText={(e)=>handelchange(e,"name")}
          name="name"
          value={user.name}
          textContentType="full-name"
        />
      </View>

      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder="Username"
          autoCapitalize="none"
          keyboardType="text"
          textContentType="user-name"
          onChangeText={(e)=>handelchange(e,"username")}
          name="username"
          value={user.username}
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
          onChangeText={(e)=>handelchange(e,"password")}
          name="password"
          value={user.password}
          textContentType="password"
        />
      </View>

      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder="Confirm Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(e)=>handelchange(e,"confirmpassword")}
          name="confirmpassword"
          value={user.confirmpassword}
          textContentType="confirm_password"
        />
      </View>
      <Pressable
        titleSize={20}
        style={styles.button}
        onPress={() => signin()}
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
      <TouchableOpacity onPress={() => navigation.goBack("LoginScreen")}>
        <Text style={{ color: "#6BB0F5", fontSize: 11 }}>
          Already have an account?
        </Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={{ fontSize: 11 }}>
          By signing up, you agree to our Terms, Data Policy and Cookies Policy.
        </Text>
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
export default RegisterForm;
