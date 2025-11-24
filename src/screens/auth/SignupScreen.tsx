import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import Button from "../../components/Button";
import { useAuth } from "../../contexts/AuthContext";

export default function SignupScreen({ navigation }: any) {
  const { signup } = useAuth(); // chama nosso mockSignup do AuthContext
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup() {
    if (!name || !email || !password) {
      return Alert.alert("Erro", "Preencha todos os campos");
    }

    try {
      setLoading(true);
      const ok = await signup(name, email, password); // usa o mock
      setLoading(false);

      if (!ok) {
        return Alert.alert("Erro", "Não foi possível criar sua conta");
      }

      Alert.alert("Sucesso", "Conta criada com sucesso!");
      navigation.goBack();
    } catch (err: any) {
      setLoading(false);
      Alert.alert("Erro", err || "Falha ao registrar");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Cadastrar" onPress={handleSignup} loading={loading} />

      <Text style={styles.link} onPress={() => navigation.goBack()}>
        Voltar ao login
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
