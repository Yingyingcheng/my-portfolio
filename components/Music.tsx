// Spotify share links, e.g. https://open.spotify.com/album/…
const albums = [
  { title: "浴室", link: "https://open.spotify.com/album/1zKJy6TIHEz3YM78riefV9" },
  { title: "JINJI KIKKO", link: "https://open.spotify.com/album/24eFuwfHPWbuRMrMevqe0Q" },
  { title: "French Kiwi Juice", link: "https://open.spotify.com/album/0jJ7mMkCkTe7p9EJgSRxgi" },
];

export default function Playlist() {
  return (
    <div className="flex flex-col gap-3 p-3">
      {albums.map(({ title, link }) => (
        <iframe
          key={link}
          title={`${title} on Spotify`}
          src={link
            .split("?")[0]
            .replace("open.spotify.com/", "open.spotify.com/embed/")}
          loading="lazy"
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          className="block w-full h-[152px] border-0 rounded-xl"
        />
      ))}
    </div>
  );
}
