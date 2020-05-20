import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { TouchableOpacity } from 'react-native'

export default class NavBar extends Component {

    render() {
        return (
            <View style={styles.navBarTop}>
                <Text style={styles.title}>Old News</Text>
                <View style={styles.navBar}>
                     <TouchableOpacity><Text style={styles.navLinks}>Politics   </Text></TouchableOpacity>
                     <TouchableOpacity><Text style={styles.navLinks}>Sports   </Text></TouchableOpacity>
                     <TouchableOpacity><Text style={styles.navLinks}>Health   </Text></TouchableOpacity>
                     <TouchableOpacity><Text style={styles.navLinks}>Finance   </Text></TouchableOpacity>
                     <TouchableOpacity><Text style={styles.navLinks}>Entertainment</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navBarTop: {
        justifyContent: 'center'
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
    },
    navBar: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 1,
        flexDirection: 'row',
    },
    navLinks: {
        fontWeight: 'bold',
        paddingVertical: 6,
    },
})