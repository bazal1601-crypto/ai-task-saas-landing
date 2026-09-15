import { useState } from "react";
import "./FAQ.css";

const faqs = [
  "What is Skillflow and how does it work?",
  "How quickly can I set up training content?",
  "Can I integrate Skillflow with other tools?",
  "Is there a limit to how many users I can add?",
  "Can I try Skillflow before purchasing?",
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="faq-section">

      <div className="section-heading">

        <div className="eyebrow">
          ✦ &nbsp; Frequently Asked Questions
        </div>

        <h2>
          Frequently Asked
          <br />
          Questions
        </h2>

      </div>


      <div className="faq-list">

        {faqs.map((question, index) => (

          <div
            className={`faq-item ${
              openFaq === index ? "faq-open" : ""
            }`}
            key={question}
          >

            <button
              onClick={() =>
                setOpenFaq(
                  openFaq === index ? -1 : index
                )
              }
            >

              <span>{question}</span>

              <strong>
                {openFaq === index ? "−" : "+"}
              </strong>

            </button>

            {openFaq === index && (

              <p>
                Skillflow helps teams create effective training
                workflows, organize knowledge, track performance and
                improve learning experiences from one simple platform.
              </p>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}