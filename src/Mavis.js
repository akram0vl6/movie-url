import React, { useEffect, useState } from "react";

const Mavis = () => {
  const [data, setData] = useState([]);
  const url = "https://yts.mx/api/v2/list_movies.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.data.movies);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mavis">
      {data.map((el) => (
        <div key={el.id} className="mavis-item">
          <img src={el.medium_cover_image} alt={el.title} />
          <p>{el.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Mavis;
