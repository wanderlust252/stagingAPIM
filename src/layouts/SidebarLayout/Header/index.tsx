import { ChangeEvent, useContext } from 'react';

import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import {
  alpha,
  Box,
  IconButton,
  lighten,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  Tooltip,
  useTheme,
} from '@mui/material';
import { SidebarContext } from 'src/contexts/SidebarContext';

import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';
import { useTranslation } from 'react-i18next';
import { LANGUAGE } from '@/interfaces/enum';
import { useAppDispatch } from '@/hooks/hooks';
import { changeLanguageInput } from '@/store/common/commonSlice';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const HeaderWrapper = styled(Box)(
  ({ theme }: any) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${alpha(theme.header.background, 0.95)};
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar.width};
            width: auto;
        }
`,
);

const HeaderText = styled('div')({
  fontSize: 24,
  marginRight: 15,
  marginTop: 0,
  marginBottom: 0,
  padding: 0,
  border: 'none',
  lineHeight: 1.35,
  fontWeight: 500,
});

const ChangeLanguage = styled(Select)`
  &&& {
    .MuiOutlinedInput-notchedOutline {
      border: none;
    }
    .MuiSelect-select {
      //padding: 0;

      border-color: transparent;

      .MuiSelect-nativeInput {
        border: none;
      }
    }
  }
  //&&&.form-select {
  //  width: 13%;
  //  border: none;
  //  padding: 0.5rem;
  //  font-size: 0.875rem;
  //  font-weight: 700;
  //  color: #6e759f;
  //  .item {
  //    font-size: 0.875rem;
  //    color: #6e759f;
  //  }
  //  &:focus {
  //    box-shadow: none;
  //  }
  //}
`;

function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const onChangeInput = (e: SelectChangeEvent<unknown>) => {
    dispatch(changeLanguageInput(e.target.value));
  };

  return (
    <HeaderWrapper
      display="flex"
      alignItems="center"
      sx={{
        boxShadow:
          theme.palette.mode === 'dark'
            ? `0 1px 0 ${alpha(
                lighten(theme.colors.primary.main, 0.7),
                0.15,
              )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
            : `0px 2px 8px -3px ${alpha(theme.colors.alpha.black[100], 0.2)}, 0px 5px 22px -4px ${alpha(
                theme.colors.alpha.black[100],
                0.1,
              )}`,
      }}>
      <Box marginLeft={'auto'} sx={{ width: '70%' }} display="flex" alignItems="center" justifyContent="flex-end">
        <Box display="flex" justifyContent={'space-between'}>
          <Box style={{ marginRight: '15px' }}>
            <InputGroup className="mb-0">
              <InputGroup.Text>P</InputGroup.Text>
              <Form.Control aria-label="Amount (to the nearest dollar)" value={0} />
              <InputGroup.Text>POINT</InputGroup.Text>
            </InputGroup>
          </Box>
          <Box>
            <InputGroup className="mb-0">
              <InputGroup.Text>₩</InputGroup.Text>
              <Form.Control aria-label="Amount (to the nearest dollar)" value={0} />
              <InputGroup.Text>KRW</InputGroup.Text>
            </InputGroup>
          </Box>
        </Box>
        <HeaderButtons />
        <ChangeLanguage onChange={onChangeInput} defaultValue={LANGUAGE.KR}>
          <MenuItem value={LANGUAGE.KR}>Korean</MenuItem>
          <MenuItem value={LANGUAGE.EN}>English</MenuItem>
        </ChangeLanguage>

        <HeaderUserbox />
        <Box
          component="span"
          sx={{
            ml: 2,
            display: { lg: 'none', xs: 'inline-block' },
          }}>
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? <MenuTwoToneIcon fontSize="small" /> : <CloseTwoToneIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
