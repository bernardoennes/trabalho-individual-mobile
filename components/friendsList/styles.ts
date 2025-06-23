import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  containerListaAmigos: {
    marginTop: 12,
  },

  cabecalhoAmigos: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
  },

  linhaAvatares: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  containerAvatar: {
    alignItems: "center",
    marginRight: 12,
    marginBottom: 10,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 0,
    borderColor: "transparent",
    opacity: 1,
  },

  avatarAssistido: {
    borderWidth: 2,
    borderColor: "#44c047",
  },

  avatarQuerVer: {
    opacity: 0.7,
  },

  linhaEstrelas: {
    flexDirection: "row",
    marginTop: 2,
  },

  estrela: {
    color: "#3d4853",
    fontSize: 12,
  },

  estrelaAtiva: {
    color: "#44c047",
  },

  amigos: {
    color: "#b0b0b0",
    fontWeight: "bold",
    fontSize: 13,
    marginBottom: 2,
    textTransform: "uppercase",
  },

  infoAmigos: {
    color: "#b0b0b0",
    fontSize: 13,
    marginBottom: 0,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },

  containerIconeRelogio: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#22272b",
    borderRadius: 10,
    padding: 1,
    zIndex: 2,
  },
});

export default styles;
