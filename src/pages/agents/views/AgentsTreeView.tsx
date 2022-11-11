import React from 'react';
import { Col, Container, Form, Row, Stack } from 'react-bootstrap';

import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { TreeItem, TreeView } from '@mui/lab';
import { ChevronRight, ExpandMore } from '@mui/icons-material';
import { Typography, styled as styleMUI, colors } from '@mui/material';

const SpanStyled = styled.span<{ bgColor: string }>`
  display: inline-block;
  color: white;
  padding: 0.1rem 0.5rem;
  background-color: ${(props) => props.bgColor};
  margin-right: 0.3rem;
`;

const renderTitle = ({ role, bgColor, name }: { role: string; bgColor: string; name: string }) => (
  <div className="d-flex">
    <SpanStyled bgColor={bgColor}>{role}</SpanStyled>
    {name}
  </div>
);

const Wrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const TreeViewStyled = styled(TreeView)`
  &&& {
    .MuiTreeItem-content {
      .MuiTreeItem-label {
        font-size: 1.1rem;
        padding: 0.5rem 0.1rem;
      }
    }
  }
`;

const Title = styleMUI(Typography)(
  ({ theme }) => `
     background-color: ${theme.colors.info.dark};
     color: white;
     padding: ${theme.spacing(1, 1)};
     border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-size: ${theme.typography.pxToRem(20)}
`,
);

const AgentsTreeView = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className={'p-5'}>
      <Row className={'g-4'}>
        <Col xs={12} md={6}>
          <Title variant={'h5'}>에이전트 트리뷰</Title>
          <Wrapper>
            <Stack className={'p-3'} direction={'vertical'} gap={3}>
              <Form.Control placeholder={`${t('agents.agents_tree.enter_agent_name')}`} type="text" />
              <TreeViewStyled
                defaultCollapseIcon={<ExpandMore />}
                defaultExpandIcon={<ChevronRight />}
                sx={{ height: 500, flexGrow: 1, maxWidth: '100%', overflowY: 'auto' }}>
                <TreeItem nodeId="1" label={renderTitle({ role: 'MA', bgColor: colors.blue[500], name: 'kkang' })}>
                  <TreeItem
                    nodeId="2"
                    label={renderTitle({ role: 'A', bgColor: colors.yellow[500], name: 'kkang2' })}
                  />
                </TreeItem>
                <TreeItem nodeId="5" label={renderTitle({ role: 'MA', bgColor: colors.blue[500], name: 'kkang' })}>
                  <TreeItem nodeId="10" label={renderTitle({ role: 'A', bgColor: colors.yellow[500], name: 'kkang2' })}>
                    <TreeItem nodeId="6" label={renderTitle({ role: 'B', bgColor: colors.green[500], name: 'kkang2' })}>
                      <TreeItem
                        nodeId="8"
                        label={renderTitle({ role: 'C', bgColor: colors.red[500], name: 'kkang' })}
                      />
                    </TreeItem>
                  </TreeItem>
                </TreeItem>
              </TreeViewStyled>
            </Stack>
          </Wrapper>
        </Col>
        <Col xs={12} md={6}>
          <Wrapper></Wrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default AgentsTreeView;
