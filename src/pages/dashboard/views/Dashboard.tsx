import { Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import EuroIcon from '@mui/icons-material/Euro';
import InfoIcon from '@mui/icons-material/Info';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupsIcon from '@mui/icons-material/Groups';

import CardItem from '../components/CardItem';

interface ICard {
  title: string;
  statistics: string;
  subTitle: string;
  icon: JSX.Element;
}

export default function Dashboard() {
  // const { data } = useDashboardQuery('https://jsonplaceholder.typicode.com/todos');
  const { t } = useTranslation();
  const List: ICard[] = [
    {
      title: `${t('dashboard.holding_points')}`,
      statistics: '0 POINT',
      subTitle: `${t('dashboard.holding_points')}`,
      icon: <CurrencyRubleIcon />,
    },
    {
      title: `${t('dashboard.cache_points')}`,
      statistics: '0 KRW',
      subTitle: `${t('dashboard.cache_points')}`,
      icon: <EuroIcon />,
    },
    {
      title: `${t('dashboard.number_users')}`,
      statistics: `0 ${t('common.number')}`,
      subTitle: `${t('dashboard.number_users')}`,
      icon: <InfoIcon />,
    },
    {
      title: `${t('dashboard.number_vendors_games')}`,
      statistics: '49 / 4,568',
      subTitle: `${t('dashboard.number_vendors_games')}`,
      icon: <CurrencyRubleIcon />,
    },
    {
      title: `${t('dashboard.retained_points')}`,
      statistics: '0 POINT',
      subTitle: `${t('dashboard.retained_points')}`,
      icon: <EuroIcon />,
    },
    {
      title: `${t('dashboard.retained_cache')}`,
      statistics: '0 KRW',
      subTitle: `${t('dashboard.retained_cache')}`,
      icon: <CurrencyRubleIcon />,
    },
    {
      title: `${t('dashboard.number_lower_users')}`,
      statistics: `0 ${t('common.number')}`,
      subTitle: `${t('dashboard.number_lower_users')}`,
      icon: <PeopleAltIcon />,
    },
    {
      title: `${t('dashboard.number_lower_agents')}`,
      statistics: `24 ${t('common.number')}`,
      subTitle: `${t('dashboard.number_lower_agents')}`,
      icon: <GroupsIcon />,
    },
  ];

  return (
    <Stack direction={'column'} spacing={0.2}>
      <Typography className="title" variant="h3">
        {`${t('dashboard.title')}`}
      </Typography>
      <Grid columnSpacing={1.2} rowSpacing={2} container>
        {List.map((item, idx) => (
          <Grid item xs={12} md={3} key={idx}>
            <CardItem {...item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
