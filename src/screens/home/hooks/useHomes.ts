/* eslint-disable react-hooks/exhaustive-deps */
import { useIsFocused } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';
import { useGetDetailListByCategories } from 'hooks/useGetDetailJokeListByCategories';
import { useGetJokeListCategories } from 'hooks/useGetJokeListCategories';
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

export const useHome = () => {
  const isFocussed = useIsFocused();
  const queryClient = useQueryClient();

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectedAlias, setSelectedAlias] = useState<string | null>(null);

  const [key, setKey] = useState<number>(0);
  const [amount, setAmount] = useState<number>(2);

  const [isFirstList, setIsFirstList] = useState<boolean>(false);


  const handleSelect = (alias: string, index: number) => {
    setSelectedAlias(prev => (prev === alias ? null : alias));
    setIsOpenModal(!isOpenModal);
    setKey(key + 1);
    setIsFirstList(index === 0 ? true : false);
  };

  const {
    data,
    isFetching: isLoading,
    refetch: refetchListCategories,
  } = useGetJokeListCategories({
    isFocused: isFocussed,
  });

  const {
    data: dataDetailCategories,
    isFetching: isLoadingFetchDetailCategories,
    refetch: refetchGetDetail,
    isError,
    error,
  } = useGetDetailListByCategories({
    amount: amount,
    categories: selectedAlias ?? '',
    isFocused: !!selectedAlias,
  });

  useEffect(() => {
    if (isError && error.response?.data.message) {
      const errMessage = error.response?.data.message;

      Alert.alert(errMessage);
      setSelectedAlias(null);
      setIsOpenModal(false);
      queryClient.removeQueries({queryKey: ['useGetDetailListByCategories']});
    }
  }, [isError, error]);

  return {
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
    queryClient
  };
};
