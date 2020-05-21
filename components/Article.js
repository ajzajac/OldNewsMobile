import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class Article extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Title: Headline of Article goes here</Text>
                    <Image 
                        source={{uri:'https://picsum.photos/200/300'}}
                        style={styles.image} />
                    <Text style={styles.text}>Author: Author Name Here</Text>
                <Text style={styles.text}>{this.props.article}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      borderBottomWidth: 1,
      borderColor: 'darkgrey',
      paddingVertical: 5,
      marginTop: 5,
      width: 338,
    },
    image: {
        height: 200,
        width: 338,
    },
    text: {
        paddingBottom: 7,
        paddingVertical: 7,
        fontSize: 13
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 8,
    }
  })