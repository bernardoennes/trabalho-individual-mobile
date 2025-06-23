import React, { useState } from 'react';
import { View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';

const Cabecalho = () => {
  const [pesquisaAberta, setPesquisaAberta] = useState(false);
  const [pesquisa, setPesquisa] = useState('');

  return (
    <View style={styles.cabecalho}>
      <Image
        source={{ uri: "https://a.ltrbxd.com/logos/letterboxd-decal-dots-pos-rgb-500px.png" }}
        style={styles.logo}
        resizeMode="contain"
      />
      {pesquisaAberta ? (
        <TextInput
          style={styles.campoBusca}
          placeholder="Pesquisar..."
          placeholderTextColor="#aaa"
          value={pesquisa}
          onChangeText={setPesquisa}
          autoFocus
        />
      ) : null}
      <TouchableOpacity
        style={styles.botaoBusca}
        onPress={() => setPesquisaAberta(!pesquisaAberta)}
      >
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/54/54481.png"
          }}
          style={styles.iconeBusca}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Cabecalho;