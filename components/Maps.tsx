const place = "San Francisco, CA";

export default function MapView() {
  return (
    <>
      <iframe
        title={`Map of ${place}`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(place)}&z=12&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block w-full aspect-4/3 border-0"
      />
      <div className="flex items-center justify-between gap-3 px-3 py-2 border-t-2 border-ink font-mono text-[11px] text-muted">
        <span>Based in {place}</span>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-heading hover:text-accent transition-colors"
        >
          open in Maps ↗
        </a>
      </div>
    </>
  );
}
