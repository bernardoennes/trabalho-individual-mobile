import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import filmes from "../filmes/filmes";

type PosterProps = {
  source: { uri: string };
  filmeId?: number;
};

type RootStackParamList = {
  MovieScreen: { filme: typeof filmes[0] };
};

const Poster: React.FC<PosterProps> = ({ source, filmeId }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    if (typeof filmeId === "number") {
      const filme = filmes[filmeId];
      if (filme) {
        navigation.navigate("MovieScreen", { filme });
      }
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      disabled={typeof filmeId !== "number"}
    >
      <Image source={source} style={styles.poster} />
    </TouchableOpacity>
  );
};

export default Poster;