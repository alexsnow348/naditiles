import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Button } from 'react-native-elements';
import { DataTable } from 'react-native-paper';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Record',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */
           [
             <Button
              title="Add Transcation"
              type="outline"
              buttonStyle={{width:"50%", margin:25, justifyContent: "center",
              alignItems: "center"}}
              />,
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Dessert</DataTable.Title>
                  <DataTable.Title numeric>Calories</DataTable.Title>
                  <DataTable.Title numeric>Fat</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                  <DataTable.Cell numeric>159</DataTable.Cell>
                  <DataTable.Cell numeric>6.0</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell >Ice cream sandwich</DataTable.Cell>
                  <DataTable.Cell numeric>237</DataTable.Cell>
                  <DataTable.Cell numeric>8.0</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Pagination
                  page={1}
                  numberOfPages={3}
                  onPageChange={(page) => { console.log(page); }}
                  label="1-2 of 6"
                />
              </DataTable>
           ]









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
