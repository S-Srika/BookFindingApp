import React from 'react'

const BookCard = ({book,title,author}) => {

  return (
    <div className="p-4  rounded-xl border border-[#050505] bg-gradient-to-r from-[#e8d9c5ae]  via-[#e2043b73] to-[#0442648f] shadow-lg">
      {book.cover_img &&(
        <img src={book.cover_img} className='w-full h-56 object-cover rounded-lg mb-2 '/>
      )}
      <h2 className="font-bold text-lg">{book.title}</h2>
      <p className="text-[#d8cdcd]">Author : {book.author_name?book.author_name.join(","):"UnKnown"}
      </p>
      <p className="text-[#000000] text-sm">
        First Published : {book.first_publish_year || "N/A"}
      </p>
    </div>
    
  );
};

export default BookCard;
