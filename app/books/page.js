import { Arrow, ContactBand, JsonLd, PageHero } from "../components";
import { books, pageMetadata, siteUrl, webPageSchema } from "../site-data";

export const metadata = pageMetadata(
  "Books",
  "Books by Uchechukwu Ajuzieogu on artificial intelligence, modern education, Igbo enterprise and building sustainable side income.",
  "/books"
);

export default function BooksPage() {
  const schema = {
    ...webPageSchema({
      type: "CollectionPage",
      path: "/books",
      name: "Books by Uchechukwu Ajuzieogu",
      description: metadata.description,
    }),
    mainEntity: {
      "@type": "ItemList",
      name: "Books by Uchechukwu Ajuzieogu",
      itemListElement: books.map((book, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Book",
        name: book.title,
        datePublished: book.year,
        image: book.image.startsWith("http") ? book.image : `${siteUrl}${book.image}`,
        url: book.href,
        author: { "@id": `${siteUrl}/#person` },
      },
      })),
    },
  };

  return (
    <main>
      <JsonLd data={schema} />
      <PageHero
        index="04"
        breadcrumb="Books"
        path="/books"
        eyebrow="Books"
        title="Ideas that deserve"
        italic="more than a scroll."
        intro="Published work across artificial intelligence, education, enterprise and culture."
      />
      <section className="library">
        {books.map((book, index) => (
          <article className={`library-book library-${book.color}`} key={book.title}>
            <div className="library-cover">
              <span>0{index + 1}</span>
              <img src={book.image} alt={`${book.title} book cover`} />
            </div>
            <div className="library-copy">
              <p className="eyebrow">{book.year} / Published work</p>
              <h2>{book.title}</h2>
              <p>{book.description}</p>
              <a href={book.href} target="_blank" rel="noreferrer">View the book <Arrow /></a>
            </div>
          </article>
        ))}
      </section>
      <section className="book-note">
        <p className="eyebrow">The bookshelf</p>
        <h2>Writing is a form of institution building.</h2>
        <p>
          A book holds an argument still long enough to test it. These works
          connect technical change to the people, classrooms, businesses and
          cultures living through it.
        </p>
      </section>
      <ContactBand title="For rights, interviews, reviews or book conversations." />
    </main>
  );
}
