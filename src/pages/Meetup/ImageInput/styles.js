import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      display: flex;
      flex: 1;
      width: 900px;
      height: 250px;
      max-width: 900px;
      max-height: 250px;
      border-radius: 4px;
    }

    input {
      display: none;
    }
  }
`;

export const Placeholder = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 250px;
  width: 900px;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: bold;
  color: #999;
  background: rgba(24, 22, 31, 0.6);
  border-radius: 4px;

  svg {
    margin-bottom: 10px;
  }
`;
