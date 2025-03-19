import React, { useState } from "react";
import Foto from "../../../assets/Foto.svg"

const Review = () => {
  // State to track which reviews are expanded
  const [expandedReviews, setExpandedReviews] = useState([]);

  // Toggle review expansion
  const toggleReview = (index) => {
    setExpandedReviews(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  // Sample review data
  const reviews = [
    {
      id: 1,
      productName: "Comb hair dryer BRAUN AS 720",
      title: "A Game-Changer for My Wife's Hair Care Routine (and Our Marriage)",
      content: "I'm not exactly the target audience for hair styling products, but I'm writing this review because my wife's enthusiasm for the Dyson Airwrap™ Multi-Styler Complete Long is simply infectious. She's been using it for a few weeks now, and I've witnessed a transformation – not just in her hair, but also in her morning routine's stress levels."
    },
    {
      id: 2,
      productName: "Comb hair dryer BRAUN AS 720",
      title: "A Game-Changer for My Wife's Hair Care Routine (and Our Marriage)",
      content: "I'm not exactly the target audience for hair styling products, but I'm writing this review because my wife's enthusiasm for the Dyson Airwrap™ Multi-Styler Complete Long is simply infectious. She's been using it for a few weeks now, and I've witnessed a transformation – not just in her hair, but also in her morning routine's stress levels."
    },
    {
      id: 3,
      productName: "Comb hair dryer BRAUN AS 720",
      title: "A Game-Changer for My Wife's Hair Care Routine (and Our Marriage)",
      content: "I'm not exactly the target audience for hair styling products, but I'm writing this review because my wife's enthusiasm for the Dyson Airwrap™ Multi-Styler Complete Long is simply infectious. She's been using it for a few weeks now, and I've witnessed a transformation – not just in her hair, but also in her morning routine's stress levels."
    },
    {
      id: 4,
      productName: "Comb hair dryer BRAUN AS 720",
      title: "A Game-Changer for My Wife's Hair Care Routine (and Our Marriage)",
      content: "I'm not exactly the target audience for hair styling products, but I'm writing this review because my wife's enthusiasm for the Dyson Airwrap™ Multi-Styler Complete Long is simply infectious. She's been using it for a few weeks now, and I've witnessed a transformation – not just in her hair, but also in her morning routine's stress levels."
    }
  ];

  // Simple chevron icons
  const ChevronDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );

  const ChevronUp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 15-6-6-6 6"/>
    </svg>
  );

  return (
    <div className="bg-[#F6F6F6] min-h-screen flex flex-col items-center py-4">
      <div className="w-full max-w-[1200px] flex flex-col gap-1">
        {/* Review items */}
        {reviews.map((review, index) => (
          <div key={review.id} className="w-full">
            {/* Review header - always visible */}
            <div className="bg-white flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <img 
                    src={Foto} 
                    alt="Hair dryer" 
                    className="object-contain w-16 h-16"
                  />
                </div>
                <span className="text-gray-800 font-medium">{review.productName}</span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className={expandedReviews.includes(index) ? "text-gray-800" : "text-gray-500"}>{review.title}</span>
                <button 
                  onClick={() => toggleReview(index)}
                  className="text-gray-500"
                >
                  {expandedReviews.includes(index) ? <ChevronUp /> : <ChevronDown />}
                </button>
              </div>
            </div>
            
            {/* Expanded review content */}
            {expandedReviews.includes(index) && (
              <div className="bg-white p-6 mb-1">
                <h2 className="text-xl font-medium text-gray-800 mb-4">{review.title}</h2>
                <p className="text-gray-700 mb-6">{review.content}</p>
                
                {/* Before/After images */}
                <div className="flex gap-[24px]  mb-4">
                  <div className="">
                    <img 
                      src={Foto} 
                      alt="Before hair styling" 
                      className="object-cover w rounded-md w-[100px]"
                    />
                  </div>
                  <div className="w-1/2">
                    <img 
                      src={Foto}
                      alt="After hair styling" 
                      className="object-cover rounded-md w-[100px]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;