import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Article from './Article'
import { ScrollView } from 'react-native-gesture-handler';

let expData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

let ra = "8438c1aaccmsh00107ef5defee46p19f9f8jsnbaaaa08bc316"

export default class MainContainer extends Component {

        state = {
            news: 'US News',
            currentPage : null,
        }

        fetchNews = () => {
            fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=false&pageNumber=1&pageSize=10&q=${this.state.news}&safeSearch=true`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
                "x-rapidapi-key": `${ra}`
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response.value)
            this.setState({
                currentPage: response.value,
            })
        })
        }


        handlePress = (id) => {
            if(id === 1){
                fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=false&pageNumber=1&pageSize=10&q=us%20politics%20news&safeSearch=true`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
                    "x-rapidapi-key": `${ra}`
                }
            })
            .then(response => response.json())
            .then(response => {
                console.log(response.value)
                this.setState({
                    currentPage: response.value,
                })
            })
            } else if (id === 2){
                fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=false&pageNumber=1&pageSize=10&q=sports&safeSearch=true`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
                    "x-rapidapi-key": `${ra}`
                }
            })
            .then(response => response.json())
            .then(response => {
                console.log(response.value)
                this.setState({
                    currentPage: response.value,
                })
            })
            } else if (id === 3){
                fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=false&pageNumber=1&pageSize=10&q=us%20health%20news&safeSearch=true`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
                    "x-rapidapi-key": `${ra}`
                }
            })
            .then(response => response.json())
            .then(response => {
                console.log(response.value)
                this.setState({
                    currentPage: response.value,
                })
            })
            } else if (id === 4){
                fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=false&pageNumber=1&pageSize=10&q=us%20finance%20news&safeSearch=true`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
                    "x-rapidapi-key": `${ra}`
                }
            })
            .then(response => response.json())
            .then(response => {
                console.log(response.value)
                this.setState({
                    currentPage: response.value,
                })
            })
            } else if (id == 5){
                fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=false&pageNumber=1&pageSize=10&q=us%20entertainment%20news&safeSearch=true`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
                    "x-rapidapi-key": `${ra}`
                }
            })
            .then(response => response.json())
            .then(response => {
                console.log(response.value)
                this.setState({
                    currentPage: response.value,
                })
            })
            } else if (id ===6){
                fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=false&pageNumber=1&pageSize=10&q=sports&safeSearch=true`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
                    "x-rapidapi-key": `${ra}`
                }
            })
            .then(response => response.json())
            .then(response => {
                console.log(response.value)
                this.setState({
                    currentPage: response.value,
                })
            })
            }
        }

    componentDidMount(){
        this.fetchNews()
    }

    renderMainArticles = () => {
        if(this.state.currentPage !== null){
            return (this.state.currentPage).map(article => 
                <Article style={styles.container} key={article.id} article={article}/>
        )}
    }

    render() {
        return (
            <View>
                <View style={styles.navBarTop}>
                    <Text style={styles.title}>Old News</Text>
                        <View style={styles.navBar}>
                            <TouchableOpacity onPress={() => this.handlePress(1)}><Text style={styles.navLinks}>Politics   </Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handlePress(2)}><Text style={styles.navLinks}>Sports   </Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handlePress(3)}><Text style={styles.navLinks}>Health   </Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handlePress(4)}><Text style={styles.navLinks}>Finance   </Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handlePress(5)}><Text style={styles.navLinks}>Entertainment</Text></TouchableOpacity>
                        </View>
                </View>
                    <ScrollView contentContainerStyle={{flexGrow: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'papayawhip',}} >
                        {this.renderMainArticles ? this.renderMainArticles() : this.renderMainArticles}
                    </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    navBarTop: {
        justifyContent: 'center',
        backgroundColor: 'papayawhip',
        paddingBottom: 4,
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
    },
    navBar: {
        justifyContent: 'center',
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