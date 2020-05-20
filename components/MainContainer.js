import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Page from './Page'
import NavBar from './NavBar'


let rak = '8438c1aaccmsh00107ef5defee46p19f9f8jsnbaaaa08bc316'

let expData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export default class MainContainer extends Component {

    state = {
            news: [expData, expData, expData, expData],
            newsTopic: "Sports News"
    }

    // componentDidMount(){
    //     fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=false&pageNumber=1&pageSize=10&q=Taylor%20Swift&safeSearch=false", {
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

    changeNewsTopic = (e) => {
        console.log(e)
        this.setState({
            newsTopic: e.target.value
        })
    }

    render() {
        return (
            <View>
                <NavBar/>
                <Page news={this.state.news}/>
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
    }
  })