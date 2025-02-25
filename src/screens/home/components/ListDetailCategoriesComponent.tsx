/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  IResponseJokeListByCategories,
  IValuesListByCategories,
} from 'interfaces/IResponseJokeListCategories';

const ListDetailCategories = ({
  data,
  handleSelect,
  isFirstList,
  handlePressPagination,
  handlePressToTop,
  amount,
  isLoading
}: {
  isFirstList: boolean,
  data: IResponseJokeListByCategories | undefined;
  handleSelect: (values: string) => void;
  handlePressPagination: () => void;
  handlePressToTop: () => void;
  amount: number;
  isLoading: boolean;
}) => {
  if (isLoading) {
    return (
      <ActivityIndicator />
    );
  }
  return (
    <FlatList
      data={data?.jokes || []}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={{paddingHorizontal: 2, paddingBottom: 10}}
      renderItem={({item, index}) => (
        <RenderList
          item={item}
          index={index}
          handleSelectAlias={handleSelect}
        />
      )}
      ListFooterComponent={
        <>
          {amount !== 6 && (
            <TouchableOpacity style={[styles.btnWrapper]} onPress={handlePressPagination}>
              <Text style={styles.textBtnWrapper}>Add more data</Text>
            </TouchableOpacity>
          )}
          {!isFirstList && (
            <TouchableOpacity style={[styles.btnWrapper, {marginTop: 6, backgroundColor: '#FFE2E4'}]} onPress={handlePressToTop}>
              <Text style={[styles.textBtnWrapper, {color: '#A31920'}]}>Go to Top</Text>
            </TouchableOpacity>
          )}
        </>
      }
    />
  );
};

const RenderList = ({
  item,
  handleSelectAlias,
}: {
  item: IValuesListByCategories;
  index: number;
  handleSelectAlias: (values: string) => void;
}) => {
  return (
    <Pressable style={styles.cardContainer} onPress={() => handleSelectAlias(item.joke)}>
      <View style={styles.cardHeaderWrapper}>
        <View style={styles.cardHeaderItemsWrapper}>
          <Text style={styles.cardHeaderItemsTitle}>{item.category}</Text>
          <Text style={styles.cardHeaderItemsValues}>{item.joke}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ListDetailCategories;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 1,
    backgroundColor: 'white',
    paddingHorizontal: 6,
    paddingTop: 6,
    paddingBottom: 10,
    borderRadius: 12,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  cardHeaderWrapper: {
    flexDirection: 'row',
    width: '100%',
  },
  cardHeaderItemsWrapper: {
    flex: 1,
  },
  cardHeaderItemsTitle: {
    fontSize: 11,
    fontWeight: '400',
    color: '#919DA1',
  },
  cardHeaderItemsValues: {
    fontSize: 12,
    fontWeight: '700',
    color: '#292E30',
    width: '95%',
  },
  btnWrapper: {
    backgroundColor: '#B6EDFF',
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 10,
  },
  textBtnWrapper: {
    color: '#008BBA',
    fontSize: 16,
    fontWeight: '700',
  },
});
