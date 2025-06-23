import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

interface AvaliacaoProps {
  ratingBars: number[];
  rating: number | string;
  fans: string;
}

const Avaliacao: React.FC<AvaliacaoProps> = ({ ratingBars, rating, fans }) => (
  <View>
    <View style={styles.linhaAvaliacoes}>
      <Text style={styles.tituloSecao}>AVALIAÇÕES</Text>
      <Text style={styles.fans}>{fans ? fans : "0"} FÃS</Text>
    </View>

    <View style={styles.linhaBarras}>
      <Text style={styles.estrela}>★</Text>

      <View style={styles.grupoBarras}>
        {ratingBars.map((h, i) => (
          <View
            key={i}
            style={[
              styles.barraUnica,
              {
                height: h,
                marginLeft: i === 0 ? 0 : 2,
              },
            ]}
          />
        ))}
      </View>

      <View style={styles.colunaAvaliacao}>
        <Text style={styles.valorAvaliacao}>{rating}</Text>
        <View style={styles.estrelasDireita}>
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Text key={i} style={styles.estrelaDireita}>
                ★
              </Text>
            ))}
        </View>
      </View>
    </View>
  </View>
);

export default Avaliacao;
