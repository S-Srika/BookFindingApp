import React from "react";
import BookCard from "./BookCard";
const LatestBooks = () => {
  const books = [
    {
      title: "AI on Trial",
      author_name: ["Shri Sujeet Kumar"],
      first_publish_year: 2023,
      cover_img:"https://ik.imagekit.io/hb9mevpzq/BOOK%20FINDER/ai-on-trial-sujeet-kumar-tauseef-alam-1st-edition-front-cover.jpg?updatedAt=1758114462352 "
    },
    {
      title: "The Story of a Heart",
      author_name: ["Rachel Clarke"],
      first_publish_year: 2022,
      cover_img:"https://ik.imagekit.io/hb9mevpzq/BOOK%20FINDER/710YRrNiAmL._SL1500_.jpg?updatedAt=1758114526114"
    },
    {
      title: "The Stars Light the Way",
      author_name: ["Sucheta Raj Khanna"],
      first_publish_year: 2021,
      cover_img:"https://ik.imagekit.io/hb9mevpzq/BOOK%20FINDER/81-RjyAG5yL._SL1500_.jpg?updatedAt=1758114574660"
    },
    {
      title: "The India I Saw",
      author_name: ["S. Ambujammal's"],
      first_publish_year: 2020,
      cover_img:"https://ik.imagekit.io/hb9mevpzq/BOOK%20FINDER/810CBymrP0L._SL1500_.jpg?updatedAt=1758114620836"
    },
  ];
  return (
    <section className="bg-[#7c617e] ">
      <div className="max-w-3xl mx-auto ">
        <h2 className="font-nunito text-[20px] md:text-[28px] text-white  p-4">
          Latest Pics For You...
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-3 p-3">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </section>
  );
};

export default LatestBooks;
