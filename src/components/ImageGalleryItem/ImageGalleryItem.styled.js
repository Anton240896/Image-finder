import styled from 'styled-components';

export const ImageWraper = styled.div`
  border-radius: 8px;
  border: 1px solid #000000;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 250ms, transform 250ms;
  &:hover,
  :focus {
    box-shadow: 1px 1px 20px black;
    transform: scale(1.07);
  }
`;
