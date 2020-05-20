import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import Article from './Article'
import { ScrollView } from 'react-native-gesture-handler'

export default class Page extends Component {

    renderArticles = () => {
        if(this.props.news !== null){
            return (this.props.news).map(article => 
                <Article style={styles.container} key={article.id} article={article}/>
        )}
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                {this.renderArticles ? this.renderArticles() : "Loading..."}
                {console.log(this.props.news)}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'papayawhip',
    }
  })