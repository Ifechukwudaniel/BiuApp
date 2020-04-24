import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { BlogCard } from './extra/card-component';
import Header from '../Header';
import { getBlogs } from '../../Redux/Actions/blogs';
import {connect} from 'react-redux'
import ContentLoader,{Facebook,Rect} from 'react-content-loader/native'
import BlogLoader from './extra/BlogLoader';
 
class Blog extends Component {

    UNSAFE_componentWillMount(){
        StatusBar.setHidden(true)
        this.props.getBlogs()
        console.log(this.props.blogs)
    }
    render() { 
      const {loading} = this.props
      if(loading) {
        return (
          <>
          <Header screenName="Blogs"  onBackPress={()=>this.props.navigation.navigate('Home')}/>
             <BlogLoader/>
             <BlogLoader/>
             <BlogLoader/>
          </>
        )
      }
        return (
            <>
            <Header screenName="Blogs"  onBackPress={()=>this.props.navigation.navigate('Home')}/>
            <ScrollView style={styles.container}>
               {this.props.blogs.map((item)=>{
                  console.log(item.content)
                 return(
                 <BlogCard
                    onClick= {this.handlePress}
                    key={item._id}
                    date= {item.timeStamp}
                    tag= {item.tag}
                    item={item}
                    img={item.image}
                    title={item.title}
                />
                 )
               }
               )}
            </ScrollView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
  export default connect(mapStateToProps, mapDispatchToProps)(Blog)