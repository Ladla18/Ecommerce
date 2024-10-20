import React from "react";

const Testimonials = () => {
  const testimonialData = [
    {
      name: "John Doe",
      rating: "5 Stars",
      review: "This Was An Awesome Experience",
    },
    {
      name: "John Doe",
      rating: "5 Stars",
      review: "This Was An Awesome Experience",
    },
  ];
  return (
    <div className="flex flex-col mt-10 mb-5">
      <h2 className=" monster-bold text-5xl text-center">Testimonials</h2>
      <div className="flex justify-center gap-10 mt-10 px-20">
        {testimonialData.map((testimonial, index) => {
          return (
            <div
              key={index}
              className="border bg-slate-100 px-5  border-black rounded-sm w-1/2"
            >
              <div className="flex justify-between mt-3 mx-5  border-b-2 pb-2  border-gray-400">
                <p className="monster-bold text-xl">{testimonial.rating}</p>
                <h3 className="monster-bold text-xl">{testimonial.name}</h3>
              </div>
              <p className="mt-5 pb-20 monster-light mx-5 font-bold text-justify">{testimonial.review}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
