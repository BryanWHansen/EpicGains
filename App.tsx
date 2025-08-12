import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { RootStackParamList } from "./src/navigation/types";
import AuthScreen from "./src/screens/AuthScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import GoalScreen from "./src/screens/GoalScreen";
import StoryDetailsScreen from "./src/screens/StoryDetailsScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Auth"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{ title: "Sign In" }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ title: "Sign Up" }}
          />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="StoryDetails" component={StoryDetailsScreen} />
          <Stack.Screen name="Goals" component={GoalScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
