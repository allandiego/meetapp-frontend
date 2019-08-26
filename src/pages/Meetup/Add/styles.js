import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  padding-right: 20px;
  padding-left: 20px;

  form {
    display: flex;
    flex-direction: column;

    .react-datepicker-wrapper,
    .react-datepicker__input-container {
      display: block;
    }

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 150px;
      padding: 15px 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #d44059;
      align-self: flex-start;
      text-shadow: 0.5px 0.5px #000;
      margin: 0 0 10px;
      font-weight: bold;
    }

    > button {
      align-self: flex-end;
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
  }
`;
