import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default class Navigator extends Component {
    render() {
        return (
            <View style={styles.containerNav}>
                <TouchableOpacity  style={styles.iconNav}>
                <Feather 
                    size={30} 
                    color="#aaaaaa" 
                    name='globe' 
                    ></Feather>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.iconNav}>
                <Feather 
                    size={30} 
                    color="#aaaaaa" 
                    name='compass'
                    ></Feather>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.iconNav}>
                <Feather 
                    size={30} 
                    color="#aaaaaa" 
                    name='award' 
                    ></Feather>
                </TouchableOpacity>
               <TouchableOpacity style={styles.iconNav}>
               <Feather
                    size={30} 
                    color="#aaaaaa" 
                    name='message-circle' 
                    onPress={() => this.props.navigation.push('Message')}
                    ></Feather>
               </TouchableOpacity>
                <TouchableOpacity  style={styles.iconNav}>
                <Feather 
                    size={30} 
                    color="#aaaaaa" 
                    name='user' 
                   ></Feather>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    containerNav:{
        flexDirection:'row',
        paddingLeft:20,
        paddingRight:20
    },
    iconNav:{
        flex:1,
        alignItems:'center'
    }
})

  

