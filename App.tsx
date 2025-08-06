import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalScreen from "./src/screens/GoalScreen";
import StoryDetailsScreen from "./src/screens/StoryDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Goals" component={GoalScreen} />
        <Stack.Screen name="StoryDetails" component={StoryDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
