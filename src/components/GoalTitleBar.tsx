import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/styles";

type GoalTitleBarProps = {
  title: string;
  collapsed: boolean;
  onToggle: () => void;
};

const GoalTitleBar: React.FC<GoalTitleBarProps> = ({
  title,
  collapsed,
  onToggle,
}) => (
  <TouchableOpacity style={styles.goalTitleBar} onPress={onToggle}>
    <View style={styles.goalTitleRow}>
      <Text style={styles.goalTitle}>{title}</Text>
      <MaterialIcons
        name={collapsed ? "chevron-right" : "expand-more"}
        size={24}
        color="white"
      />
    </View>
  </TouchableOpacity>
);

export default GoalTitleBar;
