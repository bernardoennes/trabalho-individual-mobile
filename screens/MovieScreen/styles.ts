import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181c23",
  },
  bannerContainer: {
    position: "relative",
    width: "100%",
    height: 170,
    marginBottom: 8,
  },
  backdrop: {
    width: "100%",
    height: 170,
    position: "absolute",
    top: 0,
    left: 0,
  },
  gradientOverlay: {
    position: "absolute",
    width: "100%",
    height: 170,
    top: 0,
    left: 0,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingTop: 80,
    paddingBottom: 16,
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: 0,
    left: 0,
  },
  titleInfo: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 2,
  },
  subtitle: {
    color: "#b0b0b0",
    fontSize: 13,
    marginBottom: 8,
  },
  trailerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  trailerButton: {
    backgroundColor: "#222",
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  trailerText: {
    color: "#44c047",
    fontWeight: "bold",
    fontSize: 12,
  },
  runtime: {
    color: "#b0b0b0",
    fontSize: 12,
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  sectionTitle: {
    color: "#b0b0b0",
    fontWeight: "bold",
    fontSize: 13,
    marginBottom: 6,
    textTransform: "uppercase",
  },
   sinopse: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 8,
  },
  reviewedRow: {
    backgroundColor: "#23272f",
    borderRadius: 6,
    padding: 10,
    alignItems: "center",
    marginBottom: 8,
  },
  reviewed: {
    color: "#44c047",
    fontWeight: "bold",
    fontSize: 13,
  },
});

export default styles;