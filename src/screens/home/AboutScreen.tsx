import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function AboutScreen() {
  const hash = Constants.manifest?.revisionId || "no-hash";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o SkillBridge</Text>
      <Text style={styles.text}>
        Aplicativo desenvolvido para a Global Solution.
      </Text>

      <Text style={{ marginTop: 20, fontWeight: "bold" }}>Commit hash:</Text>
      <Text>{hash}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 80 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16 },
});
