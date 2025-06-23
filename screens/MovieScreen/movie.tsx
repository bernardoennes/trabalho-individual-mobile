import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";

import Header from "../../components/header/header";
import Poster from "../../components/poster/posterFilme";
import filmes from "../../components/filmes/filmes";
import Avaliacao from "../../components/avaliacoes/avaliacoes";
import FriendsList from "../../components/friendsList/friendsList";

import styles from "./styles";

const MovieScreen = () => {
  const route = useRoute();
  const { filme } = route.params as { filme: typeof filmes[0] };

  if (!filme) {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={{ color: "#fff", padding: 20 }}>
          Filme não encontrado.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.bannerContainer}>
          <Image source={{ uri: filme.banner }} style={styles.backdrop} />
          <LinearGradient
            colors={["rgba(24,28,35,0.1)", "#181c23"]}
            style={styles.gradientOverlay}
          />
          <View style={styles.headerContent}>
            <Poster source={{ uri: filme.uri }} />
            <View style={styles.titleInfo}>
              <Text style={styles.title}>{filme.titulo}</Text>
              <Text style={styles.subtitle}>
                {filme.ano} • Directed by {filme.diretor}
              </Text>
              <View style={styles.trailerRow}>
                <TouchableOpacity style={styles.trailerButton}>
                  <Text style={styles.trailerText}>▶ TRAILER</Text>
                </TouchableOpacity>
                <Text style={styles.runtime}>{filme.duracao} mins</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{filme.tagline}</Text>
          <Text style={styles.sinopse}>{filme.sinopse}</Text>
        </View>
        <View style={styles.section}>
          <Avaliacao
            ratingBars={filme.ratingBars}
            rating={Number(filme.rating)}
            fans={filme.fans}
          />
        </View>
        <View style={styles.section}>
          <View style={styles.reviewedRow}>
            <Text style={styles.reviewed}>✓ You've reviewed this film</Text>
          </View>
        </View>
        <View style={styles.section}>
          <FriendsList
            friends={[
              {
                avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                rating: 5,
                watched: true,
                wantToWatch: false,
              },
              {
                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                rating: 4,
                watched: true,
                wantToWatch: false,
              },
              {
                avatar: "https://randomuser.me/api/portraits/men/65.jpg",
                rating: 4.5,
                watched: true,
                wantToWatch: false,
              },
              {
                avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                rating: 4,
                watched: true,
                wantToWatch: false,
              },
              {
                avatar: "https://randomuser.me/api/portraits/men/12.jpg",
                rating: 3.5,
                watched: true,
                wantToWatch: false,
              },
              {
                avatar: "https://randomuser.me/api/portraits/men/83.jpg",
                rating: 3,
                watched: true,
                wantToWatch: false,
              },
              {
                avatar: "https://randomuser.me/api/portraits/women/21.jpg",
                rating: 2.5,
                watched: true,
                wantToWatch: false,
              },
              {
                avatar: "https://randomuser.me/api/portraits/men/41.jpg",
                rating: 0,
                watched: false,
                wantToWatch: true,
              },
              {
                avatar: "https://randomuser.me/api/portraits/women/55.jpg",
                rating: 0,
                watched: false,
                wantToWatch: true,
              },
              {
                avatar: "https://randomuser.me/api/portraits/men/77.jpg",
                rating: 0,
                watched: false,
                wantToWatch: true,
              },
              {
                avatar: "https://randomuser.me/api/portraits/women/12.jpg",
                rating: 0,
                watched: false,
                wantToWatch: true,
              },
            ]}
            watchedCount={filme.friendsWatched}
            wantToWatchCount={filme.friendsWant}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieScreen;
