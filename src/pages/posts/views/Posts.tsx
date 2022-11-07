import React from 'react';
// import axios from 'axios';
import { Button } from 'antd';
const Posts: React.FC = () => {
  const onSubmit = async () => {
    console.log(1);
  };

  return (
    <>
      <Button onClick={onSubmit} type="primary">
        Primary Button
      </Button>
    </>
  );
};

export default Posts;
