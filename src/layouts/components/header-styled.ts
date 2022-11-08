import styled from 'styled-components';
import { Space, SpaceProps } from 'antd';
import { BREAK_POINTS, COLORS } from '@/global-styles';

export const StyledBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;

  &:hover {
    color: blue;
  }
`;

export const Text = styled.div<{ bold?: boolean; fontSize: string; color?: string }>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => (props.bold ? 700 : 500)};
  line-height: 1.4;
  color: ${(props) => props.color};
`;

export const Menu = styled(Space)<SpaceProps>`
  width: 100%;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${COLORS.grey_2};
`;

export const MenuItem = styled(Space)<SpaceProps>`
  width: 100%;
  cursor: pointer;
  padding: 1rem;
  border-radius: 4px;
  &:hover {
    color: ${COLORS.blue};
    background-color: rgb(242, 243, 255);
  }
`;

export const Logout = styled(MenuItem)`
  color: ${COLORS.blue};
  justify-content: center;
  font-weight: 700;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
  position: static;
  height: 80px;
  background-color: white;
  @media screen and (min-width: ${BREAK_POINTS.md}) {
    padding-right: 5rem;
  } ;
`;
