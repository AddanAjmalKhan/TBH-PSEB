import user1 from "../../assets/reviews/user-1.png";
import user2 from "../../assets/reviews/user-2.png";

const ReviewsSection = () => {
  return (
    <section className="w-full bg-red-800 py-20">
      <div className="max-w-6xl mx-auto px-4 relative">

        {/* Section Title */}
        <h2 className="text-white text-4xl font-bold text-center tracking-wider mb-12">
  REVIEWS
</h2>


        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Review Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-md">
            <p className="text-gray-800 text-sm leading-relaxed mb-4">
              “Great initiative! The process was simple and the team was very responsive.”
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-sm">SARAH</p>
                <div className="text-yellow-400 text-sm">★★★★★</div>
              </div>

              <img
                src={user1}
                alt="Sarah"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Right Review Card */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg max-w-md ml-auto">
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              “I found a donor quickly through this website. Truly lifesaving work.”
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-sm text-white">SAAD</p>
                <div className="text-yellow-400 text-sm">★★★★★</div>
              </div>

              <img
                src={user2}
                alt="Saad"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
