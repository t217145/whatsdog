import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { Card } from "react-native-elements";
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './CustomStyle';

export default function DrawScreen({ navigation, route }) {

  const [dataSource, setDataSource] = React.useState([]);
  const [isRefresh, setIsRefresh] = React.useState(true);

  React.useEffect(() => {
    fetch('https://lunchapps-api.azurewebsites.net/api/restaurants/draw', {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
        setDataSource(responseJson);
    })
    .catch((error) => {
        console.error(error);
    });
  }, [isRefresh]);

  return (
    <View style={styles.drawContainerCardStyle}>
      <Card
        title={dataSource.rName}
        image={require('./images/images.png')}>
        <Text style={{marginBottom: 10}}>Address : {dataSource.rAddr}</Text>
        <Text style={{marginBottom: 10}}>Rating : {dataSource.rating}</Text>
        <Button
          icon={<Icon name='reload1' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          onPress={() => (setIsRefresh(!isRefresh))}
          title='Draw Again' />
      </Card>
    </View>
  );
}