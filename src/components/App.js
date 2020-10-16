import React, { useEffect, useState } from "react";
import { Form, Footer, Gallery, Header } from "./index";
import Loading from "./Loading";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        setImages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="container">
        {loading ? <Loading /> : <Gallery images={images} />}
      </div>
      <Form />
      <Footer />
    </div>
  );
};

export default App;
