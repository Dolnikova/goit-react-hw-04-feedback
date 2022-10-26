import { default as styled } from 'styled-components';
export const Styled = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 1px 1px 4px 1px rgba(33, 33, 33, 0.21);
  border-radius: 4px 4px 12px 12px;
  width: 320px;
`;
export const StyledOptions = styled.div`
  margin: 15px 0;
`;

export const ButtonStyled = styled.button`
  font-size: 15px;
  padding: 8px;
  border: none;
  border-radius: 5px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :not(:last-child) {
    margin-right: 15px;
  }
  :hover,
  :focus {
    background-color: grey;
  }
`;
