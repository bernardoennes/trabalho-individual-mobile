import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  linhaAvaliacoes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  tituloSecao: {
    color: "#b0b0b0",
    fontWeight: "bold",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  fans: {
    color: "#44c047",
    fontSize: 12,
    fontWeight: "bold",
  },
  linhaBarras: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 0,
    marginBottom: 0,
    height: 60,
  },
  estrela: {
    color: "#44c047",
    fontSize: 16,
    marginRight: 6,
    marginBottom: 2,
  },
  grupoBarras: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: "100%",
    flex: 1,
    marginRight: 12,
  },
  barraUnica: {
    width: 25,
    backgroundColor: "#3d4853",
    borderRadius: 2,
    alignSelf: "flex-end",
  },
  valorAvaliacao: {
    color: "#b0b0b0",
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 10,
    alignSelf: "flex-end",
    marginBottom: 2,
  },
  estrelasDireita: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: 2,
    marginBottom: 3,
  },
  colunaAvaliacao: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  estrelaDireita: {
    color: "#44c047",
    fontSize: 12,
    marginLeft: 1.5,
  },
});

export default styles;
