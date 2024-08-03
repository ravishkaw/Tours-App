import { useState, useEffect } from "react";
import "./App.css";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tour = await response.json();
      setTours(tour);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const removeTour = (id) => {
    const newArray = tours.filter((tour) => tour.id != id);
    setTours(newArray);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <h1 className="title">Our Tours</h1>
        <div className="title-underline"></div>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button
            type="button"
            className="btn refresh"
            style={{ marginTop: "2rem" }}
            onClick={() => fetchTours()}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <h1 className="title">Our Tours</h1>
      <div className="title-underline"></div>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
