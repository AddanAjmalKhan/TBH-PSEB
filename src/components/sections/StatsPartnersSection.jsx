import React from "react";

import partner1 from "../../assets/partners/partner1.png";
import partner2 from "../../assets/partners/partner2.png";
import partner3 from "../../assets/partners/partner3.png";
import partner4 from "../../assets/partners/partner4.png";
import partner5 from "../../assets/partners/partner5.png";
import partner6 from "../../assets/partners/partner6.png";

const stats = [
  { value: "39,000+", label: "Cases Closed" },
  { value: "250+", label: "Blood Camps" },
  { value: "950+", label: "Other Ground Events" },
  { value: "10,000+", label: "Volunteers" },
  { value: "30+", label: "District Teams" },
  { value: "50+", label: "Institute Teams" },
];

const partners = [partner1, partner2, partner3, partner4, partner5, partner6];

const StatsPartnersSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Stats */}
        <div className="bg-white rounded-xl shadow-lg p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <h4 className="text-red-700 text-2xl font-bold">{item.value}</h4>
              <p className="text-sm text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Partnerships / Collaborations
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {partners.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-h-16 mx-auto grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsPartnersSection;
