import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox, Alert } from "react-native";
import { initializeApp } from "firebase/app";
import { getFirestore, disableNetwork, enableNetwork } from "firebase/firestore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingLists from "./components/ShoppingLists";
import Welcome from "./components/Welcome";
import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";

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

  // define state to track network connectivity status 
  const connectionStatus = useNetInfo();

  // alert user if connection is lost 
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection lost!");
      // prevent Firebase from attempting to reconnect to Firestore db until connection is restored
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        {/* pass Firestore database to component as prop */}
        <Stack.Screen name="ShoppingLists">
          { props => <ShoppingLists isConnected={connectionStatus.isConnected} db={db} {...props} />}
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
