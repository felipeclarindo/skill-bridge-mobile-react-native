import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

export default function AboutScreen() {
  const hash = Constants.manifest?.revisionId || "no-hash";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Título */}
        <Text style={styles.title}>Sobre o SkillBridge</Text>

        {/* Descrição */}
        <Text style={styles.text}>
          O SkillBridge é um portal de empregabilidade desenvolvido para a
          Global Solution. Ele conecta profissionais às melhores oportunidades,
          ajuda no acompanhamento de vagas e entrevistas, além de fornecer
          insights sobre o progresso do usuário.
        </Text>

        {/* Funcionalidades */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Funcionalidades Principais</Text>
          <View style={styles.feature}>
            <Ionicons name="briefcase-outline" size={20} color="#4CAF50" />
            <Text style={styles.featureText}>
              Vagas de emprego atualizadas diariamente
            </Text>
          </View>
          <View style={styles.feature}>
            <Ionicons name="stats-chart-outline" size={20} color="#4CAF50" />
            <Text style={styles.featureText}>
              Dashboard com estatísticas de desempenho
            </Text>
          </View>
          <View style={styles.feature}>
            <Ionicons name="notifications-outline" size={20} color="#4CAF50" />
            <Text style={styles.featureText}>
              Notificações de novas oportunidades
            </Text>
          </View>
          <View style={styles.feature}>
            <Ionicons name="person-circle-outline" size={20} color="#4CAF50" />
            <Text style={styles.featureText}>
              Perfil completo para aumentar suas chances
            </Text>
          </View>
        </View>

        {/* Equipe */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Equipe de Desenvolvimento</Text>
          <Text style={styles.text}>Felipe Clarindo - 554547 (2TDSPF)</Text>
          <Text style={styles.text}>Humberto de Souza - 558482 (2TDSPX)</Text>
          <Text style={styles.text}>Vinicius Beda - 554914 (2TDSPX)</Text>
        </View>

        {/* Commit hash */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Informações Técnicas</Text>
          <Text style={styles.text}>Commit hash: {hash}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  scrollContent: { padding: 20 },

  title: { fontSize: 26, fontWeight: "bold", marginBottom: 15, color: "#333" },
  text: { fontSize: 16, color: "#555", marginBottom: 10 },

  card: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  feature: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#555",
  },
});
