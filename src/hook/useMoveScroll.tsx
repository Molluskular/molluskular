import { useRef } from "react";

export default function OnMoveScroll() {
  const element = useRef<HTMLDivElement>(null);
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: "smooth" });
  };
  return [element, onMoveToElement];
}
