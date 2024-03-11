import Link from "next/link";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Image from "next/image";

export default function ArtPieces({ artpieces }) {
  return (
    <>
      <ul>
        {artpieces.map((artpiece) => (
          <li key={artpiece.slug}>
            <Link href={`/art-pieces/${artpiece.slug}`}>{artpiece.name}</Link>
            <ArtPiecePreview
              title={artpiece.name}
              image={artpiece.imageSource}
              artist={artpiece.artist}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
