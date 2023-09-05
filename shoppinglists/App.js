import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";

const App = () => {
  // app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBg5jzJn7POPBohuVoACW5z_dK4ae5f-9k",
    authDomain: "shopping-list-demo-caf2c.firebaseapp.com",
    projectId: "shopping-list-demo-caf2c",
    storageBucket: "shopping-list-demo-caf2c.appspot.com",
    messagingSenderId: "200436510215",
    appId: "1:200436510215:web:3ce47177af9dcc4aff84a2",
  };

  // initialize Firebase
  const app = initializeApp(firebaseConfig);

  // initialize Cloud Firestore 
  const db = getFirestore(app);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
