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
  View
} from 'react-native';


type Props = {};
export default class CoursePage extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {/* Can you display course ID, course name, and course description here? */}
      <Text style={styles.courseID}>
          {this.props.courseID}
        </Text>
        <Text style={styles.courseName}>
          {this.props.courseName}
        </Text>
        <Text style={styles.courseInfo}>
          {this.props.courseInfo}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop:10,
  },
  courseID: {
    fontSize: 10,
    paddingBottom: 2,
  },
  courseName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  courseInfo: {
    marginTop:10,
    lineHeight: 20,
  }
});
