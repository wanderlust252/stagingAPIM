import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './../routes';
import { Spin } from 'antd';
import styled from 'styled-components';

export interface IAgentsProps {}

const WrapperStyled = styled.section``;

const Agents: React.FC<IAgentsProps> = ({}) => {
  return (
    <WrapperStyled>
      <Routes>
        {routes.map((route, idx) => {
          return route.element ? (
            <Route
              key={idx}
              path={route.path}
              element={
                <Suspense fallback={<Spin />}>
                  <route.element />
                </Suspense>
              }
            />
          ) : null;
        })}
      </Routes>
    </WrapperStyled>
  );
};
export default Agents;
