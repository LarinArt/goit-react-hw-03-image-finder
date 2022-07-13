import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backdropBgColor};
`;

export const Wrapper = styled.div`
  max-width: 80vw;
  max-height: calc(100vh - 24px);
`;
