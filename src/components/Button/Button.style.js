import styled from 'styled-components';

export const LoadMoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 30px;
  padding: 0;

  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 50%;
  transform: translateX(-50%);

  border: none;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.secondBgColor};
  color: ${({ theme }) => theme.colors.secondTextColor};

  cursor: pointer;
  transition: color ${({ theme }) => theme.colors.hoverAnimation};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accentBgColor};
  }
`;

export default LoadMoreButton;
