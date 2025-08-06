import React from "react";
import { View, Text, StyleSheet } from "react-native";

type StoryDetailsProps = {
  title: string;
  description: string;
  targetDate: string;
  details: string;
};

const StoryDetails: React.FC<StoryDetailsProps> = ({
  title,
  description,
  targetDate,
  details,
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.label}>Description:</Text>
      <Text>{description}</Text>

      <Text style={styles.label}>Target Date:</Text>
      <Text>{targetDate}</Text>

      <Text style={styles.label}>Details:</Text>
      <Text>{details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  label: { fontWeight: "600", marginTop: 10 },
});

export default StoryDetails;
