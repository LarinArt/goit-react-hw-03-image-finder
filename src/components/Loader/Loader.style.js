import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;

  color: ${({ theme }) => theme.colors.accentBgColor};
`;

export default LoaderWrapper;
