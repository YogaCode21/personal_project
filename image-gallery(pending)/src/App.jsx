import React, { useState, useEffect } from "react";
import ImageCard from "./components/imageCard";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("tree");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=${page}}&query=${term}&client_id=${
        import.meta.env.VITE_UNSPLASH_ACCESS_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      </div>
    </>
  );
};
export default App;
