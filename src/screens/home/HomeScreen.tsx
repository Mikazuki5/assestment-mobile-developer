import {useIsFocused} from '@react-navigation/native';
import {Layout, Loading, Modalize} from 'components';
import {useGetJokeListCategories} from 'hooks/useGetJokeListCategories';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Config from 'react-native-config';
import ListCategoriesComponent from './components/ListCategoriesComponent';

const HomeScreen = () => {
  const isFocussed = useIsFocused();

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectedAlias, setSelectedAlias] = useState<string | null>(null);

  const handleSelect = (alias: string) => {
    setSelectedAlias(prev => (prev === alias ? null : alias));
    setIsOpenModal(!isOpenModal);
  };

  const {
    data,
    isFetching: isLoading,
    refetch: refetchListCategories,
  } = useGetJokeListCategories({
    isFocused: isFocussed,
  });

  return (
    <Layout bgColors="#F4F5F6">
      <View style={styles.Container}>
        <Text style={styles.titleWrapper}>{Config.ASSESTMENT_FROM}</Text>
        <ListCategoriesComponent
          data={data}
          selectedAlias={selectedAlias ?? ''}
          handleSelect={handleSelect}
          onRefresh={() => refetchListCategories()}
          isLoading={isLoading}
        />
      </View>
      <Modalize
        visible={isOpenModal}
        onClose={() => {
          setIsOpenModal(!isOpenModal);
          setSelectedAlias('');
        }}
        renderComponent={
          <View>
            <Text>Test</Text>
          </View>
        }
      />
      <Loading isVisible={isLoading} />
    </Layout>
  );
};

export default HomeScreen;

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginLeft: 19,
    marginRight: 18,
  },
  titleWrapper: {
    color: '#151012',
    fontFamily: 'Nunito Sans',
    fontWeight: '800',
    fontSize: 18,
    textAlign: 'center',
  },
});
