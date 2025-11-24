import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";

// Simulando dados de vagas e dicas
const jobOpportunities = [
  {
    id: "1",
    title: "Desenvolvedor React Native",
    company: "TechCorp",
    location: "São Paulo, SP",
  },
  {
    id: "2",
    title: "Analista de Dados",
    company: "Data Solutions",
    location: "Remoto",
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: "DesignHub",
    location: "Rio de Janeiro, RJ",
  },
];

const tips = [
  { id: "1", text: "Atualize seu LinkedIn regularmente." },
  { id: "2", text: "Prepare seu portfólio com projetos reais." },
  { id: "3", text: "Pratique entrevistas técnicas com amigos ou mentores." },
];

export default function HomeScreen({ navigation }: any) {
  const { user, logout } = useAuth();

  const renderJobItem = ({ item }: any) => (
    <View style={styles.jobCard}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.jobCompany}>{item.company}</Text>
      <Text style={styles.jobLocation}>{item.location}</Text>
      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => console.log(`Candidatar-se a: ${item.title}`)}
      >
        <Text style={styles.applyButtonText}>Candidatar-se</Text>
      </TouchableOpacity>
    </View>
  );

  const renderTipItem = ({ item }: any) => (
    <View style={styles.tipCard}>
      <Ionicons name="bulb-outline" size={20} color="#4CAF50" />
      <Text style={styles.tipText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Titulo */}
        <Text style={styles.title}>Skill Bridge</Text>
        {/* Subtítulo */}
        <Text style={styles.subtitle}>
          Explore oportunidades, dicas de carreira e acompanhe seu progresso.
        </Text>
        {/* Seção de vagas */}
        <Text style={styles.sectionTitle}>Vagas Recentes</Text>
        <FlatList
          data={jobOpportunities}
          keyExtractor={(item) => item.id}
          renderItem={renderJobItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 20 }}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
        {/* Seção de dicas */}
        <Text style={styles.sectionTitle}>Dicas de Carreira</Text>
        <FlatList
          data={tips}
          keyExtractor={(item) => item.id}
          renderItem={renderTipItem}
          style={{ marginBottom: 20 }}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          scrollEnabled={false}
        />
        {/* Seção de progresso (simulação) */}
        <Text style={styles.sectionTitle}>Seu Progresso</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: "65%" }]} />
          </View>
          <Text style={styles.progressText}>65% do seu perfil completo</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  title: {
    textAlign: "center",
    paddingVertical: 12,
    fontSize: 32,
  },
  welcome: { fontSize: 24, fontWeight: "bold", color: "#333" },
  logoutButton: {
    backgroundColor: "#FF5252",
    padding: 8,
    borderRadius: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  jobCard: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    width: 250,
    elevation: 2,
  },
  jobTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  jobCompany: { fontSize: 14, color: "#777" },
  jobLocation: { fontSize: 12, color: "#999", marginBottom: 10 },
  applyButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  applyButtonText: { color: "#FFF", fontWeight: "bold" },
  tipCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
  },
  tipText: { marginLeft: 10, fontSize: 14, color: "#333", flexShrink: 1 },
  progressContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  progressBar: {
    height: 20,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 5,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
  },
  progressText: {
    fontSize: 14,
    color: "#555",
  },
});
