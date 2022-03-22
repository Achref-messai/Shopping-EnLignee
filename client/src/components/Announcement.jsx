import styled from "styled-components";

const Container = styled.div`
  height: 35px;
  background-color: black;
  margin: 2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 18px;
  font-weight: 600;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over 40Tnd</Container>;
};

export default Announcement;
