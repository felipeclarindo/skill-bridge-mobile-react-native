import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import Button from "../../components/Button";
import { createJob } from "../../services/mockCrud";

export default function JobCreateScreen({ navigation }: any) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCreate() {
    if (!title || !company) {
      return Alert.alert("Erro", "Preencha todos os campos");
    }

    setLoading(true);
    await createJob({ title, company });
    setLoading(false);

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Título da vaga"
        style={styles.input}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Empresa"
        style={styles.input}
        onChangeText={setCompany}
      />

      <Button title="Salvar" onPress={handleCreate} loading={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 60 },
  input: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#DDD",
  },
});
