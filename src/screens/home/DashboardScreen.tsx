import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Dados simulados
const appliedJobs = [
  { id: "1", title: "Desenvolvedor React Native", company: "TechCorp" },
  { id: "2", title: "Analista de Dados", company: "Data Solutions" },
  { id: "3", title: "UX/UI Designer", company: "DesignHub" },
];

const notifications = [
  { id: "1", text: "Nova vaga de Desenvolvedor Backend disponível!" },
  { id: "2", text: "Seu perfil ainda está 70% completo." },
  { id: "3", text: "Participe do webinar de empregabilidade amanhã." },
];

export default function DashboardScreen() {
  const renderJobItem = ({ item }: any) => (
    <View style={styles.jobCard}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.jobCompany}>{item.company}</Text>
      <TouchableOpacity style={styles.detailsButton}>
        <Text style={styles.detailsText}>Ver detalhes</Text>
      </TouchableOpacity>
    </View>
  );

  const renderNotificationItem = ({ item }: any) => (
    <View style={styles.notificationCard}>
      <Ionicons name="notifications-outline" size={20} color="#4CAF50" />
      <Text style={styles.notificationText}>{item.text}</Text>
    </View>
  );

  // FlatList principal
  return (
    <FlatList
      data={notifications} // Última seção (notificações)
      keyExtractor={(item) => item.id}
      renderItem={renderNotificationItem}
      contentContainerStyle={{ paddingBottom: 20 }}
      ListHeaderComponent={
        <>
          <Text style={styles.title}>Seu Dashboard</Text>

          {/* Resumo do Perfil */}
          <View style={styles.profileCard}>
            <Text style={styles.profileTitle}>Resumo do Perfil</Text>
            <Text style={styles.profileText}>Perfil Completo: 70%</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: "70%" }]} />
            </View>
            <TouchableOpacity style={styles.editProfileButton}>
              <Text style={styles.editProfileText}>Editar Perfil</Text>
            </TouchableOpacity>
          </View>

          {/* Vagas Aplicadas */}
          <Text style={styles.sectionTitle}>Vagas Aplicadas Recentemente</Text>
          <FlatList
            data={appliedJobs}
            keyExtractor={(item) => item.id}
            renderItem={renderJobItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
          />

          {/* Estatísticas */}
          <Text style={styles.sectionTitle}>Estatísticas</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Vagas Aplicadas</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>5</Text>
              <Text style={styles.statLabel}>Entrevistas Marcadas</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Vagas Conquistadas</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Notificações</Text>
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 26, fontWeight: "bold", margin: 20, color: "#333" },

  // Perfil
  profileCard: {
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  profileTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  profileText: { fontSize: 14, color: "#555", marginBottom: 10 },
  progressBar: {
    height: 20,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  progressFill: { height: "100%", backgroundColor: "#4CAF50" },
  editProfileButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  editProfileText: { color: "#FFF", fontWeight: "bold" },

  // Seções
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginBottom: 10,
    color: "#333",
  },

  // Jobs
  jobCard: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    width: 250,
    elevation: 2,
  },
  jobTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  jobCompany: { fontSize: 14, color: "#777", marginBottom: 10 },
  detailsButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
  },
  detailsText: { color: "#FFF", fontWeight: "bold" },

  // Estatísticas
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  statCard: {
    backgroundColor: "#FFF",
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    elevation: 2,
  },
  statNumber: { fontSize: 22, fontWeight: "bold", color: "#4CAF50" },
  statLabel: { fontSize: 14, color: "#555", textAlign: "center", marginTop: 5 },

  // Notificações
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 20,
    elevation: 1,
  },
  notificationText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#333",
    flexShrink: 1,
  },
});
