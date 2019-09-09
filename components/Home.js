import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Top from './Top';
import Mid from './Mid';
import List from './List';
import Navigator from './Navigator';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.top}>
                    <Top title="Traveling"/>
                </View>
                <View style={styles.mid}>
                    <ScrollView>
                        <Mid />
                        <View style={{ paddingLeft: 30, paddingRight: 30, marginTop: 20 }}>
                            <List />
                        </View>
                        <View style={{ paddingLeft: 30, paddingRight: 30, marginTop: 20 }}>
                            <List />
                        </View>
                        <View style={{ paddingLeft: 30, paddingRight: 30, marginTop: 20 }}>
                            <List />
                        </View>
                        <View style={{ paddingLeft: 30, paddingRight: 30, marginTop: 20 }}>
                            <List />
                        </View>
                        <View style={{ paddingLeft: 30, paddingRight: 30, marginTop: 20 }}>
                            <List />
                        </View>
                    </ScrollView>
                </View>
                <View style={{flex:2,justifyContent: 'center'}}>  
                    <Navigator />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    top: {
        flex: 2,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center'
    },
    mid: {
        flex: 15,
        backgroundColor: '#e9e9e9'
    }
})