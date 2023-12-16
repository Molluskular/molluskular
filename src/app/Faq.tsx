import Image from "next/image";
import { useEffect, useState } from "react";

export default function Faq({ scroll }: any) {
  const qList = [
    {
      title: "What kind of personalization does Molluskular offer?",
      description:
        "Molluskular's personalization engine constructs a workout regime that's tailored to your specific goals and fitness level. It's your fitness journey, custom-fitted. Molluskular’s approach is hands-on, allowing you to shape your workout plans according to your goals, available time, and physical condition. Our system is built to craft a plan that evolves with your progress and adapts based on the information you provide.",
    },
    {
      title: "How does Molluskular understand my fitness needs in real-time?",
      description:
        "Molluskular adapts to the information you give it. Say you’ve got less time today than usual, you’re dealing with a new injury, or you want to focus on a different muscle group—just input those details, and Molluskular adjusts your workout plan accordingly. This bespoke adjustment ensures that your plan is always in tune with your current situation, helping you stay on track with your fitness goals even when life throws unexpected challenges your way.",
    },
  ];

  const [toggle, setToggle] = useState(0);

  const onToggleClick = (i: number) => {
    if ((~toggle & (1 << i)) == 0) {
      setToggle(toggle & ~(1 << i));
    } else {
      setToggle(toggle | (1 << i));
    }
  };

  return (
    <div className="page pg-05" ref={scroll}>
      <Image
        priority={true}
        src="/background/bg_03.png"
        alt="bg"
        className="bg"
        width={100}
        height={100}
        style={{
          position: "absolute",
          width: "60%",
          right: "-40%",
          maxWidth: "1000px",
        }}
      />
      <div className="txt-box">
        <span className="title txt-01">FAQ&apos;S</span>
        <Image
          priority={true}
          src="/background/txt_bg.png"
          alt="txt_bg"
          className="img"
          width={100}
          height={100}
          style={{
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </div>
      <div className="question-list">
        {qList.map((question, i) => (
          <div key={i} className="question-items">
            <div className="question-item" onClick={() => onToggleClick(i)}>
              <span className="txt-02">{question.title}</span>
              <Image
                priority={true}
                src="/arrow.png"
                className="down-img"
                alt="arrow"
                width={50}
                height={50}
                style={{
                  width: "20px",
                  marginLeft: "5px",
                }}
              />
            </div>
            <span className={`txt-03 ${~toggle & (1 << i) ? "closed" : ""}`}>
              {question.description}
            </span>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .pg-05 {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #191919;
            padding: 100px 0;
            position: relative;
            overflow: hidden;

            .txt-box {
              position: relative;
              margin-bottom: 50px;

              .txt-01 {
                position: relative;
                z-index: 1;
                font-size: 2em;
                font-weight: 300;
              }
            }

            .question-list {
              width: 80%;
              max-width: 800px;
              display: flex;
              flex-direction: column;
              position: relative;
              z-index: 2;

              .question-items {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 10px;
                overflow: hidden;

                .question-item {
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 15px 15px;
                  background-color: black;
                  border-radius: 10px 10px 0 0;
                  box-sizing: border-box;
                  cursor: pointer;
                  .txt-02 {
                    font-weight: 200;
                  }
                }

                .txt-03 {
                  width: 100%;
                  max-height: 500px;
                  padding: 10px 15px;
                  background-color: black;
                  transition-duration: 0.5s;
                  transition-timing-function: ease-out;
                  box-sizing: border-box;
                }

                .closed {
                  max-height: 0;
                  padding: 0 15px;
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
}
