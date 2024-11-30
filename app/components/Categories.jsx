"use client";

import Link from "next/link";
import Slider from "react-slick";

export default function Categories({ categories }) {
  const colors = ["bg-red-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-purple-200"];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Display 4 items on large screens
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024, // Adjust for medium-sized screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Adjust for smaller screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480, // Adjust for very small screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  if (categories.length === 0) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-8 justify-center overflow-hidden md:p-10 p-5 bg-lightYellow">
      <div className="flex justify-center w-full">
        <h1 className="text-lg font-semibold">Shop By Category</h1>
      </div>
      <Slider {...settings}>
        {(categories?.length <= 2
          ? [...categories, ...categories, ...categories]
          : categories
        )?.map((category, index) => {
          const backgroundColor = colors[index % colors.length]; // Cycle through predefined colors

          return (
            <Link href={`/categories/${category?.id}`} key={category?.id || `category-${index}`}>
              <div className="px-2 group">
                <div
                  className="flex flex-col gap-2 items-center justify-center transform transition-transform duration-300 group-hover:-translate-x-4"
                >
                  <div
                    className={`md:h-32 md:w-32 h-24 w-24 rounded-full md:p-5 p-2 border overflow-hidden ${backgroundColor} shadow-md`}
                  >
                    <img
                      src={category?.imageURL}
                      alt={category?.name || "Category"}
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                  <h1 className="font-semibold group-hover:text-blue-500 transition-colors duration-300">
                    {category?.name}
                  </h1>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
}
