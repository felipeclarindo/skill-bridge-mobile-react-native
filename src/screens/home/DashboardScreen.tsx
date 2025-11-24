import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Dashboard</Text>
      <Text>Aqui você verá métricas quando a API estiver pronta.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 80, padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
});
