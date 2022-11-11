import { LogoSigns, LogoWrapper, TooltipWrapper } from './style';

function Logo() {
  return (
    <TooltipWrapper title="Tokyo Free White React Typescript Admin Dashboard" arrow>
      <LogoWrapper to="/overview">
        <LogoSigns>
          <b style={{ paddingRight: '0.5rem' }}>SpadeAPI </b>{' '}
          <b
            style={{
              fontFamily: 'initial',
            }}>
            Admin
          </b>
        </LogoSigns>
      </LogoWrapper>
    </TooltipWrapper>
  );
}

export default Logo;
