import Card from "../../components/card/card";
import CardContainer from "../../components/card-container/card-container";
import useFetch from "../../hooks/useFetch";
import { getBooks } from "../../services/books/books";
import Loading from "../../components/loading/loading";
import Banner from '../../assets/banner.jpg';
import './styles.css'

function Home() {
  const [books, loading] = useFetch(getBooks);

  if (loading) return <Loading />;

  return (
    <div>
      <div className="banner">
        <img src={Banner} alt="banner" />
      </div>
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
    </div>
  );
}

export default Home;
