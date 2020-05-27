import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footer}>Designed and Created by Andrew Zajac</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 7,
        paddingVertical: 7,
        fontSize: 14,
        fontFamily: 'Times New Roman',
    }
})

export default Footer
