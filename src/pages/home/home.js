import Card from "../../components/card/card";
import CardContainer from "../../components/card-container/card-container";
import useFetch from "../../hooks/useFetch";
import { getBooks } from "../../services/books/books";
import Loading from "../../components/loading/loading";

function Home() {
  const [books, loading] = useFetch(getBooks);

  if (loading) return <Loading />;

  return (
    <CardContainer>
      {books?.map((book) => (
        <Card
          key={book.id}
          img={book.image}
          title={book.title}
          id={book.id}
          price={book.price}
        />
      ))}
    </CardContainer>
  );
}

export default Home;
