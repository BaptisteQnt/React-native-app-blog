import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from './src/surfaces/Login';
import { Feed } from './src/surfaces/Feed';
import { Conversations } from './src/surfaces/Conversations';
import { AddPost } from './src/surfaces/AddPost';
import { Favorites } from './src/surfaces/Favorites';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppLoading from "expo-app-loading";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { View, Text } from 'react-native';
import { ConversationsNavigation } from './src/surfaces/ConversationNavigation';
import { Home } from './src/surfaces/Home';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  const [userLoggedIn, setIsUserLoggedIn] = useState(true);
  let [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading fonts ...</Text>
      </View>
    )
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
          <Stack.Navigator>
            {!userLoggedIn ? (
              <Stack.Screen name="Login" component={Login} />
            ) : (
              <>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="ConversationsNav" component={ConversationsNavigation} options={{ headerShown: false }} />
              </>
            )}
          </Stack.Navigator>
      </NavigationContainer>
   </SafeAreaProvider>
  );
}


