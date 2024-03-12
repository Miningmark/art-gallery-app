import Navigation from "@/components/Navigation/Navigation";
import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import Layout from "@/components/Layout/Layout";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const initalFavorite = Array(10).fill(false);

const initalComments = Array(10).fill([]);

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useState(initalFavorite);
  const [comments, setComments] = useState(initalComments);

  function handleSetComment(id, newComment) {
    setComments(
      comments.map((comment, index) =>
        index === id ? [...comment, newComment] : comment
      )
    );
  }

  function handleToggleFavorite(id) {
    setFavorites(
      favorites.map((favorite, index) => (index === id ? !favorite : favorite))
    );
  }

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // console.log(data);
  console.log(favorites);
  console.log("comments :", comments);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          artpieces={data}
          onToggleFavorite={handleToggleFavorite}
          favorites={favorites}
          onSetComment={handleSetComment}
          comments={comments}
        />
      </Layout>
    </>
  );
}
