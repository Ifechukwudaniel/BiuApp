import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Button, Icon } from '@ui-kitten/components';
import { TouchableHighlight, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../constants/Colors";

const StarIcon = (style) => (
  <Icon {...style}  name='arrow-forward'/>
);

const styles = StyleSheet.create({
    buttonWrapper: {
      alignItems: "flex-end",
      right: 20,
      bottom: 20,
      paddingTop: 0
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
      width: 60,
      height: 60,
    },
    icon: {
      marginRight: -2,
      marginTop: -2,
      height:60
    }
  });

export default class NextArrowButton extends Component {
    render() {
      const {
       handleNextButton
      } = this.props
      return (
        <View style={styles.buttonWrapper}>
          <Button status="danger" size="large" onPress= {handleNextButton} style={[{ opacity: 1 }, styles.button]} icon={StarIcon}/>
        </View>
      );
    }
  }

NextArrowButton.propTypes = {
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func
  };