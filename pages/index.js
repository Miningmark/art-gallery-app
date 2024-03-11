import useSWR, { SWRConfig } from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces artpieces={data} />
    </div>
  );
}
