import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Linking } from 'react-native'

export default class Article extends Component {

    renderPhoto = () => {
        if(this.props.article.image.url !== "" || null){
            return this.props.article.image.url
        } else {
            return 'https://picsum.photos/200/300'
        }
    }

    formatString = (str) => {
       let cleanString = str.replace(/<(?:.|\n)*?>/gm, '')
        return cleanString
    }
        
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.formatString(this.props.article.title)}</Text>
                    <Image 
                        source={{uri: `${this.renderPhoto()}` }}
                        style={styles.image} />
                    <Text style={styles.text}>Source: {this.formatString(this.props.article.provider.name)}</Text>
                <Text style={styles.text}>{this.formatString(this.props.article.description)}</Text>
                    <Text style={{color: 'blue'}}
                        onPress={() => Linking.openURL(`${this.props.article.url}`)}>
                           Link to full article here
                    </Text>
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