"use client";

import { useState } from "react";

export default function Faq({ scroll }: any) {
  const qList = [
    {
      title: "What kind of personalization does Molluskular offer?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et ipsum eos veniam reiciendis non natus repellat voluptatum soluta iure cupiditate, quod animi doloremque voluptatibus? Voluptas reprehenderit pariatur hic! Dicta?",
    },
    {
      title: "How does Molluskular understand my fitness needs in real-time?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et ipsum eos veniam reiciendis non natus repellat voluptatum soluta iure cupiditate, quod animi doloremque voluptatibus? Voluptas reprehenderit pariatur hic! Dicta?",
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
      <img src="/background/bg_03.png" alt="bg" className="bg" />
      <div className="txt-box">
        <span className="title txt-01">FAQ&apos;S</span>
        <img src="/background/txt_bg.png" alt="txt_bg" className="img" />
      </div>
      <div className="question-list">
        {qList.map((question, i) => (
          <div key={i} className="question-items">
            <div className="question-item">
              <span className="txt-02">{question.title}</span>
              <img
                src="/down.png"
                className="down-img"
                onClick={() => onToggleClick(i)}
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
            .bg {
              position: absolute;
              width: 60%;
              right: -40%;
              max-width: 1000px;
            }

            .txt-box {
              position: relative;
              margin-bottom: 50px;

              .txt-01 {
                position: relative;
                z-index: 1;
                font-size: 2em;
                font-weight: 300;
              }

              .img {
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
              }
            }

            .question-list {
              width: 80%;
              max-width: 1000px;
              display: flex;
              flex-direction: column;
              position: relative;
              z-index: 2;

              .question-items {
                display: flex;
                flex-direction: column;
                margin-bottom: 10px;
                overflow: hidden;

                .question-item {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  width: 100%;
                  padding: 15px 15px;
                  background-color: black;
                  border-radius: 10px 10px 0 0;
                  box-sizing: border-box;

                  .txt-02 {
                    font-weight: 200;
                  }

                  .down-img {
                    width: 20px;
                    cursor: pointer;
                  }
                }

                .txt-03 {
                  width: 100%;
                  height: 100px;
                  padding: 10px 15px;
                  background-color: black;
                  transition-duration: 1s;
                  box-sizing: border-box;
                }

                .closed {
                  height: 0;
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
