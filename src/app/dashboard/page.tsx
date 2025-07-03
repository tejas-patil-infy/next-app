"use client";
import React from "react";
import { Card } from "react-rodeo-lib";

export default function DashboardPage() {
  const cards = [
    { title: "Card 1", content: "This is my card content", type: "pie chart" },
    { title: "Card 2", content: "This is my card content", type: "pie chart" },
    {
      title: "Card 3",
      content: "This is my card content",
      type: "graph chart",
    },
    { title: "Card 4", content: "This is my card content", type: "bar chart" },
    { title: "Card 5", content: "This is my card content", type: "pie chart" },
    { title: "Card 6", content: "This is my card content", type: "bar chart" },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card, index) => (
          // <div
          //   key={index}
          //   className="bg-white rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.15)] p-3 overflow-hidden
          //             flex flex-col h-72 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-shadow duration-300
          //             border border-gray-200"
          // >
          //   {/* Card Header with Underline */}
          //   <div className="text-center p-2 pb-3 border-b-2 border-gray-200">
          //     <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
          //   </div>

          //   {/* Card Body */}
          //   <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          //     <p className="text-gray-600 mb-6">{card.content}</p>
          //     <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          //       {card.type}
          //     </span>
          //   </div>
          // </div>
          <Card title={card.title} content={card.content} type={card.type} key={index} />
        ))}
      </div>
    </div>
  );
}
