import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../theme/theme';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  borderContainer: {
    width: '95%',
    alignSelf: 'center',
  },
  Tabcontainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  newCollectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    marginTop: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  text: {
    color: Colors.black,
    opacity: 0.75,
  },
  bellBox: {
    borderWidth: 1,
    height: 45,
    width: 45,
    borderColor: Colors.border,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButton: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search: {
    width: '80%',
    height: 52,
    borderRadius: 52,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    paddingHorizontal: 24,
    flexDirection: 'row',
    gap: 12,
  },
  searchText: {
    flex: 1,
    fontSize: 16,
    color: Colors.black,
    opacity: 0.5,
  },
  tuneContainer: {
    borderWidth: 1,
    height: 45,
    width: 45,
    backgroundColor: Colors.black,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  newCollectionText: {
    fontSize: 20,
    fontWeight: '700',
    Colors: Colors.black,
  },
  seeAllText: {color: Colors.border, fontWeight: '600', opacity: 0.7},
  box: {
    borderRadius: 100,
    backgroundColor: '#fff',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 9999,
    marginLeft: 110,
    top: 10,
    opacity: 0.8,
  },
  blurView: {
    height: 40,
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: Colors.light,
    overflow: 'hidden',
    opacity: 0.8,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cardContainer: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    alignItems:'center'
  },
  CardImage: {
    height: height / 2,
    width: width / 1.1,
    borderRadius:20
  },

  iconBox: {
    height: 35,
    width: 35,
    backgroundColor: Colors.white,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPrice: {color: Colors.white, fontWeight: '600', fontSize: 20},
  titleText: {
    flex: 1,
    fontSize: 12,
    fontWeight: '700',
    padding: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  filterText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  resetText: {
    fontSize: 15,
    marginBottom: 8,
  },
});
export default styles;
