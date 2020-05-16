import styled from "styled-components";
import { rgba } from "polished";

export const ContentWrap = styled.div`
  margin-top: 3rem;

  @media screen and (min-width: 970px) {
    margin-left: auto;
  }

  a {
    color: black;
    display: block;
    &:hover {
    
        background-color: ${rgba("#a88687", 0.1)};
      }
    }
  }

  .total-prices {
    margin-top: 3rem;
    padding: 0.4rem 0;
    border-top: 4px solid black;
    text-align: right;

    .subtotal {
      font-size: 1rem;
      margin-top: 1rem;
    }

    .total {
      font-size: 1.4rem;
      font-weight: 700;
      margin-top: 0.4rem;
    }
  }

  .row {
    display: flex;
    align-items: center;
    padding: 2rem 0;

    &:not(:first-child) {
      border-top: 1px solid lightgrey;
    }

    p {
      font-size: 1rem;
      margin: 0;
    }

    h5 {
      font-size: 1.2rem;
      margin: 0 0 0.5rem;
    }
    .row-content {
      padding: 0 1rem;
    }
  }
`;
