import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181c23',
  },
  header: {
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  username: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  bio: {
    color: '#aaa',
    fontSize: 12,
  },
  status: {
    color: '#ccc',
    textAlign: 'center',
    marginTop: 8,
    fontSize: 12,
    paddingHorizontal: 16,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: '#ccc',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  horizontalList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  poster: {
    width: 70,
    height: 100,
    backgroundColor: '#444',
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  reviewTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  reviewTitleYear: {
    color: "#b0b0b0",
    fontWeight: "normal",
  },
  reviewRating: {
    color: "#44c047",
    marginBottom: 2,
  },
  reviewRatingDate: {
    color: "#b0b0b0",
  },
  reviewContent: {
    color: "#b0b0b0",
    fontSize: 12,
    marginBottom: 4,
  },
  reviewLike: {
    color: "#888",
    fontSize: 12,
  },
  reviewTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
});

export default styles;