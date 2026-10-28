import Image from "next/image";

type Book = {
  title: string;
  author: string;
  cover: string;
};

const books: Book[] = [
  {
    title: "Yesteryear",
    author: "Caro Claire Burke",
    cover: "/books/yesteryear.jpg",
  },
  {
    title: "Open Throat",
    author: "Henry Hoke",
    cover: "/books/open-throat.jpg",
  },
  {
    title: "If Cats Disappeared from the World",
    author: "Genki Kawamura",
    cover: "/books/if-cats-disappeared.jpg",
  },
  {
    title: "The Bluest Eye",
    author: "Toni Morrison",
    cover: "/books/the-bluest-eye.jpg",
  },
  {
    title: "Taiwan Travelogue",
    author: "Yáng Shuāng-zǐ",
    cover: "/books/taiwan-travelogue.jpg",
  },
  {
    title: "群島",
    author: "胡晴舫",
    cover: "/books/islands.jpg",
  },
];

export default function BookList() {
  return (
    <>
      <div className="flex items-center justify-between gap-3 px-4 py-2 border-b-2 border-line/20 font-mono text-[11px] text-muted">
        <span>Favorite books</span>
        <span>{books.length} books</span>
      </div>
      <ol className="grid grid-cols-3 gap-x-4 gap-y-6 p-5">
        {books.map((book) => (
          <li key={book.title}>
            <Image
              src={book.cover}
              alt={`${book.title} cover`}
              width={200}
              height={300}
              className="w-full aspect-2/3 object-cover shadow-[0_2px_8px_rgb(29_36_51/0.18)]"
            />
            <h3 className="mt-3 font-bold text-sm leading-snug text-center">
              {book.title}
            </h3>
            <p className="mt-0.5 font-mono text-[11px] text-heading text-center">
              {book.author}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}
