import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";

import Section from "../../../../components/section/section";

import "./faq-section.scss";

interface FaqItem {
  id: string;
  isActive: boolean;
  question: string;
  answer: string;
  height: string;
}

const initFaqsArr: FaqItem[] = [
  {
    id: "faq1",
    isActive: false,
    question: "What is TMS?",
    answer:
      "We are an MSP with exclusive support for iOS and Android platforms. We provide a mobile device lifecycle management solution that helps organizations manage, secure, and streamline the Corporate-owned and BYOD smartphone and tablet devices that touch their environment.",
    height: "0px",
  },
  {
    id: "faq2",
    isActive: false,
    question: "How will you manage my devices exactly?",
    answer:
      "Certainly the backbone of remotely managing your fleet will be via an MDM/UEM solution. We support and manage any and all multi-platform MDM/UEM products.",
    height: "0px",
  },
  {
    id: "faq3",
    isActive: false,
    question: "How do you prevent SMS-phishing?",
    answer:
      "This is through an app on each device that TMS will manage on your behalf for maximum security.",
    height: "0px",
  },
];

function FaqSection() {
  const [faqsArr, setFaqsArr] = useState<FaqItem[]>(initFaqsArr);
  const answerRefs = useRef(new Map());

  function setActiveQ(index) {
    setFaqsArr((prevFaqsArr) => {
      return prevFaqsArr.map((q, i) => {
        if (index === i) {
          const newIsActive = !q.isActive;
          let newHeight = "0px";
          if (newIsActive) {
            const contentElement = answerRefs.current.get(q.id);
            if (contentElement) {
              newHeight = `${contentElement.scrollHeight}px`;
            }
          }
          return { ...q, isActive: newIsActive, height: newHeight };
        } else {
          return { ...q, isActive: false, height: "0px" };
        }
      });
    });
  }

  return (
    <div className="faq-section-container">
      <Section id="faqs" title="Frequently asked questions">
        <div className="faq-questions-container">
          {faqsArr.map((q, i) => (
            <div key={q.id} className="faq-container">
              <div className="faq-header" onClick={() => setActiveQ(i)}>
                <div className="faq-header-question">{q.question}</div>
                <FontAwesomeIcon icon={q.isActive ? faMinus : faPlus} />
              </div>
              <div
                className="faq-answer"
                ref={(el) => {
                  if (el) {
                    answerRefs.current.set(q.id, el);
                  } else {
                    answerRefs.current.delete(q.id);
                  }
                }}
                style={{ maxHeight: q.height }}
              >
                {q.answer}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default FaqSection;
