import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

interface NavigationListProps {
  toggled: boolean;
}

export default {
  NavigationList: styled.ul<NavigationListProps>`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 800px) {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      height: 100vh;
      width: 100vw;
      background: gray;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 30px;
      display: ${({ toggled }) => (toggled ? "flex" : "none")};
    }
  `,

  NavigationListItem: styled.li`
    display: flex;
    padding: ${({ theme }) => `${theme.spacing[0]} ${theme.spacing[3]}`};
    letter-spacing: 0.1em;
  `,

  NavLink: styled(RouterNavLink)`
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[0]}`};
    border-bottom: 2px solid transparent;

    &.active {
      border-bottom: 2px solid white;
    }
  `,

  MenuTogglerButton: styled.button`
    display: none;
    border: none;
    background: transparent;
    color: white;
    font-size: 30px;
    padding: 0;
    margin: 0;
    height: 30px;
    width: 30px;
    cursor: pointer;
    transition: all 250ms ease-in-out;

    &:hover {
      color: red;
    }

    &:focus {
      outline: none;
    }

    @media only screen and (max-width: 800px) {
      display: block;
    }
  `
};
