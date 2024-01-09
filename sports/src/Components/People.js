import React from "react";

const Example = () => {
  const people = [
    {
      name: "Damini Rambhad",
      role: "20 National participation",
      imageUrl: "./fencerimg/Daminidi1.png",
    },
    {
      name: "Krunal Sheware",
      role: "National medalist",
      imageUrl: "./fencerimg/krunal1.png",
    },
    {
      name: "Pranay Pimpalkar",
      role: "National medalist",
      imageUrl: "./fencerimg/pranay1.png",
    },
    {
      name: "Aavesh Somkuwar",
      role: "National medalist",
      imageUrl: "./fencerimg/aveshimg.png",
    },
    {
      name: "Yash Sontakke",
      role:"National Participate",
      imageUrl: "./fencerimg/yashimg.png",
    },
    {
      name: "Khushi Thatere",
      role: "National medalist",
      imageUrl: "./fencerimg/khushi1.png",
    },
    {
      name: "Lumbini Meshram",
      role: "National medalist",
      imageUrl: "./fencerimg/lumbini1.png",
    },
    {
      name: "Shruti Joshi",
      role: "National medalist",
      imageUrl: "./fencerimg/shruti1.png",
    },
    {
      name: "Sparsh Binkar",
      role: "National medalist",
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
      role: "National medalist",
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
      role: "National medalist",
      imageUrl: "./fencerimg/eesha1.png"  
      },
    // More people...
  ];
  const people2 = [
    {
      name: "Damini Rambhad",
      role: "Bronze Medlist-South Asian Fencing Championship Hydrabad INDIA  &  Participation in Foil Grand Prix-CHINA" ,
      imageUrl: "./fencerimg/Daminidi.jpeg",
    },

    {
      name: "Khushi Thatere",
      role: "2nd TFF MINI THAILAND OPEN FENCING CHAMPIONSHIP-BRONZE MEDALIST",
      imageUrl: "./fencerimg/khushi.jpg",
    },
    {
      name: "Lumbini Meshram",
      role: "Participated in 2nd TFF MINI THAILAND OPEN FENCING CHAMPIONSHIP",
      imageUrl: "./fencerimg/lumbini.jpeg",
    },
    {
      name: "Shruti Joshi",
      role: "Cadet Fencing Championship-Jorden & Cadet&Junior asian Fencing Championship-Tashkent Uzbekistan.",
      imageUrl: "./fencerimg/shruti.jpeg",
    },

    // More people...
  ];

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mt-20 mb-8 py-8 text-center">
          "InternationalNational Competitors & Laureates"
        </h1>
      </div>
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 mx-auto">
          {people2.map((person) => (
            <li key={person.name}>
              <div className="flex items-center justify-center">
                <div>
                  <img
                    className=" border-2 border-red-500 border-solid w-100 h-100 max-w-xs sm:max-w-none sm:w-full md:max-w-none md:w-full lg:max-w-none lg:w-full rounded-full m-auto"
                    src={person.imageUrl}
                    alt=""
                    
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
                      borderImage: 'linear-gradient(to right, red, yellow, green) 2',
                      borderRadius: '50%', // Makes the image circular
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
