import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

type Story = {
  id: string;
  title: string;
  status: number;
};

type GoalBoardProps = {
  stories: Story[];
  onStoryTap: (id: string) => void;
};

const STATUS_LABELS = ["Pending", "In Progress", "Completed"];

const GoalBoard: React.FC<GoalBoardProps> = ({ stories, onStoryTap }) => {
  const groupedStories: any = {
    0: stories.filter((s) => s.status === 0),
    1: stories.filter((s) => s.status === 1),
    2: stories.filter((s) => s.status === 2),
  };

  const renderStory = ({ item }: { item: Story }) => (
    <TouchableOpacity onPress={() => onStoryTap(item.id)}>
      <View key={item.id} style={styles.card}>
        <Text style={styles.cardText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.board}>
      {[0, 1, 2].map((status) => (
        <View key={status} style={styles.column}>
          <Text style={styles.columnHeader}>{STATUS_LABELS[status]}</Text>
          <FlatList
            data={groupedStories[status]}
            renderItem={renderStory}
            keyExtractor={(item) => item.id}
            extraData={stories}
          />
        </View>
      ))}
    </View>
  );
};

export default GoalBoard;
