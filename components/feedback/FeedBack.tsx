'use client'
import './FeedBack.css'
import { useState } from "react";
import "./Feedback.css";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const Data = [
  {
    question: "What is Histudy? How does it work?",
    description:
      "You can run Histudy easily. Any School, University, or College can use this Histudy education template for their educational purposes. A university can run its online learning management system with the Histudy education template.",
  },
  {
    question: "How can I get customer support?",
    description:
      "After purchasing the product, if you need any support, you can contact us by sending an email to rainbowit10@gmail.com.",
  },
  {
    question:
      "Can I get updates regularly, and for how long do I get updates?",
    description:
      "Yes, we regularly update Histudy. You can get updates any time. Next time we will come with more features. You can get updates unlimited times. Our dedicated team works for updates.",
  },
];

export default function FeedBack() {
  const [expand, setExpand] = useState<number | null>(null);

  const handleExpand = (index: number) => {
    setExpand(expand === index ? null : index); 
  };

  return (
    <div className="feedback-content">
      <div className="feedback-top">
        <button className="feedback-head-button">EDUCATION FOR EVERYONE</button>
        <h1 className="feedback-heading">Student's Feedback</h1>
      </div>

      <div className="feedback-row">
        <div className="feedback-question">
          {Data.map((data, index) => (
            <div key={index} className="feedback-item">
              <button
                className={`feedback-button ${
                    expand === index ? "feedback-button-active" : ""
                  }`}
                onClick={() => handleExpand(index)}
              >
                {data.question}{" "}
                {expand === index ? <IoIosRemove className='add-expand-icon'/> : <IoIosAdd className='add-expand-icon' />}
              </button>
              {expand === index && (
                <p className="feedback-description">{data.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
