import styled from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  width: 300px;
  margin-bottom: 14px;
  height: 40px;
  font-size: 18px;
  padding: 0 12px;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid #fff;
  color: #fff;
  outline: none;

  ::placeholder {
    color: #bcbcbc;
  }
`;

export default Input;
