import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  padding-right: 20px;
  padding-left: 20px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 5px;
    margin-top: 30px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  strong {
    color: #fff;
    font-size: 24px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    width: 150px;
    height: 44px;
    background: #d44059;
    font-weight: bold;
    color: #fff;
    border: 0px;
    border-radius: 4px;
    font-size: 14px;
    transition: background 0.2s;

    svg {
      margin-right: 5px;
    }

    &:hover {
      background: ${darken(0.05, '#d44059')};
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 14px;

  button {
    background: none;
    border: 0;
  }

  strong {
    color: #fff;
    font-size: 18px;
    margin: 0 15px;
  }
`;

export const Meetup = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.15);
  text-decoration: ${props => (props.past ? 'line-through' : '')};
  color: #fff;

  button {
    background: none;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 12px;

    svg {
      margin-left: 15px;
    }
  }

  strong {
    display: block;
    color: ${props => (props.past ? '#999' : '#fff')};
    font-size: 14px;
    font-weight: bold;
  }
`;
