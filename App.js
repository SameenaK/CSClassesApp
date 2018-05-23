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
import CoursePage from "./Screens/CoursePage";
import CoursePageComplete from "./Screens/CoursePageComplete"
import AllCourses from "./Screens/AllCourses";
import AllCoursesComplete from "./Screens/AllCoursesComplete";
import { Router, Scene, Actions } from "react-native-router-flux";

const AppLogo = () => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}> CS Classes App </Text>
    </View>
  );
};

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Router>
  <Scene key="root" renderTitle={() => {
    return <AppLogo />;
  }}>
    <Scene key="AllCourses" component={AllCourses} title="AllCourses" backTitle=" "/>
    <Scene key="CoursePage" component={CoursePage} title="CoursePage" backTitle=" "/>
  </Scene>
</Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  headerView: {
    alignItems: "center",
    justifyContent: "center",
  }
});
