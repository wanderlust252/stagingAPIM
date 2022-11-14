import { ChevronRight, ExpandMore } from '@mui/icons-material';
import { TreeItem } from '@mui/lab';
import { colors } from '@mui/material';
import { Form, Stack } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { renderTitle, TreeViewStyled } from '../../styles';

const TreeReferral = () => {
  const { t } = useTranslation();

  return (
    <Stack className={'p-3'} direction={'vertical'} gap={3}>
      <Form.Control placeholder={`${t('agents.agents_tree.enter_agent_name')}`} type="text" />
      <TreeViewStyled
        defaultCollapseIcon={<ExpandMore />}
        defaultExpandIcon={<ChevronRight />}
        sx={{ height: 500, flexGrow: 1, maxWidth: '100%', overflowY: 'auto' }}>
        <TreeItem nodeId="1" label={renderTitle({ role: 'MA', bgColor: colors.blue[500], name: 'kkang' })}>
          <TreeItem nodeId="2" label={renderTitle({ role: 'A', bgColor: colors.yellow[500], name: 'kkang2' })} />
        </TreeItem>
        <TreeItem nodeId="5" label={renderTitle({ role: 'MA', bgColor: colors.blue[500], name: 'kkang' })}>
          <TreeItem nodeId="10" label={renderTitle({ role: 'A', bgColor: colors.yellow[500], name: 'kkang2' })}>
            <TreeItem nodeId="6" label={renderTitle({ role: 'B', bgColor: colors.green[500], name: 'kkang2' })}>
              <TreeItem nodeId="8" label={renderTitle({ role: 'C', bgColor: colors.red[500], name: 'kkang' })} />
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeViewStyled>
    </Stack>
  );
};

export default TreeReferral;
