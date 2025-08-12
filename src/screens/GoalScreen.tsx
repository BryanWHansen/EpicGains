import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import rawGoals from "../data/goals";
import { withCalculatedProgress } from "../utils/dataHelper";
import GoalCard from "../components/GoalCard";
import AppHeader from "../components/AppHeader";

const GoalScreen: React.FC<any> = ({ navigation }) => {
  const goals = withCalculatedProgress(rawGoals);

  return (
    <View style={{ flex: 1 }}>
      <AppHeader
        showNavMenu
        showUserMenu
        navItems={[
          {
            label: "Home",
            icon: "home",
            onPress: () => navigation.navigate("Welcome"),
          },
        ]}
        userItems={[{ label: "Profile", icon: "account", onPress: () => {} }]}
      />
      <SafeAreaView>
        <FlatList
          data={goals}
          keyExtractor={(item, index) => `${item.title}-${index}`}
          renderItem={({ item }) => (
            <GoalCard
              title={item.title}
              stories={item.data}
              progress={item.progress}
              navigation={navigation}
            />
          )}
        />
      </SafeAreaView>
    </View>
  );
};

export default GoalScreen;
