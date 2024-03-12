import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import GalleryImage from "./Gallery.png";

const StyledNavigation = styled.div`
  display: flex;
  justify-content: center;
  top: 0;
  width: 100vw;
  gap: 30px;
  position: sticky;
  background-color: #202020;
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  transform: scale(1);
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  left: 20px;
  top: 0px;
`;

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledImage
        src={GalleryImage}
        width={50}
        height={50}
        alt="Gallery App"
      />
      <StyledLink href="/">Homepage</StyledLink>
      <StyledLink href="/favorite">Favorites</StyledLink>
      <StyledLink href="/art-pieces/">Gallery</StyledLink>
    </StyledNavigation>
  );
}
