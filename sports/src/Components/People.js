import React from "react";

const Example = () => {
  const people = [
    {
      name: "Damini Rambhad",
      role: "Co-Founder / CEO",
      imageUrl: "./fencerimg/Daminidi1.png",
    },
    {
      name: "Krunal Sheware",
      role: "Co-Founder / CEO",
      imageUrl: "./fencerimg/krunal1.png",
    },
    {
      name: "Pranay Pimpalkar",
      role: "Co-Founder / CEO",
      imageUrl: "./fencerimg/pranay1.png",
    },
    {
      name: "Aavesh Somkuwar",
      role: "Co-Founder / CEO",
      imageUrl: "./fencerimg/aveshimg.png",
    },
    {
      name: "Yash Sontakke",
      role: "Co-Founder / CEO",
      imageUrl: "./fencerimg/yashimg.png",
    },
    {
      name: "Khushi Thatere",
      role: "Co-Founder / CEO",
      imageUrl: "./fencerimg/khushi1.png",
    },
    {
      name: "Lumbini Meshram",
      role: "Co-Founder / CEO",
      imageUrl: "./fencerimg/lumbini1.png",
    },
    {
      name: "Shruti Joshi",
      role: "Co-Founder / CEO",
      imageUrl: "./fencerimg/shruti1.png",
    },
    {
      name: "Sparsh Binkar",
      role: "Co-Founder / CEO",
      imageUrl: "./fencerimg/sparshimg1.png",
    },
    // {
    //   name: 'Chahat Rodge',
    //   role: 'Co-Founder / CEO',
    //   imageUrl:
    //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    // },
    {
      name: "Sayli Ukey",
      role: "Co-Founder / CEO",
      imageUrl: "./fencerimg/sayli1.png",
    },
    // {
    //   name: 'Divyani Nandagavli',
    //   role: 'Co-Founder / CEO',
    //   imageUrl:
    //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    // },
    {
      name: 'Eesha Yuvvari',
      role: 'Co-Founder / CEO',
      imageUrl: "./fencerimg/eesha1.png"  
      },
    // More people...
  ];
  const people2 = [
    {
      name: "Damini Rambhad",
      role: "Co-Founder / CEO",
      imageUrl: "./fencerimg/Daminidi.jpeg",
    },

    {
      name: "Khushi Thatere",
      role: "Co-Founder / CEO",
      imageUrl: "./fencerimg/khushi.jpg",
    },
    {
      name: "Lumbini Meshram",
      role: "Co-Founder / CEO",
      imageUrl: "./fencerimg/lumbini.jpeg",
    },
    {
      name: "Shruti Joshi",
      role: "Co-Founder / CEO",
      imageUrl: "./fencerimg/shruti.jpeg",
    },

    // More people...
  ];

  return (
    <div>
     c
      <div>
        <div>
          <h1 className="text-3xl font-bold mt-20 mb-8 py-8 text-center">
            "National Competitors & Laureates"
          </h1>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 mx-auto">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center justify-center">
                <div>
                  <img
                    className="w-80 h-80 max-w-xs sm:max-w-none sm:w-full md:max-w-none md:w-full lg:max-w-none lg:w-full rounded-full m-auto"
                    src={person.imageUrl}
                    alt=""
                    style={{
                      border: '3px solid transparent', // Set a transparent solid border to reserve space for the border-image
                      borderImage: 'linear-gradient(to right, red, yellow, green) 1',
                      borderRadius: '100%', // Makes the image circular
                      objectFit: 'cover', // Ensures the image covers the entire container without stretching
                    }}
                  />
                  <h3 className="text-base font-semibold text-center m-auto  leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold text-center leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Example };
