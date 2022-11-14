import { TreeView } from '@mui/lab';
import styled from 'styled-components';

export const SpanStyled = styled.span<{ bgColor: string }>`
  display: inline-block;
  color: white;
  padding: 0.1rem 0.5rem;
  background-color: ${(props) => props.bgColor};
  margin-right: 0.3rem;
`;

export const renderTitle = ({ role, bgColor, name }: { role: string; bgColor: string; name: string }) => (
  <div className="d-flex">
    <SpanStyled bgColor={bgColor}>{role}</SpanStyled>
    {name}
  </div>
);

export const TreeViewStyled = styled(TreeView)`
  &&& {
    .MuiTreeItem-content {
      .MuiTreeItem-label {
        font-size: 1.1rem;
        padding: 0.5rem 0.1rem;
      }
    }
  }
`;
