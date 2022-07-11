import styled from 'styled-components';

export const Item = styled.li`
  width: calc(33.33333% - 30px);
  margin-bottom: 15px;
  align-items: stretch;
  display: flex;
  justify-content: center;
  margin: 15px;

  border-radius: 15px;
  object-fit: cover;

  overflow: hidden;
  cursor: pointer;
  transform: scale(1);
  transition: transform ${({ theme }) => theme.colors.hoverAnimation};

  &:hover,
  &:focus {
    transform: scale(1.02);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Img = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
`;
