import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import {axiosJokeIntance} from 'core/axios/axiosIntance';
import {APIError} from 'interfaces/IResponseApi';
import {IResponseJokeListByCategories} from 'interfaces/IResponseJokeListCategories';

const GetDetailListByCategories = async (
  params: {amount: number},
  categories: string,
) => {
  const {data} = await axiosJokeIntance.get(`/joke/${categories}?type=single&amount=${params.amount}`);
  return data;
};

export const useGetDetailListByCategories = ({
  options,
  isFocused,
  amount,
  categories,
}: {
  categories: string;
  amount: number;
  isFocused: boolean;
  options?: UseQueryOptions<IResponseJokeListByCategories, APIError>;
}) => {
  return useQuery({
    queryKey: ['useGetDetailListByCategories'],
    queryFn: () => GetDetailListByCategories({amount}, categories),
    enabled: isFocused,
    subscribed: isFocused,
    ...options,
  });
};
