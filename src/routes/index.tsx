import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Type Garden — Flowers in bloom" },
      { name: "description", content: "A living flower garden grown from your words, with animated posters and image and video exports." },
      { property: "og:title", content: "Type Garden — Flowers in bloom" },
      { property: "og:description", content: "Grow a living flower garden from your words and create animated floral posters." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="garden-shell">
      <iframe
        className="garden-frame"
        src="/garden.html"
        title="Type Garden"
        allow="autoplay"
      />
    </main>
  );
}
