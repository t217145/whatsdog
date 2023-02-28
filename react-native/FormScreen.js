import * as React from 'react';
import { Alert, View, Button, KeyboardAvoidingView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './CustomStyle';
import t from 'tcomb-form-native';

const url = "http://lunchapps-api.azurewebsites.net/api/restaurants/";
const Form = t.form.Form;

const Restaurant = t.struct({
  rId: t.Number,
  rName: t.String,
  rAddr: t.String,
  rating: t.Number,
});

const options = {
  fields: {
    rId: {
      nullOption: 0,
      hidden: true
    },
    rName: { 
      label: 'Name', 
      error: "Name must be provided!",
    },
    rAddr: { 
      label: 'Address',  
      error: "Address must be provided!",
    },
    rating: { label: 'Rating', },
  },
};

let sendForm = (value, isNew) => {
  var destUrl = isNew ? url : url + value.rId;
  
  console.log("body:" + JSON.stringify(value));
  console.log("method: " + (isNew ? 'POST' : 'PUT'));
  console.log("url: " + destUrl);

  fetch(destUrl,{
    method: isNew ? 'POST' : 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value)
  }).then((response) => {
    if(response.ok){
      Alert.alert("Success");
    } else {
      Alert.alert("Failed");
    }
  })
};

export default function FormScreen({ navigation, route }) { 
  const [btnTxt, setBtnTxt] = React.useState("Update");
  const [isNew, setIsNew] = React.useState(false);

  React.useEffect(() => {
    if(route.params?.isNew){
      navigation.setOptions({ title: 'Add New Restaurant' });
      setBtnTxt("Add New");
      setIsNew(true);
    }
  }); 

  let formObj;
  if(route.params?.obj == null){
    formObj = {
            rId: 0,
            rName: "",
            rAddr: "",
            ratingId: null,
          };
  } else {
    formObj = route.params?.obj;
  }

  return (
    <KeyboardAvoidingView style={styles.formStyle} behavior="padding" enabled keyboardVerticalOffset={100}>
	    <ScrollView>
        <Form 
          value={formObj}
          ref={c => (this._form = c)}
          type={Restaurant}
          options={options}  />
        <View style={styles.btnContainer}>
          <Button title={btnTxt}
            style={styles.button}
            onPress={()=>{sendForm(this._form.getValue(), isNew);}} />
          <Button title="Back"
            onPress={() => {
              navigation.navigate('List', {isRefresh: route.params?.isRefresh});
            }} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}