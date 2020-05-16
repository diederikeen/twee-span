import React from "react";
import styled from "styled-components";

const Component = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 3px;
  padding: 1rem;
`;

const Wrap = styled.div`
  position: absolute;
  max-width: 560px;
  width: 100%;
  left: 50%;
  transform: translate(-50%, -200%);
`;

const ToasterComponent = ({ duration, content, type, visible = false }) => {
  let backgroundColor;
  switch (type) {
    case "danger":
      backgroundColor = "red";
      break;

    case "success":
      backgroundColor = "lightgreen";
      break;

    default:
      backgroundColor = "#5b64d0";
  }

  return (
    <Wrap>
      {visible && (
        <Component backgroundColor={backgroundColor}>{content}</Component>
      )}
    </Wrap>
  );
};

export default ToasterComponent;
