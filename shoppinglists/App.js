import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingLists from "./components/ShoppingLists";

// create navigator
const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ShoppingLists">
        {/* pass Firestore database to component as prop */}
        <Stack.Screen name="ShoppingLists">
          { props => <ShoppingLists db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
