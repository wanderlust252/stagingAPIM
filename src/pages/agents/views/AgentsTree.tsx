import React, { useMemo, useState } from 'react';
import { Col, Divider, Row, Typography } from 'antd';
import styled from 'styled-components';
import loadable from '@loadable/component';

import TreeReferral from '@/pages/agents/components/AgentsTree/TreeReferral';
import InfoDetail from '@/pages/agents/components/AgentsTree/InfoDetail';
import { COLORS } from '@/global-styles';
import { TYPE_MODAL } from '@/pages/agents/model';
import { useTranslation } from 'react-i18next';

const AgentsTreeModal = loadable(() => import('@/pages/agents/components/AgentsTree/AgentsTreeModal'));

const { Title } = Typography;

const WrapperStyled = styled.section`
  .agent-tree {
    &__title {
      font-size: 2.4rem;
      font-weight: 600;
    }

    &__tree-box {
      background-color: white;
      padding-bottom: 3.5rem;
      overflow: hidden;
      border-radius: 4px;
    }
    &__sub-title {
      padding: 1rem 1.5rem;
      font-size: 1.9rem;
      font-weight: 600;
      background-color: ${COLORS.light_grey};
    }
  }
`;

const AgentsTree = ({}) => {
  const [typeModal, setTypeModal] = useState<TYPE_MODAL>(TYPE_MODAL.NONE);
  const { t } = useTranslation();
  const visible = useMemo(() => typeModal !== TYPE_MODAL.NONE, [typeModal]);

  const openModal = (type: TYPE_MODAL) => {
    if (type !== TYPE_MODAL.NONE) setTypeModal(type);
  };

  const closeModal = () => setTypeModal(TYPE_MODAL.NONE);

  return (
    <>
      <WrapperStyled className={'agent-tree'}>
        <Title className={'agent-tree__title'} level={5}>
          {`${t('agents.agents_tree.title')}`}
        </Title>
        <Row gutter={[20, 10]}>
          <Col xs={24} lg={12}>
            <div className={'agent-tree__tree-box'}>
              <div className="agent-tree__sub-title">{`${t('agents.agents_tree.sub_title.1')}`} </div>
              <TreeReferral />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={'agent-tree__tree-box'}>
              <div className="agent-tree__sub-title">{`${t('agents.agents_tree.sub_title.2')}`} </div>
              <InfoDetail openModal={openModal} />
            </div>
          </Col>
        </Row>
        <Divider />
      </WrapperStyled>
      {visible && <AgentsTreeModal visible={visible} closeModal={closeModal} type={typeModal} />}
    </>
  );
};
export default AgentsTree;
