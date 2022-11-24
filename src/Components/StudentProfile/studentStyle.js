import styled from 'styled-components';

export const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${({ padding }) => padding || '0.3rem'};
  width: ${({ width }) => width};
  border: 2px solid #a29ddf;
  border-radius: 34px;
  gap: 10px;
  & > div {
    flex: 1;
    border-radius: 34px;
    cursor: pointer;
    display: flex;
    padding: ${({ padding }) => padding || '0.3rem'};
    & > span {
      text-transform: capitalize;
    }
  }
`;

export const SwitchYes = styled.div`
  background-color: ${({ isActive }) => (isActive ? '#625aca' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#0d6efd')};
`;
export const SwitchNo = styled.div`
  background-color: ${({ isActive }) => (isActive ? '#625aca' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#0d6efd')};
`;
