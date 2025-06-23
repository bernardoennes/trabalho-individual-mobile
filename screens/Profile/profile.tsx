import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import Header from "../../components/header/header";
import Stats from "../../components/stats/Stats";
import Poster from "../../components/poster/posterFilme";
import PosterList from "../../components/posterList/posterList";
import filmes from "../../components/filmes/filmes";
import styles from "./styles";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: "https://gravatar.com/avatar/7b3cee4e3ae9788ab2a0c76964ac2f5c?size=256" }}
            style={styles.avatar}
          />
          <Text style={styles.username}>Dragon</Text>
          <Text style={styles.bio}>👀 Behind you.</Text>
          <Text style={styles.status}>
            Trying to see 500 movies until the end of the year because fuck my
            sanity I guess.
          </Text>
        </View>

        <Stats
          stats={[
            { value: 289, label: "Movies" },
            { value: 77, label: "This Year" },
            { value: 25, label: "Following" },
            { value: 44, label: "Followers" },
          ]}
        />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FAVORITE MOVIES</Text>
          <PosterList sources={filmes.slice(0, 4)} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>RECENT ACTIVITY</Text>
          <PosterList sources={filmes.slice(3, 7)} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>RECENT REVIEWS</Text>
          {filmes.slice(4).map((poster, idx) => (
            <View style={styles.review} key={idx}>
              <Poster source={poster} />
              <View style={styles.reviewTextContainer}>
                <Text style={styles.reviewTitle}>
                  {poster.titulo} <Text style={styles.reviewTitleYear}>{poster.ano}</Text>
                </Text>
                <Text style={styles.reviewRating}>
                  {poster.avaliacao} <Text style={styles.reviewRatingDate}>Watched on {poster.data}</Text>
                </Text>
                <Text style={styles.reviewContent}>
                  {poster.review}
                </Text>
                <Text style={styles.reviewLike}>👍 No likes yet</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

