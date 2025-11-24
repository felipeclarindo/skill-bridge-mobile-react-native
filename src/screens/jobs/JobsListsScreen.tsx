import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { listJobs, deleteJob } from "../../services/mockCrud";
import Header from "../../components/Header";

export default function JobsListScreen({ navigation }: any) {
  const [jobs, setJobs] = useState<any[]>([]);

  // Função para carregar jobs
  async function load() {
    const data = (await listJobs()) as any[];
    setJobs(data);
  }

  // Função para deletar job
  async function remove(id: string) {
    await deleteJob(id);
    load();
  }

  // Carregar jobs sempre que a tela estiver em foco
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", load);
    return unsubscribe;
  }, [navigation]);

  // Render de cada item
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.company}>{item.company}</Text>
      <View style={styles.actionRow}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Editar Vaga", { job: item })}
        >
          <Text style={styles.edit}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => remove(item.id)}>
          <Text style={styles.delete}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Botão criar vaga */}
      <TouchableOpacity
        style={styles.createBtn}
        onPress={() => navigation.navigate("Nova Vaga")}
      >
        <Text style={styles.createBtnText}>+ Nova vaga</Text>
      </TouchableOpacity>

      {/* Lista de vagas */}
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  createBtn: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
  },
  createBtnText: { color: "#FFF", fontWeight: "bold", fontSize: 16 },
  card: {
    padding: 16,
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginBottom: 14,
    borderRadius: 8,
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: "bold", marginBottom: 4 },
  company: { fontSize: 14, color: "#555" },
  actionRow: { flexDirection: "row", marginTop: 10 },
  edit: { marginRight: 20, color: "#2E7D32", fontWeight: "bold" },
  delete: { color: "#E53935", fontWeight: "bold" },
});
