import Navigation from "../Navigation/Navigation";
import styled from "styled-components";
import Image from "next/image";
import GalleryImage from "./Gallery.png";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Navigation />
      <h1>Art Gallery</h1>
      {children}
    </StyledLayout>
  );
}
