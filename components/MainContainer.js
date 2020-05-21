import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Article from './Article'
import { ScrollView } from 'react-native-gesture-handler';

let rak = '8438c1aaccmsh00107ef5defee46p19f9f8jsnbaaaa08bc316'

let expData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export default class MainContainer extends Component {

        state = {
            news: [expData, expData, expData, expData],
            currentPage : [expData, expData, expData, expData],
        }
    
    // componentDidMount(){
    //     fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=false&pageNumber=1&pageSize=10&q=${this.state.currentPage}&safeSearch=false`, {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    //             "x-rapidapi-key": `${}`
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log(response)
    //         this.setState({
    //             news: response
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // }

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
                            <TouchableOpacity onPress={() => this.setState({ currentPage: [expData, expData, expData]})}><Text style={styles.navLinks}>Politics   </Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ currentPage: [expData, expData, expData]})}><Text style={styles.navLinks}>Sports   </Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ currentPage: [expData, expData, expData]})}><Text style={styles.navLinks}>Health   </Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ currentPage: [expData, expData, expData]})}><Text style={styles.navLinks}>Finance   </Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ currentPage: [expData, expData, expData]})}><Text style={styles.navLinks}>Entertainment</Text></TouchableOpacity>
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