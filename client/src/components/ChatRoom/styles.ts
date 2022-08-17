import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 280px auto;
  grid-template-rows: 90px 1fr 70px;
  grid-template-areas:
    "header header"
    "users conversation"
    "users input";
  gap: 24px;
  width: 50%;
  height: 75%;
  padding: 36px;
  background-color: var(--bg-box);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
`
