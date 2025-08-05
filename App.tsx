// App.tsx
import React from "react";
import { JSX } from "react";
import { SafeAreaView, SectionList } from "react-native";
import rawGoals from "./src/data/goals";
import { withCalculatedProgress } from "./src/utils/dataHelper";
import styles from "./src/styles/styles";
import GoalCard from "./src/components/GoalCard";

export default function App(): JSX.Element {
  const goals = withCalculatedProgress(rawGoals);

  return (
    <SafeAreaView style={styles.container}>
      {goals.map((goal, index) => (
        <GoalCard key={index} title={goal.title} stories={goal.data} />
      ))}
    </SafeAreaView>
  );
}
