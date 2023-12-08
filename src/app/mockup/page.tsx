"use client";

import Link from "next/link";
import OpenAI from "openai";
import React, { useState } from "react";

export default function Home() {
  const [excerciseList, setExcerciseList] = useState([
    "squat",
    "lunge",
    "leg press",
  ]);
  const [recommendedExcercise, setRecommendedExcercise] = useState([""]);
  const [question, setQuestion] = useState("");
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const onChange = (e) => {
    setQuestion(e.target.value);
  };

  const makeContent = () => {
    let todayExcerciseList = "";
    excerciseList.forEach((excecrcise) => {
      todayExcerciseList = todayExcerciseList + excecrcise + ",";
    });
    todayExcerciseList = todayExcerciseList.slice(0, -1);

    const content = `
    Today's my leg excercise routine is ${todayExcerciseList}.
    ${question}.
    Can you recommend other excercise?
    Answer must be just excercise name and put "-" in front of the excercise name.
    If question is strange or you can't answer excercise name, send me just "x" as a result without "-".
    `;
    return content;
  };

  const processAnswer = (answer: string | null) => {
    if (answer != null) {
      const matches = answer.match(/-(.*?)\n/g);

      if (matches) {
        let extractedStrings = matches.map((match) =>
          match.substring(1, match.length - 1)
        );

        console.log(extractedStrings);
        setRecommendedExcercise(extractedStrings);
      } else {
        alert("Please ask again");
      }
    }
  };

  const onSubmit = async () => {
    const content: string = makeContent();
    console.log(content);

    if (question.length < 10) alert("too short");
    else {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content }],
        model: "gpt-3.5-turbo",
      });

      if (completion.choices[0].message.content != "x") {
        processAnswer(completion.choices[0].message.content);
      } else {
        alert("Please ask other question");
      }

      setQuestion("");
    }
  };

  const onDelete = (idx: number) => {
    setExcerciseList(excerciseList.filter((_, index) => index !== idx));
  };
  const onPlus = (idx: number) => {
    setExcerciseList([...excerciseList, recommendedExcercise[idx]]);
    setRecommendedExcercise(
      recommendedExcercise.filter((_, index) => index !== idx)
    );
  };

  return (
    <div className="mockup">
      <div className="routine-box">
        <div className="top">
          <div className="routine">
            {excerciseList.map((excercise, i) => (
              <div className="excercise-item">
                <span>{excercise}</span>
                <img
                  onClick={() => onDelete(i)}
                  src={"/remove.png"}
                  className="remove"
                ></img>
              </div>
            ))}
          </div>
          <div className="recommended">
            {recommendedExcercise.map(
              (excercise, i) =>
                excercise != "" && (
                  <div className="recommended-excercise-item">
                    <span>{excercise}</span>
                    <img
                      onClick={() => onPlus(i)}
                      src={"/remove.png"}
                      className="remove"
                    ></img>
                  </div>
                )
            )}
          </div>
        </div>
        <div className="bottom">
          <input
            onChange={onChange}
            type="text"
            className="input"
            placeholder="type your condition"
          ></input>
          <img
            src={"/send.png"}
            alt="send"
            onClick={onSubmit}
            className="button"
          ></img>
        </div>
      </div>
      <style jsx>
        {`
          .mockup {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;

            .routine-box {
              width: 700px;
              height: 700px;
              display: flex;
              flex-direction: column;
              .top {
                flex: 1;
                display: flex;

                .routine {
                  flex: 1;
                  background-color: #e5c1c5;
                  padding: 10px;
                  .excercise-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 30px;
                    border-radius: 10px;
                    margin-bottom: 10px;

                    .remove {
                      width: 15px;
                    }
                  }
                }
                .recommended {
                  width: 200px;
                  display: flex;
                  flex-direction: column;
                  background-color: #c3e2dd;
                  padding: 10px;

                  .recommended-excercise-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: fit-content;
                    border-radius: 10px;
                    margin-bottom: 15px;
                  }

                  .remove {
                    width: 15px;
                    transform: rotate(45deg);
                  }
                }
              }

              .bottom {
                width: 100%;
                height: 50px;
                display: flex;
                padding: 2px 10px;
                background-color: white;
                border: 1px solid black;

                .input {
                  width: 100%;
                  height: 100%;
                  background-color: transparent;
                }
                .button {
                  cursor: pointer;
                  transform: scale(0.7);
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
}
