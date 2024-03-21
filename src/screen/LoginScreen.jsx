import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Ionicons name={"logo-android"} size={100} color={"#1B1B1B"} />
      <Text
        style={{
          fontSize: 30,
          color: "#1B1B1B",
          fontWeight: "500",
          marginTop: 70,
        }}
      >
        HELLO AGAIN
      </Text>
      <Text
        style={{
          fontSize: 23,
          color: "black",
          marginTop: 20,
        }}
      >
        Welcome back, you've been missed!
      </Text>
      <TextInput
        placeholder="Email"
        style={{
          backgroundColor: "#E8E8E8",
          width: "90%",
          color: "#6D6D6D",
          borderRadius: 10,
          paddingHorizontal: 10,
          marginVertical: 20,
        }}
      />
      <TextInput
        placeholder="Password"
        style={{
          backgroundColor: "#E8E8E8",
          width: "90%",
          color: "#6D6D6D",
          borderRadius: 10,
          paddingHorizontal: 10,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#4F2197",
          width: "90%",
          padding: 10,
          borderRadius: 10,
          marginVertical: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Sign in
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            color: "black",
          }}
        >
          Not a member?{" "}
          <Text
            style={{
              color: "#2974D3",
              fontWeight: "500",
            }}
          >
            Register Now
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDBDB",
    justifyContent: "center",
    alignItems: "center",
  },
});
