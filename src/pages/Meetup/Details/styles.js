import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  padding-right: 20px;
  padding-left: 20px;

  header {
    margin-bottom: 30px;
  }

  div {
    display: flex;
    color: #999;
    font-size: 14px;

    svg {
      margin-right: 5px;
    }

    time {
      margin-right: 30px;
    }
  }

  p {
    font-size: 14px;
    color: #fff;
    margin-bottom: 30px;
    line-height: 1.6;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  h1 {
    color: #fff;
    font-size: 24px;
  }

  div {
    display: flex;
    align-items: center;

    button:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px;
      width: 100px;
      height: 30px;
      background: #4dbaf9;
      font-weight: bold;
      color: #fff;
      border: 0px;
      border-radius: 4px;
      font-size: 12px;
      transition: background 0.2s;

      svg {
        margin-right: 5px;
      }

      &:hover {
        background: ${darken(0.05, '#4dbaf9')};
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px;
      width: 100px;
      height: 30px;
      background: #d44059;
      font-weight: bold;
      color: #fff;
      border: 0px;
      border-radius: 4px;
      font-size: 12px;
      transition: background 0.2s;

      svg {
        margin-right: 5px;
      }

      &:hover {
        background: ${darken(0.05, '#d44059')};
      }
    }
  }
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  img {
    border-radius: 4px;
    max-height: 250px;
    flex: 1;
  }
`;
