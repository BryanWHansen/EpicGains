import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getCurrentUser } from "../firebase/auth";

const WelcomeScreen: React.FC = () => {
  const user = getCurrentUser();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.sub}>{user?.email ?? "Signed in"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 8 },
  sub: { fontSize: 16, color: "#666" },
});

export default WelcomeScreen;
