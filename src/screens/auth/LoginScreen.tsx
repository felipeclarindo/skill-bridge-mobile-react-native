import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import Button from "../../components/Button";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginScreen({ navigation }: any) {
  const { login } = useAuth(); // agora chama a API real
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      return Alert.alert("Erro", "Preencha todos os campos");
    }

    try {
      setLoading(true);
      const result = await login(email, password); // chama a API
      setLoading(false);

      if (!result) {
        return Alert.alert("Erro", "Credenciais inválidas");
      }

      // Login bem-sucedido → navega para Home
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    } catch (err: any) {
      setLoading(false);
      Alert.alert("Erro", err.message || "Falha ao realizar login");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SkillBridge</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Entrar" onPress={handleLogin} loading={loading} />

      <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>
        Criar conta
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 80 },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 40 },
  input: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 6,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  link: { marginTop: 20, color: "#4CAF50", textAlign: "center" },
});
