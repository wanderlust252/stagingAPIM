import { useContext } from 'react';

import { ListSubheader, alpha, Box, List, styled, Button, ListItem } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { SidebarContext } from 'src/contexts/SidebarContext';

import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import SummarizeIcon from '@mui/icons-material/Summarize';
import HandymanIcon from '@mui/icons-material/Handyman';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import HistoryIcon from '@mui/icons-material/History';
import ErrorIcon from '@mui/icons-material/Error';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`,
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create(['transform', 'opacity'])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`,
);

const TextTile = styled('div')({
  marginBottom: 0,
  marginTop: 5,
  marginLeft: 5,
});
const MenuTile = styled('div')({
  display: 'flex',
});

const TextButton = styled('div')({
  marginLeft: 15,
});

function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);

  return (
    <>
      <List component="div">
        <SubMenuWrapper>
          <List component="div">
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeSidebar}
                to="/management/history"
                startIcon={<SettingsIcon />}
              >
                설정 및 정보
              </Button>
            </ListItem>
          </List>
        </SubMenuWrapper>
      </List>

      <MenuWrapper>
        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/history"
                  startIcon={<AnalyticsIcon />}
                >
                  대시보드
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/history"
                  startIcon={<DoDisturbAltIcon />}
                >
                  최대 베팅금 제한
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              <MenuTile>
                <HandymanIcon />
                <TextTile>에이전트 관리</TextTile>
              </MenuTile>
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button disableRipple component={RouterLink} onClick={closeSidebar} to="/management/history">
                  <TextButton>에이전트 트리뷰</TextButton>
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button disableRipple component={RouterLink} onClick={closeSidebar} to="/management/history">
                  <TextButton> 에이전트 목록</TextButton>
                </Button>
              </ListItem>

              <ListItem component="div">
                <Button disableRipple component={RouterLink} onClick={closeSidebar} to="/management/history">
                  <TextButton> 포인트 트랜잭션 내역</TextButton>
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button disableRipple component={RouterLink} onClick={closeSidebar} to="/management/history">
                  <TextButton> 캐쉬 트랜잭션 내역</TextButton>
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              <MenuTile>
                <SupervisedUserCircleIcon />
                <TextTile>유저 관리</TextTile>
              </MenuTile>
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button disableRipple component={RouterLink} onClick={closeSidebar} to="/management/history">
                  유저 목록
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button disableRipple component={RouterLink} onClick={closeSidebar} to="/management/history">
                  트랜잭션 내역
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              <MenuTile>
                <ManageSearchIcon />
                <TextTile>에이전트 보유금 관리</TextTile>
              </MenuTile>
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button disableRipple component={RouterLink} onClick={closeSidebar} to="/management/history">
                  신청 처리 내역
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button disableRipple component={RouterLink} onClick={closeSidebar} to="/management/history">
                  포인트 입금 신청
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button disableRipple component={RouterLink} onClick={closeSidebar} to="/management/history">
                  캐쉬 출금 신청
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/transactions"
                  startIcon={<HistoryIcon />}
                >
                  게임 내역
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              <MenuTile>
                <SummarizeIcon />
                <TextTile>포인트 리포트</TextTile>
              </MenuTile>
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/history"
                  startIcon={<BallotTwoToneIcon />}
                >
                  일자별
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/history"
                  startIcon={<ErrorIcon />}
                >
                  벤더
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              <MenuTile>
                <HandymanIcon />
                <TextTile>API</TextTile>
              </MenuTile>
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button disableRipple component={RouterLink} onClick={closeSidebar} to="/management/history">
                  기본 API (트랜스퍼)
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button disableRipple component={RouterLink} onClick={closeSidebar} to="/management/history">
                  콜백 API (심리스)
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button disableRipple component={RouterLink} onClick={closeSidebar} to="/management/history">
                  콜백 API 테스트
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button disableRipple component={RouterLink} onClick={closeSidebar} to="/management/history">
                  콜백 API 테스트 로그
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button disableRipple component={RouterLink} onClick={closeSidebar} to="/management/history">
                  API 에러 로그
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/history"
                  startIcon={<NotificationsIcon />}
                >
                  알림
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/history"
                  startIcon={<LogoutIcon />}
                >
                  로그아웃
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
