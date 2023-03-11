import { View, StyleSheet, Text } from "react-native";
import React from "react";
import OTP from "../components/loginScreen/OTP";

const OTPScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>Account Verification</Text>
      <OTP />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#282534",
    padding: 5,
  },
  instructions: {
    margin: 20,
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    color: "#ffffff",
    marginBottom: 20,
  },
});

export default OTPScreen;
