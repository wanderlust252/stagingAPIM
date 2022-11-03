import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import loadable from '@loadable/component';

import { backgroundImg } from '@/pages/dashboard/constants';

type IProps = {
  title: string;
  statistics: string;
  subTitle: string;
  icon: string;
};

const Wrapper = styled(Card)<{ bgColor: string }>`
  &&& {
    background-image: ${(p) => p.bgColor};
    border-radius: 4px;
    color: white;
    .ant-card-body {
      padding: 0;
    }
    .card {
      font-size: 1.2rem;
      display: flex;
      justify-content: space-between;
      padding-bottom: 0;
      &__title {
        font-size: 1.2rem;
        flex-shrink: 0;
        font-weight: 700;
        line-height: 1;
      }
      &__desc {
        padding: 1.5rem;
      }
      &__point {
        font-size: 2.2rem;
        margin-top: 1rem;
        font-weight: 600;
        line-height: 1;
        text-transform: uppercase;
      }
      &__icon {
        padding: 2.5rem 3rem;
        span {
          font-size: 4.2rem;
          color: rgba(0, 0, 0, 0.15);
        }
      }
      &__overlay {
        position: relative;
        padding: 1rem 1.5rem;
        color: white;
        text-align: right;
        span {
          z-index: 2;
          position: relative;
        }

        &::after {
          content: '';
          background-color: rgba(0, 0, 0, 0.15);
          width: 100%;
          height: 100%;
          left: 0;
          bottom: 0;
          position: absolute;
          z-index: 0;
          cursor: pointer;
        }
        &:hover::after {
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
`;

export default function CardItem({
  icon,
  subTitle = '나의 보유 포인트',
  title = '나의 보유 포인트',
  statistics = '0 point',
}: IProps) {
  const bgColor = Math.floor(Math.random() * backgroundImg.length);
  const DynamicIcon = loadable(
    (props: { type: string }) => import(`@ant-design/icons/es/icons/${props.type.trim()}.js`),
  );

  return (
    <Wrapper bgColor={backgroundImg[bgColor]}>
      <div className="card">
        <div className="card__desc">
          <div className="card__title">{title}</div>
          <div className="card__point">{statistics}</div>
        </div>
        <div className="card__icon">
          <DynamicIcon type={icon} />
        </div>
      </div>
      <div className="card__overlay">
        <span>{subTitle}</span>
      </div>
    </Wrapper>
  );
}
