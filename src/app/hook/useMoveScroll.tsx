import { useRef } from "react";

export function onMoveScroll() {
  const element = useRef<HTMLDivElement>(null);
  const onMoveToElement = () => {
    element.current?.scroll({ behavior: "smooth", block: "start" });
  };
  return { element, onMoveToElement };
}
