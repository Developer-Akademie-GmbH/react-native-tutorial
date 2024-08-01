import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headline}>Mein Kontaktbuch</Text>
            <Link style={styles.link} href="/(tabs)/home">Öffnen</Link>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headline: {
        fontSize: 30
    },
    link: {
        marginTop: 20,
        backgroundColor: 'blue',
        fontSize: 20,
        color: 'white',
        padding: 16
    }
})