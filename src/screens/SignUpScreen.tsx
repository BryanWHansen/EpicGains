import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { signUp } from "../firebase/auth";
import UserForm from "../components/UserForm";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import AppHeader from "../components/AppHeader";

type Nav = NativeStackNavigationProp<RootStackParamList, "SignUp">;

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<Nav>();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [valid, setValid] = useState(false);

  const onChange = (field: keyof typeof form, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
  };

  const isEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  useEffect(() => {
    const filled =
      form.name.trim() !== "" &&
      form.email.trim() !== "" &&
      form.password !== "" &&
      form.confirmPassword !== "";
    const ok =
      filled && isEmail(form.email) && form.password === form.confirmPassword;
    setValid(ok);
  }, [form]);

  const onSubmit = async () => {
    try {
      await signUp(form.email.trim(), form.password);
      navigation.navigate("Welcome");
    } catch (e: any) {
      Alert.alert("Sign Up Error", e.message ?? "Unable to create account");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <AppHeader
        title="EpicGoals"
        showBack
        onBack={() => navigation.goBack()}
        showNavMenu={false}
        showUserMenu={false}
      ></AppHeader>
      <View style={styles.container}>
        <Text style={styles.heading}>Create an Account</Text>
        <UserForm
          name={form.name}
          email={form.email}
          password={form.password}
          confirmPassword={form.confirmPassword}
          onChange={onChange}
        />
        {valid && <Button title="Create Account" onPress={onSubmit} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: "center" },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
});

export default SignUpScreen;
