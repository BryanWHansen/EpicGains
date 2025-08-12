import React from "react";
import { View, StyleSheet, Button } from "react-native";
import StoryDetails from "../components/StoryDetails";
import AppHeader from "../components/AppHeader";

const StoryDetailsScreen: React.FC<any> = ({ route, navigation }) => {
  const { title, description, targetDate, details } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <AppHeader
        showNavMenu={false}
        showBack
        onBack={() => navigation.goBack()}
        showUserMenu={true}
      ></AppHeader>
      <View style={styles.container}>
        <StoryDetails
          title={title}
          description={description}
          targetDate={targetDate}
          details={details}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
});

export default StoryDetailsScreen;
