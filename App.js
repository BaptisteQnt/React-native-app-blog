import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
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
import { UserListContext } from './src/context';
import Loading from "./assets/components/Loading";
import { store } from './src/reducers/store';
import { Provider } from 'react-redux';
import { UserDetailsModal } from './src/surface/UserDetailsModal';
import { ImageDetailsModal } from "./src/surfaces/ImageDetailsModal";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  const [userLoggedIn, setIsUserLoggedIn] = useState(true);
  const [userList, setUserList] = useState(null);

  async function fetchUserData(id) {
    const response = await fetch(requestBase + "/users.json");
    setUserList(await response.json());
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_700Bold
  });

  if(!userList) {
    return <AppLoading/>;
  }

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading fonts ...</Text>
      </View>
    )
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
      <UserListContext.Provider value={{ userList: userList }}>
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Group>
              {!userLoggedIn ? (
                <Stack.Screen name="Login" component={Login} />
              ) : (
                <>
                  <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                  <Stack.Screen name="ConversationsNav" component={ConversationsNavigation} options={{ headerShown: false }} />
                </>
              )}
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: "modal"}}>
              <Stack.Screen
                name='UserDetailsModal'
                component={UserDetailsModal}
                options={{ headerShown: false}}
                />
              <Stack.Screen
                name='ImageDetailsModal'
                component={ImageDetailsModal}
                options={{ headerShown: false}}
                />
            </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
      </UserListContext.Provider>
      </Provider>
   </SafeAreaProvider>
  );
}


