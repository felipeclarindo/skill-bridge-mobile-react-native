import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import colors from "../theme/colors";

export default function Button({ title, onPress, loading }: any) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  text: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
