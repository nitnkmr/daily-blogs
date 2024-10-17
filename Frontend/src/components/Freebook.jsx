import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

const booklist = [
  {
  name: "String",
  price: "Number",
  category: "String",
  image: "https://www.reliablesoft.net/wp-content/uploads/2019/12/free-images-for-blogs.jpg",
  title: "String",
},
  {
  name: "String",
  price: "Number",
  category: "String",
  image: "String",
  title: "String",
},
  {
  name: "String",
  price: "123",
  category: "Free",
  image: "String",
  title: "String",
},
  {
  name: "String",
  price: "123",
  category: "Free",
  image: "String",
  title: "String",
},
  {
  name: "String",
  price: "123",
  category: "Free",
  image: "String",
  title: "String",
},
  {
  name: "String",
  price: "123",
  category: "Free",
  image: "String",
  title: "String",
},
]


function Freebook() {
  const [book, setBook] = useState(booklist);
  // useEffect(() => {
  //   const getBook = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:4001/book");

  //       const data = res.data.filter((data) => data.category === "Free");
  //       console.log(data);
  //       setBook(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getBook();
  // }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
    <hr />
      <div className=" max-w-screen-2xl mt-6 container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-center text-xl pb-2">Featured Blogs And Article</h1>
          <p>
      
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
