/* eslint-disable react-native/no-inline-styles */
import {
  Animated,
  FlatList,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Icon} from 'components';
import {
  IResponseApiJokeListCategories,
  IValuesList,
} from 'interfaces/IResponseJokeListCategories';

const ListCategoriesComponent = ({
  data,
  selectedAlias,
  handleSelect,
  onRefresh,
  isLoading,
}: {
  data: IResponseApiJokeListCategories | undefined;
  selectedAlias: string;
  handleSelect: (values: string, index: number) => void;
  onRefresh: () => void;
  isLoading: boolean;
}) => {
  return (
    <FlatList
      data={data?.categoryAliases || []}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={{paddingHorizontal: 2, paddingBottom: 10}}
      renderItem={({item, index}) => (
        <RenderList
          item={item}
          index={index}
          itemSelected={selectedAlias}
          handleSelectAlias={handleSelect}
        />
      )}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={isLoading} />
      }
    />
  );
};

const RenderList = ({
  item,
  index,
  itemSelected,
  handleSelectAlias,
}: {
  item: IValuesList;
  index: number;
  itemSelected: string;
  handleSelectAlias: (values: string, index: number) => void;
}) => {
  const isSelected = itemSelected === item.alias;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeaderWrapper}>
        <View
          style={[
            styles.cardHeaderItemsWrapper,
            {
              flex: 0,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            },
          ]}>
          <Text style={styles.cardHeaderItemsValues}>{index + 1}</Text>
        </View>
        <View style={styles.cardHeaderItemsWrapper}>
          <Text style={styles.cardHeaderItemsTitle}>{item.resolved}</Text>
          <Text style={styles.cardHeaderItemsValues}>{item.alias}</Text>
        </View>
       {index === 0 && (
         <View
          style={[
            styles.cardHeaderItemsWrapper,
            {
              flex: 0,
              backgroundColor: '#CEF3FF',
              minWidth: 71,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 16,
              marginRight: 9,
            },
          ]}>
          <Text style={[styles.cardHeaderItemsValues, {color: '#008FC7'}]}>
            Top
          </Text>
        </View>
       )}
        <Pressable
          style={[
            styles.cardHeaderItemsWrapper,
            {flex: 0, justifyContent: 'center'},
          ]}
          onPress={() => handleSelectAlias(item.alias, index)}>
          <Animated.View
            style={{
              transform: [{rotate: isSelected ? '90deg' : '0deg'}],
            }}>
            <Icon name="chevronRight" />
          </Animated.View>
        </Pressable>
      </View>
    </View>
  );
};

export default ListCategoriesComponent;

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
  },
});
