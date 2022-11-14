import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" style={{ marginRight: '10px' }} />
  );
};

export default Loading;
