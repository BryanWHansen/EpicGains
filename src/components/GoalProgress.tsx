import React from "react";
import { View } from "react-native";
import * as Progress from "react-native-progress";

type GoalProgressProps = {
  progress: number;
};

const GoalProgress: React.FC<GoalProgressProps> = ({ progress }) => (
  <View style={{ marginVertical: 8 }}>
    <Progress.Bar
      progress={progress}
      width={null}
      height={10}
      color="#4caf50"
      unfilledColor="#e0e0e0"
      borderWidth={0}
    />
  </View>
);

export default GoalProgress;
