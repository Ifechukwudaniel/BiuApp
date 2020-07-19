import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, FlatList} from 'react-native';
import { getBlogs } from '../../Redux/Actions/blogs';
import {connect} from 'react-redux'
import {ActivityIndicator} from 'react-native-paper'
import EStyleSheet from 'react-native-extended-stylesheet'
 
class Activity extends Component {
    UNSAFE_componentWillMount(){
        StatusBar.setHidden(true)
        this.props.getBlogs()
    }
    render() { 
      const {loading} = this.props
      if(loading){
         return (
           <View style={styles.container}>
              <ActivityIndicator   style={[styles.spinner]} color="#FF912C"  size="large"/>
           </View>
         )
        }
       return (
            <View>

            </View>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center'
    },
    spinner:{
      alignSelf:'center',
      color:"#FF912C",
    }
});
 

function mapStateToProps(state) {
    return {
      blogs: state.blogs.blogs,
      loading:state.blogs.loading,
      error:state.blogs.error,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getBlogs:()=>{
        dispatch(getBlogs())
      },
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Activity)