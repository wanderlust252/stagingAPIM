import React, { useCallback } from 'react';
import BreadcrumbsComponent from '@/components/Breadcrumbs/Breadcrumbs';
import SearchIcon from '@mui/icons-material/Search';
import './styles/agentList.scss';
import InputField from '@/components/FormFiled/InputField';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IContentBreadcrumbs } from '@/interfaces';
import ComponentTable from '@/components/Table';
export default function AgentListPage() {
  const { t } = useTranslation();
  const [rowData, setRowData] = React.useState([]);
  const { control } = useForm();
  const breadcrumbs: IContentBreadcrumbs[] = [
    {
      color: 'inherit',
      underline: 'hover',
      href: '/',
      name: t('agent-management.table.home'),
    },
    {
      color: 'inherit',
      underline: 'hover',
      href: '#',
      name: t('agent-management.table.agent-management'),
    },
    {
      color: 'inherit',
      underline: 'hover',
      href: '/agent/list',
      name: t('agent-management.table.agent-list'),
    },
  ];
  const columnDefs = [
    { field: 'athlete', headerName: `${t('agent-management.table.athlete')}` },
    { field: 'age', headerName: `${t('agent-management.table.age')}` },
    { field: 'country', headerName: `${t('agent-management.table.country')}` },
    { field: 'year', headerName: `${t('agent-management.table.year')}` },
    { field: 'date', headerName: `${t('agent-management.table.date')}` },
    { field: 'sports', headerName: `${t('agent-management.table.sports')}` },
    { field: 'gold', headerName: `${t('agent-management.table.gold')}` },
    { field: 'silver', headerName: `${t('agent-management.table.silver')}` },
    { field: 'bronze', headerName: `${t('agent-management.table.bronze')}` },
    { field: 'gun', headerName: `${t('agent-management.table.gun')}` },
  ];
  const onGridReady = useCallback(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => {
        const newData = data?.map((item: any) => {
          return {
            athlete: item.athlete,
            age: item.age,
            country: item.country,
            year: item.year,
            date: item.date,
            sports: item.sport,
            gold: item.gold,
            silver: item.silver,
            bronze: item.bronze,
            gun: item.total,
          };
        });
        setRowData(newData);
      });
  }, []);

  return (
    <div className="agent__list-container">
      <div className="agent__list-container_header">
        <h1 className="agent__list-container_header-title">{t('agent-management.table.agent-management')}</h1>
        <BreadcrumbsComponent content={breadcrumbs} />
      </div>
      <div className="agent__list-container_content">
        <div style={{ backgroundColor: '#ccc', padding: '10px', borderRadius: '5px' }}>
          <p>{t('agent-management.table.agent-list')}</p>
        </div>
        <div className="agent__list-container_content_table">
          <div className="agent__list-container_content-search">
            <InputField
              label={t('agent-management.table.searchLabel')}
              name="search-agent"
              type="text"
              placeholder={t('agent-management.table.search')}
              icon={<SearchIcon />}
              control={control}
            />
          </div>
          <div style={{ height: '61vh' }}>
            <ComponentTable rowData={rowData} columnDefs={columnDefs} onGridReady={onGridReady} />
          </div>
        </div>
      </div>
    </div>
  );
}
