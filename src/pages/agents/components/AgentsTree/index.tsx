import React from 'react';
import { Col, Row, Typography } from 'antd';
import styled from 'styled-components';

import TreeReferral from '@/pages/agents/components/AgentsTree/TreeReferral';
import InfoDetail from '@/pages/agents/components/AgentsTree/InfoDetail';
import { COLORS } from '@/global-styles';

export interface IAgentsTreeProps {}

const { Title } = Typography;

const WrapperStyled = styled.section`
  .agent-tree {
    &__title {
      font-size: 2.4rem;
      font-weight: 500;
    }

    &__tree-box {
      background-color: white;
      padding-bottom: 3.5rem;
      overflow: hidden;
      border-radius: 4px;
    }
    &__sub-title {
      padding: 1rem 1.5rem;
      background-color: ${COLORS.light_grey};
    }
    &__content {
      margin-top: 1rem;
    }
  }
`;

const AgentsTree: React.FC<IAgentsTreeProps> = ({}) => {
  return (
    <WrapperStyled className={'agent-tree'}>
      <Title className={'agent-tree__title'} level={5}>
        에이전트 트리뷰
      </Title>
      <Row gutter={[20, 0]}>
        <Col span={12}>
          <div className={'agent-tree__tree-box'}>
            <div className="agent-tree__sub-title">에이전트 트리뷰</div>
            <TreeReferral />
          </div>
        </Col>
        <Col span={12}>
          <div className={'agent-tree__tree-box'}>
            <div className="agent-tree__sub-title">에이전트 상세정보</div>
            <InfoDetail />
          </div>
        </Col>
      </Row>
    </WrapperStyled>
  );
};
export default AgentsTree;
