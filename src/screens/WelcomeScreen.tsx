import React from "react";
import { View, Text, Button, Alert } from "react-native";
import AppHeader from "../components/AppHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <AppHeader
        showNavMenu
        showUserMenu
        navItems={[
          {
            label: "Go to Goals",
            icon: "target",
            onPress: () => navigation.navigate("Goals"),
          },
        ]}
        userItems={[{ label: "Profile", icon: "account", onPress: () => {} }]}
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Welcome to EpicGoals!</Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;
