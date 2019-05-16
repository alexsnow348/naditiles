import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Button } from 'react-native-elements';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Record',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */
           <Button
            title="Add Transcation"
            type="outline"
            buttonStyle={{width:"50%", margin:25, justifyContent: "center",
    alignItems: "center"}}
            />


        }


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
