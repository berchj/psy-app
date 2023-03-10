import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handlerSignIn = () => {
    /* auth.signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
      console.log('Account created')
      const user = userCredential.user
      console.log(user)
    })
    .catch(error => {
      console.error(error)
    }) */
  };
  return (
    <ScrollView
      style={styles.scrollview}
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/icons8-mental-64.png")}
        />
        <Text style={styles.title}>psychology app</Text>
        <Text style={styles.subtitle}>sign into your account</Text>
        <TextInput
          onChange={text => {
            setEmail(text);
          }}
          style={styles.textInput}
          placeholder="example@mail.com"
        />
        <TextInput
          onChange={text => {
            setPassword(text);
          }}
          style={styles.textInput}
          placeholder="password"
        />
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        <Pressable style={styles.button}>
          <Text onPress={handlerSignIn} style={styles.text}>Sign In</Text>
        </Pressable>
        <Text
          style={styles.forgotPasswordText}
          onPress={() => navigation.navigate("SignUp")}
        >
          Don't have an account yet? Sign Up.
        </Text>
      </View>
      <StatusBar />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    height: ScreenHeight,
    width: ScreenWidth,
  },
  container: {
    flex: 1,
    height: ScreenHeight,
    width: ScreenWidth,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 30,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#34434D",
  },
  subtitle: {
    fontSize: 20,
    color: "grey",
  },
  forgotPasswordText: {
    paddingTop: 30,
    color: "grey",
  },
  textInput: {
    borderWidth: 1,
    paddingStart: 20,
    borderColor: "gray",
    width: "80%",
    padding: 10,
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "#34f818",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
