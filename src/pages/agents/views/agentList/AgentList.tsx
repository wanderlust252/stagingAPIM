import React from 'react';
import { Breadcrumb } from 'antd';
import '../../styles/agentList.scss';
import InputField from '@/components/FormField/InputField';
import { SearchOutlined } from '@ant-design/icons';
import { GridExample } from '@/components/table/TableComponent';
import { useTranslation } from 'react-i18next';

const List: React.FC = ({}) => {
  const { t } = useTranslation();
  const renderbreadcum = (
    <Breadcrumb>
      <Breadcrumb.Item>
        <a href="/">{`${t('agent-management.table.home')}`}</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>{`${t('agent-management.table.agent-management')}`}</Breadcrumb.Item>
      <Breadcrumb.Item>{`${t('agent-management.table.agent-list')}`}</Breadcrumb.Item>
    </Breadcrumb>
  );
  return (
    <div className="agent__list-container">
      <div className="agent__list-container_header">
        <h1 className="agent__list-container_header-title">{`${t('agent-management.table.agent-management')}`}</h1>
        {renderbreadcum}
      </div>
      <div className="agent__list-container_content">
        <div style={{ backgroundColor: '#ccc', padding: '10px' }}>
          <p>{`${t('agent-management.table.agent-list')}`}</p>
        </div>
        <div className="agent__list-container_content_table">
          <div className="agent__list-container_content-search">
            <InputField
              name="search-agent"
              placeholder={`${t('agent-management.table.search')}`}
              icon={<SearchOutlined />}
              size="large"
            />
          </div>
          <div style={{ height: '70vh' }}>
            <GridExample />
          </div>
        </div>
      </div>
    </div>
  );
};
export default List;
