import {useFormik} from 'formik';
import * as React from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface HomeProps {}

let object: FormValues[] = [
  {id: 1, name: 'Fish', quantity: '1kg'},
  {id: 2, name: 'Bread', quantity: '1'},
  {id: 3, name: 'Sugar', quantity: '2kg'},
  {id: 4, name: 'Yogurt', quantity: '1l'},
];

let initialValues: FormValues = {
  name: '',
  quantity: '',
};

export const Home: React.FC<HomeProps> = ({}) => {
  const [modal, setModal] = React.useState(false);
  const [data, setData] = React.useState(object);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: values => {
      let form = {
        id: data.length + 1,
        name: values.name,
        quantity: values.quantity,
      };

      let tmp_data = data;
      tmp_data.push(form);
      setData(tmp_data);
      setModal(false);
    },
  });

  const {handleChange, handleSubmit, values} = formik;

  const handleDelete = (item: FormValues) => {
    const itemIdx = data.indexOf(item);
    let tmp_data = data;
    tmp_data = tmp_data.splice(itemIdx, 1);

    setData(tmp_data);
    console.log(tmp_data);
  };
  return (
    <>
      <Modal visible={modal} animationType="slide" transparent>
        <View style={{flex: 1}}>
          <Pressable
            onPress={() => setModal(false)}
            style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}
          />
          <View style={{flex: 2, backgroundColor: '#FFF', padding: 20}}>
            <TextInput
              placeholder="Enter name"
              value={values.name}
              onChangeText={handleChange('name')}
              style={styles.input}
            />
            <TextInput
              placeholder="Enter quantiy"
              value={values.quantity}
              onChangeText={handleChange('quantity')}
              style={styles.input}
            />
            <Pressable
              onPress={() => handleSubmit()}
              style={{
                backgroundColor: '#3afb02',
                paddingHorizontal: 20,
                paddingVertical: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
              }}>
              <Text>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={{backgroundColor: '#FFF', flex: 1, paddingHorizontal: 20}}>
        <FlatList
          data={data}
          keyExtractor={item => item?.id?.toString()}
          renderItem={({item, index}) => {
            return (
              <View
                key={index}
                style={{
                  paddingVertical: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text>{item.name}</Text>
                <Text>{item.quantity}</Text>
                <Pressable
                  onPress={() => handleDelete(item)}
                  style={{backgroundColor: '#FF0000', padding: 10}}>
                  <Text>Del</Text>
                </Pressable>
              </View>
            );
          }}
        />
        <Pressable
          onPress={() => setModal(!modal)}
          style={{
            position: 'absolute',
            right: 20,
            bottom: 20,
            backgroundColor: '#3afb02',
            padding: 20,
            borderRadius: 40,
          }}>
          <Text>Add</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    height: 40,
    borderColor: '#00000066',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
});
