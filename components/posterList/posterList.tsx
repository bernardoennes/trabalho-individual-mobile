import React from "react";
import { View } from "react-native";
import Poster from "../poster/posterFilme";
import filmes from "../filmes/filmes";
import estilos from "./styles";

const PosterList = ({ sources }: { sources: typeof filmes }) => (
  <View style={estilos.listaHorizontal}>
    {sources.map((filme, idx) => (
      <Poster
        key={filme.titulo}
        source={{ uri: filme.uri }}
        filmeId={filmes.findIndex(f => f.titulo === filme.titulo)}
      />
    ))}
  </View>
);

export default PosterList;