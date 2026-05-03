import React, { useState } from "react";
import axios from "axios";

function SearchBar({ setImages }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchImages = async () => {
     setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=MfaKlQUatVCbi1gi5A7Dm8ozNULbtXqmb_DVlFym_oo`,
      );
      setImages(response.data.results);
    } catch (error) {
      setError("Failed to fetch images. Try again.");
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search images..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchImages}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default SearchBar;
