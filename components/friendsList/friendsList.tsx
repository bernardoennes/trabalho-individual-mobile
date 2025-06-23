import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Friend = {
  avatar: string;
  rating: number; 
  watched: boolean;
  wantToWatch: boolean;
};

type FriendsListProps = {
  friends: Friend[];
  watchedCount: number;
  wantToWatchCount: number;
};

const ListaAmigos: React.FC<FriendsListProps> = ({
  friends,
  watchedCount,
  wantToWatchCount,
}) => (
  <View style={styles.containerListaAmigos}>
    <View style={styles.cabecalhoAmigos}>
      <Text style={styles.amigos}>SEUS AMIGOS</Text>
      <Text style={styles.infoAmigos}>
        {watchedCount} ASSISTIRAM • {wantToWatchCount} QUEREM VER
      </Text>
    </View>
    <View style={styles.linhaAvatares}>
      {friends.map((friend, idx) => (
        <View key={idx} style={styles.containerAvatar}>
          <View>
            <Image
              source={{ uri: friend.avatar }}
              style={styles.avatar}
            />
            {friend.wantToWatch && (
              <View style={styles.containerIconeRelogio}>
                <MaterialCommunityIcons
                  name="clock-outline"
                  size={18}
                  color="#4fc3f7"
                />
              </View>
            )}
          </View>
          <View style={styles.linhaEstrelas}>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Text
                  key={i}
                  style={[
                    styles.estrela,
                    i < Math.round(friend.rating) && styles.estrelaAtiva,
                  ]}
                >
                  ★
                </Text>
              ))}
          </View>
        </View>
      ))}
    </View>
  </View>
);

export default ListaAmigos;