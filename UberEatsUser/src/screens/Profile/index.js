import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.page}>
      <Text>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1, 
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Profile