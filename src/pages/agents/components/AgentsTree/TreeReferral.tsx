import { COLORS } from '@/global-styles';
import { DownOutlined } from '@ant-design/icons';
import { Input, Tree } from 'antd';
import { DataNode } from 'antd/es/tree';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

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
    title: renderTitle({ role: 'MA', bgColor: COLORS.orange, name: 'kka(kkang)' }),
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
  margin-top: 1rem;
  padding: 1rem 1.5rem;
  .antd-input {
    border-radius: 4px;
  }
  .content {
    margin-top: 2rem;
  }
`;

const TreeReferral = () => {
  const { t } = useTranslation();

  return (
    <WrapperStyled>
      <Input size={'middle'} placeholder={`${t('agents.agents_tree.enter_agent_name')}`} />
      <div className={'content'}>
        <Tree switcherIcon={<DownOutlined />} defaultExpandedKeys={['0-0-0']} treeData={treeData} />
      </div>
    </WrapperStyled>
  );
};
export default TreeReferral;
