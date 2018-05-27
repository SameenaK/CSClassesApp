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
  TouchableHighlight,
} from 'react-native';
import CourseItem from "../Components/CourseItem";
import CourseItemComplete from "../Components/CourseItemComplete"
import data from "../courseInformation.json";

type Props = {};
export default class AllCourses extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "#F5FCFF",
    }
    this.changeColor = this.changeColor.bind(this);
  }

  renderCourseItem(item) {
    return(<CourseItem
      courseID={item.courseID}
      courseName={item.courseName}
      courseInfo={item.courseInfo}
      />);
  }

  changeColor() {
    //Fill in the blank here with code to the change the state of backgroundColor.
    //This function is called in Line 51, when the "Click here..." text is pressed.
  }

  render() {
    console.log(data);
    return (
      <View style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>
        <FlatList
           data={data["classData"]}
           renderItem={({item}) => this.renderCourseItem(item)}
         />
         <TouchableHighlight onPress={this.changeColor}>
           <View style={styles.button}>
             <Text style={styles.buttonText}>
               Click here to change the background color.
             </Text>
           </View>
         </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginTop: -100,
    alignItems: "center",
  },
  buttonText: {
    color: "blue"
  }
});
