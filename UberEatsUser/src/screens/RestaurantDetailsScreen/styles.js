import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  image: {
   width: '100%',
   aspectRatio: 5/3, 
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    marginVertical: 10
  },
  menuTitle: {
    marginHorizontal: 10,
    marginVertical: 10,
    fontSize: 18,
  },
  subtitle : {
    color: '#525252',
    fontSize: 15,
  },
  container: {
    margin: 10,
  },
  hr: {
    marginVertical: 10,
    width: '100%',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1
  }

});
