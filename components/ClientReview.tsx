"use client";

import Image from "next/image";
import { useState } from "react";

const reviews = [
  {
    name: "Jimmy Watson",
    date: "3 months ago",
    country: "UK",
    flag: "/flags/uk.png",
    avatar: "/avatars/user1.png",
    rating: 5,
    text: "“Zargham did an amazing job on our logo redesign. He understood our vision and delivered exactly what we needed. Highly recommended.”",
  },
  {
    name: "Kevin Johnson",
    date: "2 months ago",
    country: "USA",
    flag: "/flags/canada.png",
    avatar: "/avatars/user2.png",
    rating: 5,
    text: "“The event posters were bold and visually appealing. Perfect for attracting attention”",
  },
  {
    name: "Ahmed Sultan",
    date: "4 weeks ago",
    country: "UAE",
    flag: "/flags/saudia.png",
    avatar: "/A.png",
    rating: 5,
    text: "“I hired Zargham for event flyers, and the designs were fantastic. He took our ideas and made them better than we imagined.”",
  },
  {
    name: "Daniel Peterson",
    date: "7 months ago",
    country: "Germany",
    flag: "/flags/union.png",
    avatar: "/avatars/user4.png",
    rating: 4,
    text: "“Our website redesign was a huge success! The layout is intuitive, and the visuals are sleek and professional.”",
  },
  {
    name: "Omar El-Sayed",
    date: "1 year ago",
    country: "Turkey",
    flag: "/flags/Turkey.png",
    avatar: "/avatars/user5.png",
    rating: 5,
    text: '"The social media ad creatives were outstanding! They helped increase engagement and clicks significantly, and the visuals were eye-catching."',
  },
  {
    name: "John Michaels",
    date: "1 year ago",
    country: "Canada",
    flag: "/flags/uk.png",
    avatar: "/avatars/user6.png",
    rating: 4,
    text: "“Amazing logo design! Zargham understood my vision and created something unique and professional.”",
  },
  {
    name: "Ricardo Jimenez",
    date: "6 weeks ago",
    country: "Brazil",
    flag: "/flags/brazil.png",
    avatar: "/avatars/user7.png",
    rating: 5,
    text: "“The banner design was good, more than I expected. Great effort.”",
  },
  {
    name: "Elena Tzouganaki",
    date: "3 months ago",
    country: "France",
    flag: "/flags/grace.png",
    avatar: "/avatars/user8.png",
    rating: 4,
    text: "“The branding work was decent, but I had to tweak the color scheme slightly for my liking.”",
  },
  {
    name: "Luca Dupont",
    date: "3 months ago",
    country: "France",
    flag: "/flags/france.png",
    avatar: "/L.png",
    rating: 5,
    text: '"Quick and professional logo design. It was simple and elegant, just as I requested. The turnaround time could have been a little faster."',
  },
  {
    name: "Rajiv Kumar",
    date: "1 year ago",
    country: "India",
    flag: "/flags/india.png",
    avatar: "/avatars/user10.png",
    rating: 5,
    text: '"The dashboard UI design was functional and stylish. The colors and layout were well-chosen, making our platform much more engaging."',
  },
  {
    name: "Max Alexander",
    date: "11 months ago",
    country: "netherland",
    flag: "/flags/netherland.png",
    avatar: "/avatars/user11.png",
    rating: 4,
    text: '"Our product packaging redesign was a game-changer! It now looks premium and stands out on store shelves beautifully."',
  },
  {
    name: "Carlos Rodríguez",
    date: "4 months ago",
    country: "Spain",
    flag: "/flags/spain.png",
    avatar: "/avatars/user12.png",
    rating: 5,
    text: '"The menu design was visually appealing, but the text readability could have been slightly improved. Overall, good work and professional service."',
  },
  {
    name: "Emma Lawrence",
    date: "17 months ago",
    country: "UK",
    flag: "/flags/uk.png",
    avatar: "/avatars/user13.png",
    rating: 5,
    text: '"Stunning business card designs! The colors, typography, and layout were exactly what I envisioned. They make a great first impression. "',
  },
  {
    name: "Gary Oscar",
    date: "2 years ago",
    country: "USA",
    flag: "/flags/usa.png",
    avatar: "/avatars/user14.png",
    rating: 4,
    text: '"Zargham’s digital ad creatives were top-notch. The campaign looked polished and professional, perfectly aligned with our branding."',
  },
  {
    name: "Isabella Verdi",
    date: "13 months ago",
    country: "Italy",
    flag: "/flags/italy.png",
    avatar: "/avatars/user15.png",
    rating: 5,
    text: '"Zargham did an excellent job on my brand’s visual identity. The consistency across all designs was impressive. Will definitely work with him again."',
  },
  {
    name: "Daisuke Akio",
    date: "2 years ago",
    country: "Japan",
    flag: "/flags/japan.png",
    avatar: "/avatars/user16.png",
    rating: 5,
    text: '"The illustrations he made were creative and detailed. He added the perfect touch and the overall design concept was creative and well-executed."',
  },
  {
    name: "Liam Thompson",
    date: "6 months ago",
    country: "Newzealand",
    flag: "/flags/newzealand.png",
    avatar: "/avatars/user17.png",
    rating: 4,
    text: '"Zargham’s social media graphics were creative and professional. They fit our brand perfectly and boosted engagement."',
  },
  {
    name: "Fatima Al-Farsi",
    date: "8 months ago",
    country: "Arab",
    flag: "/flags/arab.png",
    avatar: "/avatars/user18.png",
    rating: 5,
    text: '"Zargham designed an outstanding flyer for my boutique. The colors and layout were eye-catching, making it stand out from the competition."',
  },
  {
    name: "Sophia Martinez",
    date: "5 months ago",
    country: "Italy",
    flag: "/flags/italy.png",
    avatar: "/avatars/user19.png",
    rating: 5,
    text: "“The flyer design was excellent and looked very professional. It helped attract more visitors to our event.”",
  },
];

const ClientReview = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section id="client-review" className="bg-[#0F1B29] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Client Review</h2>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${
            showAll ? "lg:grid-cols-4" : "lg:grid-cols-3"
          } gap-6`}
        >
          {displayedReviews.map((review, i) => (
            <div
              key={i}
              className="bg-[#1e293b] rounded-xl p-6 shadow-lg border border-[#38bdf8]/30 hover:border-[#38bdf8] transition"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-lg">{review.name}</p>
                    {review.date && (
                      <p className="text-sm text-gray-400">{review.date}</p>
                    )}
                  </div>
                </div>
                <Image
                  src={review.flag}
                  alt={review.country}
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex text-yellow-400 mb-3">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
              <p className="text-base text-gray-300">{review.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p
            onClick={() => setShowAll(!showAll)}
            className="text-gray-400 underline cursor-pointer inline-block"
          >
            {showAll ? "Show Less" : "See All"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;