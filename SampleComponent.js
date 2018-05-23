/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import CourseItem from "../Components/CourseItem";
import data from "../courseInformation.json";

type Props = {};
export default class SampleComponent.js extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      classData: "Put your data here."
    }
    //In the constructor, you can set state, which stores data that can be used in your component.
  }


  render() {
    //In the render, you can log any variables to your console for debugging.
    console.log(this.state.classData);
    //You can also declare variables that will be used in your app.
    var sampleVar = 5;
    return (
      // In the return, you show what will be displayed on the page. Everything gets wrapped up in View tags,
      // which are similar to divs in HTML. Text tags and components can be displayed here as well.
      <View style={styles.container}>
        <Text> This is a sample component. </Text>
        <CourseItem />
      </View>
    );
  }
}

//Here, we can add styling.
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
