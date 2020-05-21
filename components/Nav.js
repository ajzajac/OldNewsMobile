import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Nav = ({ navigation }) => {
    return (
        <View style={styles.navBarTop}>
                <Text style={styles.title}>Old News</Text>
                <View style={styles.navBar}>
                     <TouchableOpacity onPress={() => navigation.navigate('Politics', { name: 'Politics' })}><Text style={styles.navLinks}>Politics   </Text></TouchableOpacity>
                     <TouchableOpacity onPress={() => this.props.changeNewsTopic}><Text style={styles.navLinks}>Sports   </Text></TouchableOpacity>
                     <TouchableOpacity onPress={() => this.props.changeNewsTopic}><Text style={styles.navLinks}>Health   </Text></TouchableOpacity>
                     <TouchableOpacity onPress={() => this.props.changeNewsTopic}><Text style={styles.navLinks}>Finance   </Text></TouchableOpacity>
                     <TouchableOpacity onPress={() => this.props.changeNewsTopic}><Text style={styles.navLinks}>Entertainment</Text></TouchableOpacity>
                </View>
            </View>
    )
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

export default Nav
