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
};

const GoalCard: React.FC<GoalCardProps> = ({ title, stories }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [storiesState, setStoriesState] = useState<Story[]>([...stories]);
  const completed = storiesState.filter((s) => s.status === 2).length;
  const progress =
    storiesState.length > 0 ? completed / storiesState.length : 0;

  const handleStoryTap = (id: string) => {
    setStoriesState((prev) =>
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
          <GoalBoard stories={storiesState} onStoryTap={handleStoryTap} />
        </View>
      )}
    </View>
  );
};

export default GoalCard;
