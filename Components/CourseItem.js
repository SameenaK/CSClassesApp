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
  TouchableHighlight,
} from 'react-native';
import { Actions } from "react-native-router-flux";

type Props = {};
export default class CourseItem extends Component<Props> {

  goToCoursePage() {
    Actions.CoursePage({
      courseID: "Put your code here",
      courseInfo: "Put your code here",
      courseName: "Put your code here"
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.goToCoursePage.bind(this)}>
          <View>
        <Text style={styles.courseID}>
          {this.props.courseID}
        </Text>
        <Text style={styles.courseName}>
          {this.props.courseName}
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
    marginHorizontal: 10,
    paddingBottom: 20,
    paddingTop:20,
    borderBottomWidth: 0.5,
    borderColor: "gray",
  },
  courseID: {
    fontSize: 10,
    paddingBottom: 4,
  },
  courseName: {
    fontSize: 16,
    fontWeight: "bold",
  }
});
