"use client";

import OpenAI from "openai";
import React, { useEffect, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import allExcercistList from "./excercise";
import Image from "next/image";

export default function Home() {
  const ItemType = "DRAGGABLE_ITEM";
  const [excerciseList, setExcerciseList] = useState(allExcercistList.leg);
  const [recommendedExcercise, setRecommendedExcercise] = useState([""]);
  const [excerciseType, setExcerciseType] = useState("leg");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  useEffect(() => {
    switch (excerciseType) {
      case "leg":
        setExcerciseList(allExcercistList.leg);
        break;
      case "chest":
        setExcerciseList(allExcercistList.chest);
        break;
      case "back":
        setExcerciseList(allExcercistList.back);
        break;
      case "shoulder":
        setExcerciseList(allExcercistList.shoulder);
        break;
      default:
        break;
    }
  }, [excerciseType]);

  //drag start
  const DraggableItem = ({ id, text, index, moveItem }: any) => {
    const [, ref] = useDrag({
      type: ItemType,
      item: { id, index },
    });

    const [, drop] = useDrop({
      accept: ItemType,
      hover: (draggedItem: any) => {
        if (draggedItem.index !== index) {
          moveItem(draggedItem.index, index);
          draggedItem.index = index;
        }
      },
    });

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "30px",
          marginBottom: "10px",
          width: "100%",
          cursor: "pointer",
          backgroundColor: "white",
          padding: "5px 10px",
        }}
        className="excercise-item"
        ref={(node) => ref(drop(node))}
      >
        <span>{text}</span>
        <Image
          priority={true}
          width={100}
          height={100}
          style={{ width: "15px", cursor: "pointer" }}
          onClick={() => onDelete(index)}
          src={"/remove.png"}
          className="remove"
          alt="remove"
          id="remove"
        ></Image>
      </div>
    );
  };

  const DraggableList = ({ items }: any) => {
    const [list, setList] = useState(items);

    const moveItem = (fromIndex: any, toIndex: any) => {
      const updatedList = [...list];
      const [movedItem] = updatedList.splice(fromIndex, 1);
      updatedList.splice(toIndex, 0, movedItem);
      setList(updatedList);
      setExcerciseList(updatedList);
    };

    return (
      <div className="draggable">
        {list.map((item: any, index: any) => (
          <DraggableItem
            key={item.id}
            id={item.id}
            text={item.text}
            index={index}
            moveItem={moveItem}
          />
        ))}
      </div>
    );
  };
  //drag end
  const onChange = (e: any) => {
    setQuestion(e.target.value);
  };

  const makeContent = () => {
    let todayExcerciseList = "";
    excerciseList.forEach((excecrcise) => {
      todayExcerciseList = todayExcerciseList + excecrcise + ",";
    });
    todayExcerciseList = todayExcerciseList.slice(0, -1);

    const content = `If I tell you the exercise part and my condition, let me know some names of excercise for my condition without rest . For output, print only the exercise name by adding “-” in front.
    excercise part: ${excerciseType}
    my condition: ${question}`;

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
    if (loading) {
      alert("wait for a moment");
      return;
    }
    const content: string = makeContent();

    if (question.length < 10) {
      alert("too short");
      return;
    } else {
      setLoading(true);
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
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  };

  const onDelete = (idx: number) => {
    setExcerciseList(excerciseList.filter((_, index) => index !== idx));
  };
  const onPlus = (idx: number) => {
    setExcerciseList([
      ...excerciseList,
      { id: excerciseList.length + 1, text: recommendedExcercise[idx] },
    ]);
    setRecommendedExcercise(
      recommendedExcercise.filter((_, index) => index !== idx)
    );
  };

  const onTypeChange = (e: any) => {
    setExcerciseType(e.target.value);
  };
  return (
    <div className="mockup">
      <div className="routine-box">
        <div>
          <select
            onChange={onTypeChange}
            name="cars"
            id="cars"
            className="select-box"
          >
            <option value="leg">leg</option>
            <option value="chest">chest</option>
            <option value="back">back</option>
            <option value="shoulder">shoulder</option>
          </select>
        </div>
        <div className="top">
          <div className="routine">
            <span className="title">routine</span>
            {/* {excerciseList.map((excercise, i) => (
              <div className="excercise-item">
                <span>{excercise}</span>
                <img
                  onClick={() => onDelete(i)}
                  src={"/remove.png"}
                  className="remove"
                ></img>
              </div>
            ))} */}
            <DndProvider backend={HTML5Backend}>
              <DraggableList items={excerciseList} />
            </DndProvider>
          </div>
          <div className="recommended">
            <span className="title">recommended</span>
            {recommendedExcercise.map(
              (excercise, i) =>
                excercise != "" && (
                  <div key={i} className="recommended-excercise-item">
                    <span>{excercise}</span>
                    <Image
                      priority={true}
                      onClick={() => onPlus(i)}
                      src={"/remove.png"}
                      alt="remove"
                      className="remove"
                      width={100}
                      height={100}
                      style={{
                        width: "15px",
                        transform: "rotate(45deg)",
                        cursor: "pointer",
                      }}
                    ></Image>
                  </div>
                )
            )}
          </div>
        </div>
        <div className="bottom">
          <input
            onChange={onChange}
            value={question}
            type="text"
            className="input"
            placeholder="type your condition"
          ></input>
          <Image
            priority={true}
            src={"/send.png"}
            alt="send"
            onClick={onSubmit}
            className="button"
            width={45}
            height={70}
            style={{
              cursor: "pointer",
              transform: "scale(0.7)",
            }}
          ></Image>
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

              .select-box{
                border: 1px solid black;
                outline: none;
              }
              .top {
                flex: 1;
                display: flex;

                .title{
                  font-size: 1.2em;
                  line-height: 1.5em;
                }

                .routine {
                  flex: 1;
                  background-color: #e5c1c5;
                  padding: 10px;

                  .draggable {
                    display: flex;
                    width: 100%;
                    height: 100%;

                    {/* .excercise-item {
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      height: 30px;
                      border-radius: 10px;
                      margin-bottom: 10px;

                      .remove {
                        width: 15px;
                      } */}
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
              }
            }
          }
        `}
      </style>
    </div>
  );
}
