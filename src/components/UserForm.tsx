// src/components/UserForm.tsx
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export type UserFormField = "name" | "email" | "password" | "confirmPassword";

type Props = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  onChange: (field: UserFormField, value: string) => void;
};

const UserForm: React.FC<Props> = ({
  name,
  email,
  password,
  confirmPassword,
  onChange,
}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(t) => onChange("name", t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={(t) => onChange("email", t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(t) => onChange("password", t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(t) => onChange("confirmPassword", t)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
});

export default UserForm;
