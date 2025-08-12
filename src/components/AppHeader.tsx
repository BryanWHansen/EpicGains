// src/components/AppHeader.tsx
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Appbar, Menu } from "react-native-paper";

type MenuItem = { label: string; onPress: () => void; icon?: string };

type AppHeaderProps = {
  title?: string;
  showNavMenu?: boolean;
  showUserMenu?: boolean;
  navItems?: MenuItem[];
  userItems?: MenuItem[];
  showBack?: boolean;
  onBack?: () => void;
  backgroundColor?: string;
  color?: string;
};

const AppHeader: React.FC<AppHeaderProps> = ({
  title = "EpicGoals",
  showNavMenu = false,
  showUserMenu = false,
  navItems = [],
  userItems = [],
  showBack = false,
  onBack,
  backgroundColor = "#4CAF50",
  color = "#fff",
}) => {
  const [navVisible, setNavVisible] = useState(false);
  const [userVisible, setUserVisible] = useState(false);

  return (
    <Appbar.Header style={{ backgroundColor }}>
      {showBack ? (
        <Appbar.Action icon="arrow-left" color={color} onPress={onBack} />
      ) : showNavMenu ? (
        <Menu
          visible={navVisible}
          onDismiss={() => setNavVisible(false)}
          anchor={
            <Appbar.Action
              icon="menu"
              color={color}
              onPress={() => setNavVisible(true)}
            />
          }
        >
          {navItems.map((item, idx) => (
            <Menu.Item
              key={`${item.label}-${idx}`}
              onPress={() => {
                setNavVisible(false);
                item.onPress();
              }}
              title={item.label}
              leadingIcon={item.icon}
            />
          ))}
        </Menu>
      ) : null}

      <Appbar.Content title={title} titleStyle={[styles.title, { color }]} />

      {showUserMenu ? (
        <Menu
          visible={userVisible}
          onDismiss={() => setUserVisible(false)}
          anchor={
            <Appbar.Action
              icon="account-circle"
              color={color}
              onPress={() => setUserVisible(true)}
            />
          }
        >
          {userItems.map((item, idx) => (
            <Menu.Item
              key={`${item.label}-${idx}`}
              onPress={() => {
                setUserVisible(false);
                item.onPress();
              }}
              title={item.label}
              leadingIcon={item.icon}
            />
          ))}
        </Menu>
      ) : null}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default AppHeader;
