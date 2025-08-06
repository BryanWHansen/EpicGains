import React from "react";
import { View, StyleSheet, Button } from "react-native";
import StoryDetails from "../components/StoryDetails";

const StoryDetailsScreen: React.FC<any> = ({ route, navigation }) => {
  const { title, description, targetDate, details } = route.params;

  return (
    <View style={styles.container}>
      <StoryDetails
        title={title}
        description={description}
        targetDate={targetDate}
        details={details}
      />
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
});

export default StoryDetailsScreen;
