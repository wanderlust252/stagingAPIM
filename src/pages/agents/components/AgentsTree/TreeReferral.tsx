import React from 'react';
import { Input, Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { DataNode, TreeProps } from 'antd/es/tree';
import styled from 'styled-components';
import { COLORS } from '@/global-styles';

const SpanStyled = styled.span<{ bgColor: string }>`
  display: block;
  color: white;
  padding: 0.1rem 0.5rem;
  background-color: ${(props) => props.bgColor};
  margin-right: 0.3rem;
`;

const renderTitle = ({ role, bgColor, name }: { role: string; bgColor: string; name: string }) => (
  <div className="display-flex-center">
    <SpanStyled bgColor={bgColor}>{role}</SpanStyled>
    {name}
  </div>
);

const treeData: DataNode[] = [
  {
    title: renderTitle({ role: 'MA', bgColor: COLORS.orange, name: '깡본사(kkang)' }),
    key: '0-0',
    children: [
      {
        title: renderTitle({ role: 'A', bgColor: COLORS.yellow, name: 'hi (kkang2)' }),
        key: '0-0-0',
        children: [
          {
            title: renderTitle({ role: 'B', bgColor: COLORS.green, name: 'kkang3 (kkang3)' }),
            key: '1-0-0-1',
            children: [
              {
                title: renderTitle({ role: 'C', bgColor: COLORS.blue, name: 'kkang4' }),
                key: '1-0-0-0-1',
              },
            ],
          },
        ],
      },
    ],
  },
];

const WrapperStyled = styled.div`
  padding: 1rem 1.5rem;
  .antd-input {
    border-radius: 4px;
  }
`;

const TreeReferral = () => {
  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  return (
    <WrapperStyled>
      <Input placeholder={'에이전트명을 입력해주세요'} />
      <div className={'agent-tree__content'}>
        <Tree switcherIcon={<DownOutlined />} defaultExpandedKeys={['0-0-0']} onSelect={onSelect} treeData={treeData} />
      </div>
    </WrapperStyled>
  );
};
export default TreeReferral;
