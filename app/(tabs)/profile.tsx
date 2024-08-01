import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Mein Profil</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})