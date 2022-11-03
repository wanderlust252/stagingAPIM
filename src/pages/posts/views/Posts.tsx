import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const Posts: React.FC = () => {
  const { data } = useQuery<any[]>(['todos', { _limit: 10, _page: 10 }]);
  const queryClient = useQueryClient();
  queryClient.setQueryData(['keys'], ['todos', { _limit: 10, _page: 10 }]);

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

  return (
    <div>
      {/*<button onClick={() => mutate({ data: 'ok', key: 'ok' })}>Create</button>*/}

      <ul>
        {data?.map((x: any) => {
          return <li key={x.id}>{x.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Posts;
