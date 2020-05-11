import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import Header from "../Header";
import Notification from "../Notification";

const Container = styled.div``;

const AppPresenter = () => {
  return (
    <Container>
      <Header />
      <Flex alignCenter full column>
        <Notification text={"Hello"} seen={false} />
      </Flex>
    </Container>
  );
};

export default AppPresenter;
