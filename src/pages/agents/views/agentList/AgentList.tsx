import React from 'react';
import { Breadcrumb } from 'antd';
import '../../styles/agentList.scss';
import InputField from '@/components/FormField/InputField';
import { SearchOutlined } from '@ant-design/icons';
import { GridExample } from '@/components/table/TableComponent';

const List: React.FC = ({}) => {
  const renderbreadcum = (
    <Breadcrumb>
      <Breadcrumb.Item>
        <a href="/">Home</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>에이전트 관리</Breadcrumb.Item>
      <Breadcrumb.Item>에이전트 목록</Breadcrumb.Item>
    </Breadcrumb>
  );
  return (
    <div className="agent__list-container">
      <div className="agent__list-container_header">
        <h1 className="agent__list-container_header-title">에이전트 목록</h1>
        {renderbreadcum}
      </div>
      <div className="agent__list-container_content">
        <div style={{ backgroundColor: '#ccc', padding: '10px' }}>
          <p>에이전트 목록</p>
        </div>
        <div className="agent__list-container_content_table">
          <div className="agent__list-container_content-search">
            <InputField name="search-agent" placeholder="검색어를 입력하세요." icon={<SearchOutlined />} size="large" />
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
