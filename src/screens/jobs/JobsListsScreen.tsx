import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { listJobs, deleteJob } from "../../services/mockCrud";

export default function JobsListScreen({ navigation }: any) {
  const [jobs, setJobs] = useState([]);

  async function load() {
    const data = (await listJobs()) as any;
    setJobs(data);
  }

  async function remove(id: string) {
    await deleteJob(id);
    load();
  }

  useEffect(() => {
    navigation.addListener("focus", load);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.createBtn}
        onPress={() => navigation.navigate("JobCreate")}
      >
        <Text style={{ color: "#FFF" }}>+ Nova vaga</Text>
      </TouchableOpacity>

      <FlatList
        data={jobs}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.company}</Text>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text
                style={styles.edit}
                onPress={() => navigation.navigate("JobEdit", { job: item })}
              >
                Editar
              </Text>

              <Text style={styles.delete} onPress={() => remove(item.id)}>
                Excluir
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 20 },
  card: {
    padding: 16,
    backgroundColor: "#FFF",
    marginBottom: 14,
    borderRadius: 8,
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: "bold" },
  createBtn: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 6,
    marginBottom: 20,
    alignItems: "center",
  },
  edit: { marginRight: 20, color: "#2E7D32" },
  delete: { color: "#E53935" },
});
