import Spotlight from "@/components/Spotlight/Spotlight";

export default function SpotlightPage({
  artpieces,
  onToggleFavorite,
  favorites,
}) {
  return (
    <Spotlight
      artpieces={artpieces}
      onToggleFavorite={onToggleFavorite}
      favorties={favorites}
    ></Spotlight>
  );
}
