import styled from "styled-components";

const Nav = styled.nav`
  // height: 80px;
  padding: 0.8rem 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #f9fafb;

  a {
    color: black;
    font-weight: 600;
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 2em;
    }
  }

  .active {
    color: #a88687;
  }

  svg {
    // fill: red;
    // color: red;
  }
`;

export default Nav;
