import styled from 'styled-components';


export const MainScreen = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 0 2.25rem;;
  margin-bottom: 2rem;

  background-color: #f5f5f5;
  color: #333;

  font-size: 1.5rem;
`;

export const Header = styled.h1`
  text-align: center;
`;

export const Menu = styled.ul`
  display: flex;
  margin-top: 3rem;
`;

export const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  position: relative;
  display:flex;

  min-width: 250px;

  border: 4px solid black;

  padding: 0.5rem 1rem;

  color: black;
  background-color: white;

  & + & {
    margin-left: 1rem;
  }

  &:hover {
    color: white;
    background-color: black;
  }

  &::after {
    content: '#';
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

