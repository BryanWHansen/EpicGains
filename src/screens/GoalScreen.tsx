import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import rawGoals from "../data/goals";
import { withCalculatedProgress } from "../utils/dataHelper";
import GoalCard from "../components/GoalCard";

const GoalScreen: React.FC<any> = ({ navigation }) => {
  const goals = withCalculatedProgress(rawGoals);

  return (
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
  );
};

export default GoalScreen;
