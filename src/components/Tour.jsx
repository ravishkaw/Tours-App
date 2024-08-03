import { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <article className="tour">
      <img className="tour-image" src={image} alt={name} />
      <p className="tour-price">$ {price}</p>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {showMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={toggleShowMore} className="read-more-btn">
            {showMore ? "Show Less" : "Read More"}
          </button>
        </p>
      </div>
      <button
        className="btn btn-block"
        onClick={() => {
          removeTour(id);
        }}
      >
        Not Interested
      </button>
    </article>
  );
};

export default Tour;
