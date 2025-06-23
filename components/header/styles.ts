import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cabecalho: {
    backgroundColor: '#1e1e1e',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textoCabecalho: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  botaoBusca: {
    marginLeft: 'auto',
  },
  iconeBusca: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  campoBusca: {
    flex: 1,
    height: 32,
    backgroundColor: '#222',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginLeft: 12,
    marginRight: 8,
  },
});

export default styles;