import React from "react";

const Awards=()=>{
    const Chatrpati = [
        {
          name: "Damini Rambhad Barapatre",
          role: "Shiv Chhatrapati Award winner of 2020",
          imageUrl: "./fencerimg/scdamini.jpg",
        }]
    
    const DSA = [
        {
          name: "Damini Rambhad Barapatre",
          role: "District Sports Award Winner of 2018-2019",
          imageUrl: "./fencerimg/scdamini.jpg",
        },
        {
          name: "Shruti Dharmendra Joshi",
          role: "District Sports Award Winner of 2023",
          imageUrl: "./fencerimg/shruti.jpeg",
        }]
    
    const KBA = [
        {
          name: "Damini Rambhad Barapatre",
          role: "Krida Bhushan Award Winner  of KKM-4 2022",
          imageUrl: "./fencerimg/scdamini.jpg",
        },
        {
          name: "Shruti Dharmendra Joshi",
          role: "Krida Bhushan Award winner of KKM-5 2023",
          imageUrl: "./fencerimg/shruti.jpeg",
        }]
    
    return(
        <div>
 <div>
        <h1 className="text-3xl font-bold mt-20 mb-8 py-8 text-center">
          "Shiv Chhatrapati Award Winner"
        </h1>
      </div>
      <div>
        <ul className="  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 mx-auto">
          {Chatrpati.map((person) => (
            <li key={person.name}>
              <div className="flex items-center justify-center">
                <div>
                  <img
                    className=" border-2 border-red-500 border-solid w-80 h-80 max-w-xs sm:max-w-none sm:w-full md:max-w-none md:w-full lg:max-w-none lg:w-full rounded-full m-auto"
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

      {/* For District sports awards */}

      <div>
        <h1 className="text-3xl font-bold mt-20 mb-8 py-8 text-center">
          "District Sports Award Winner"
        </h1>
      </div>
      <div>
        <ul className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-22 m-auto">
          {DSA.map((person) => (
            <li key={person.name}>
              <div className="flex items-center justify-center">
                <div>
                  <img
                    className=" border-2 border-red-500 border-solid w-80 h-80 max-w-xs sm:max-w-none sm:w-full md:max-w-none md:w-full lg:max-w-none lg:w-full rounded-full m-auto"
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
      {/* For krida bhushan  awards */}
      <div>
        <h1 className=" text-3xl font-bold mt-20 mb-8 py-8 text-center">
          "Krida Bhushan Award Winner"
        </h1>
      </div>
      <div>
        <ul className="grid grid-cols-2  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mx-auto">
          {KBA.map((person) => (
            <li key={person.name}>
              <div className="flex items-center justify-center">
                <div>
                  <img
                    className=" border-2 border-red-500 border-solid w-80 h-80 max-w-xs sm:max-w-none sm:w-full md:max-w-none md:w-full lg:max-w-none lg:w-full rounded-full m-auto"
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
        </div>
    )
}

export{Awards}