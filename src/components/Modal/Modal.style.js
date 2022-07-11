import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.backdropBgColor};
`;

export const ModalField = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: auto;

  background-color: ${({ theme }) => theme.colors.mainBgColor};
  box-shadow: ${({ theme }) => theme.colors.mainShadow};
`;

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 30px;
`;

export const ModalTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  text-transform: capitalize;
`;

export const ModalButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 20px;
  padding: 0;

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

export const ModalImg = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
`;
