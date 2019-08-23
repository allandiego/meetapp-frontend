import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(24, 22, 31, 0.5);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    text-align: right;
    margin-right: 20px;
    font-size: 12px;

    strong {
      color: #fff;
      display: block;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  > button {
    width: 50px;
    height: 30px;
    background: #d44059;
    font-weight: bold;
    color: #fff;
    border: 0px;
    border-radius: 4px;
    font-size: 12px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#D44059')};
    }
  }
`;
