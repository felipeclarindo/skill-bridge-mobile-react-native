import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert, SafeAreaView } from "react-native";
import Button from "../../components/Button";
import { createJob } from "../../services/mockCrud";
import Header from "../../components/Header";

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
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          placeholder="Título da vaga"
          style={styles.input}
          onChangeText={setTitle}
          value={title}
        />
        <TextInput
          placeholder="Empresa"
          style={styles.input}
          onChangeText={setCompany}
          value={company}
        />
        <Button title="Salvar" onPress={handleCreate} loading={loading} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  content: { padding: 20 },
  input: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#DDD",
  },
});
