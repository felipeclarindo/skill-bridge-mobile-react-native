import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert, SafeAreaView } from "react-native";
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
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
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
