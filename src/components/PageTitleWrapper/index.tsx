import { FC } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import { PageTitle } from './style';

const PageTitleWrapper: FC = ({ children }) => {
  return (
    <PageTitle className="MuiPageTitle-wrapper">
      <Container maxWidth="lg">{children}</Container>
    </PageTitle>
  );
};

PageTitleWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitleWrapper;
