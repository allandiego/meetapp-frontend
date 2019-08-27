import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
`;

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  /* height: 100vh;
  width: 100vh; */
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.87);
  z-index: 999;
`;
