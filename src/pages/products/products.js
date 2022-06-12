import Card from "../../components/card/card";
import CardContainer from "../../components/card-container/card-container";
import useFetch from "../../hooks/useFetch";
import { getBooks } from "../../services/books/books";
import Loading from "../../components/loading/loading";

function Products() {
  const [books, loading] = useFetch(getBooks);

  if (loading) return <Loading />;

  return (
    <div>
      <CardContainer>
        {books?.map((book) => (
          <Card
            key={book._id}
            img={book.image}
            title={book.title}
            id={book._id}
            price={book.price}
          />
        ))}
      </CardContainer>
    </div>
  );
}

export default Products;
