import styled from 'styled-components';

export const Wrapper = styled.div<{ bgColor: string }>`
  background-image: ${(p) => p.bgColor};
  border-radius: 4px;
  color: white;
  border-color: transparent;
  overflow: hidden;
  & {
    .cardItem {
      height: 8rem;
      max-height: 8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 0;
      padding: 0.675rem;
      &__title {
        font-size: 0.8rem;
        flex-shrink: 0;
        font-weight: 700;
        line-height: 1;
      }
      &__desc {
        padding: 1rem;
      }
      &__point {
        font-size: 1.8rem;
        margin-top: 1rem;
        font-weight: 600;
        line-height: 1;
      }
      &__icon {
        padding-right: 0.5rem;
        .MuiSvgIcon-root {
          font-size: 3.5rem;
          color: rgba(0, 0, 0, 0.15);
        }
      }

      &__overlay {
        position: relative;
        padding: 0.675rem;
        color: white;
        text-align: right;
        background-color: rgba(0, 0, 0, 0.15);
        z-index: 1;

        span {
          z-index: 10;
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
          z-index: 1;
          cursor: pointer;
        }
        &:hover::after {
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
`;
