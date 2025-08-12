import React, { useEffect, useState, useMemo } from "react";
import { FlatList, SafeAreaView, View, Text } from "react-native";
import { withCalculatedProgress } from "../utils/dataHelper";
import { auth } from "../firebase/auth";
import GoalCard from "../components/GoalCard";
import AppHeader from "../components/AppHeader";
import { subscribeGoals, Goal } from "../utils/dataLayer";

const GoalScreen: React.FC<any> = ({ navigation }) => {
  const [goals, setGoals] = useState<Goal[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const uid = auth.currentUser?.uid;
    if (!uid) {
      setError("Must be Signed in to view Goals.");
      return;
    }
    const unsub = subscribeGoals(
      uid,
      (g) => setGoals(g),
      (e) => setError("Failed to load Goals")
    );
    return unsub;
  }, []);

  const computed = useMemo(() => {
    if (!goals) return [];
    return withCalculatedProgress(goals);
  }, [goals]);

  if (error) {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          showNavMenu
          showUserMenu
          navItems={[
            {
              label: "Home",
              icon: "home",
              onPress: () => navigation.navigate("Welcome"),
            },
          ]}
          userItems={[{ label: "Profile", icon: "account", onPress: () => {} }]}
        />
        <SafeAreaView>
          <View style={{ padding: 16 }}>
            <Text>{error}</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
  if (goals) {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          showNavMenu
          showUserMenu
          navItems={[
            {
              label: "Home",
              icon: "home",
              onPress: () => navigation.navigate("Welcome"),
            },
          ]}
          userItems={[{ label: "Profile", icon: "account", onPress: () => {} }]}
        />
        <SafeAreaView>
          <FlatList
            data={computed}
            keyExtractor={(item, index) => `${item.title}-${index}`}
            renderItem={({ item }) => (
              <GoalCard
                title={item.title}
                stories={item.stories}
                progress={item.progress}
                navigation={navigation}
              />
            )}
          />
        </SafeAreaView>
      </View>
    );
  }
};

export default GoalScreen;
