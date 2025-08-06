import React, { useState } from "react";
import { View } from "react-native";
import styles from "../styles/styles";
import GoalTitleBar from "./GoalTitleBar";
import GoalProgress from "./GoalProgress";
import GoalBoard from "./GoalBoard";

type Story = {
  id: string;
  title: string;
  status: number;
};

type GoalCardProps = {
  title: string;
  stories: Story[];
  progress: number;
  navigation: any;
};

const GoalCard: React.FC<GoalCardProps> = ({
  title,
  stories,
  progress,
  navigation,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [localStories, setLocalStories] = useState<Story[]>(stories);

  const handleStoryTap = (id: string) => {
    setLocalStories((prev) =>
      prev.map((story) =>
        story.id === id ? { ...story, status: (story.status + 1) % 3 } : story
      )
    );
  };

  return (
    <View style={styles.goalCard}>
      <GoalTitleBar
        title={title}
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      />
      {!collapsed && (
        <View style={styles.goalCardContent}>
          <GoalProgress progress={progress} />
          <GoalBoard
            stories={localStories}
            onStoryTap={handleStoryTap}
            navigation={navigation}
          />
        </View>
      )}
    </View>
  );
};

export default GoalCard;
