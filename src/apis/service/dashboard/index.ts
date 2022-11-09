import { QUERY_KEYS } from '@/pages/dashboard/constants';
import { useQuery } from '@tanstack/react-query';

import requestApi from '@/apis/config';
import { ResponseApi } from '@/interfaces';
import { IDashboardItem } from '@/interfaces/dashboard';

const useDashboardQuery = (url: string) => {
  return useQuery<IDashboardItem[], ResponseApi>([QUERY_KEYS.DASHBOARD], async () => {
    const { data } = await requestApi.get(url);
    return data;
  });
};

export { useDashboardQuery };
