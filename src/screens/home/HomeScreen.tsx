import {Layout, Loading, Modalize} from 'components';
import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Config from 'react-native-config';
import ListCategoriesComponent from './components/ListCategoriesComponent';
import ListDetailCategories from './components/ListDetailCategoriesComponent';
import { useHome } from './hooks/useHomes';

const HomeScreen = () => {
  const {
    data,
    dataDetailCategories,
    isLoading,
    isLoadingFetchDetailCategories,
    refetchListCategories,
    refetchGetDetail,
    setAmount,
    isFirstList,
    amount,
    handleSelect,
    key,
    selectedAlias,
    isOpenModal,
    setIsOpenModal,
    setSelectedAlias,
    setIsFirstList,
    queryClient,
  } = useHome();

  return (
    <Layout bgColors="#F4F5F6" key={key}>
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
        visible={!isLoadingFetchDetailCategories && isOpenModal}
        onClose={() => {
          setIsOpenModal(!isOpenModal);
          setSelectedAlias(null);

          queryClient.removeQueries({queryKey: ['useGetDetailListByCategories']});
          setAmount(2);
        }}
        renderComponent={
          <ListDetailCategories
            amount={amount}
            isLoading={isLoadingFetchDetailCategories}
            isFirstList={isFirstList}
            data={dataDetailCategories}
            handleSelect={(values) => Alert.alert(values)}
            handlePressPagination={async() => {
              setAmount(amount + 2);
              setTimeout(() => {
                refetchGetDetail();
              },10);
            }}
            handlePressToTop={() => {
              setAmount(2);
              setSelectedAlias(data?.categoryAliases[0].alias ?? null);
              setIsFirstList(true);
              setTimeout(() => {
                refetchGetDetail();
              },10);
            }}
          />
        }
      />
      <Loading isVisible={isLoading || isLoadingFetchDetailCategories} />
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
