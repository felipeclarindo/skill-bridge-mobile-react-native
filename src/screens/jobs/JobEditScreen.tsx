import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import Button from "../../components/Button";
import { updateJob } from "../../services/mockCrud";

export default function JobEditScreen({ route, navigation }: any) {
  const { job } = route.params;

  const [title, setTitle] = useState(job.title);
  const [company, setCompany] = useState(job.company);
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    if (!title || !company) {
      return Alert.alert("Erro", "Preencha todos os campos");
    }

    setLoading(true);
    await updateJob(job.id, { title, company });
    setLoading(false);

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TextInput value={title} style={styles.input} onChangeText={setTitle} />
      <TextInput
        value={company}
        style={styles.input}
        onChangeText={setCompany}
      />

      <Button
        title="Salvar alterações"
        onPress={handleSave}
        loading={loading}
      />
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
