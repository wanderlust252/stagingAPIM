import { backgroundImg } from '@/interfaces/constants';
import { Wrapper } from '../styles';

type IProps = {
  title: string;
  statistics: string;
  subTitle: string;
  icon: JSX.Element;
};

export default function CardItem({
  icon,
  subTitle = '나의 보유 포인트',
  title = '나의 보유 포인트',
  statistics = '0 point',
}: IProps) {
  const bgColor = Math.floor(Math.random() * backgroundImg.length);

  return (
    <Wrapper bgColor={backgroundImg[bgColor]}>
      <div className="cardItem">
        <div className="cardItem__desc">
          <div className="cardItem__title">{title}</div>
          <div className="cardItem__point">{statistics}</div>
        </div>
        <div className="cardItem__icon">{icon}</div>
      </div>
      <div className="cardItem__overlay">
        <span>{subTitle}</span>
      </div>
    </Wrapper>
  );
}
