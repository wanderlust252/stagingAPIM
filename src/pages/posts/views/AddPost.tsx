import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import requestApi from '../../../apis/config';
// import requestApi from "../../../apis/config";

const createData = async ({ newData }: any) => {
  const data = await requestApi.post('posts', newData);
  console.log(data);
};

const AddPosts: React.FC = (): JSX.Element => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation<any, any, string>(createData, {
    onSuccess: () => {
      return queryClient.invalidateQueries({
        predicate: () => {
          const [key] = queryClient.getQueryData(['keys']);
          return
        },
      }),

      },

  });

  // queryClient.setQueryData(['keys'], ['chien']);
  // const { mutate } = useMutation(fetchData, {
  //   onSuccess: () =>
  //     queryClient.invalidateQueries({
  //       predicate: () => {
  //         console.log(queryClient.getQueryData(['keys']));
  //         return true;
  //       },
  //     }),
  // });

  return <div onClick={()=>}></div>;
};

export default AddPosts;
