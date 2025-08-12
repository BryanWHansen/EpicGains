import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  progressBar: {
    height: 10,
    marginTop: 4,
  },
  item: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  completed: {
    color: "green",
  },
  pending: {
    color: "gray",
  },
  inProgress: {
    color: "orange",
  },
  board: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  column: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 8,
  },
  columnHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  card: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 6,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardText: {
    fontSize: 14,
  },
  goalCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  goalTitleBar: {
    backgroundColor: "#4caf50",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  goalTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    flexShrink: 1, // prevents title text from pushing icon offscreen
  },
  goalCardContent: {
    padding: 16,
  },
});

export default styles;
