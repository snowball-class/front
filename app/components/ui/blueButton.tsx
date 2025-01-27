"use client";

interface BlueButtonProps {
  clickEvent: () => void;
  bgColor: "blue" | "white";
  text: string;
}

const BlueButton = (props: BlueButtonProps) => {
  const { clickEvent, bgColor, text } = props;
  return (
    <button
      onClick={clickEvent}
      className={
        `py-2 px-6 rounded-md` + bgColor === "blue"
          ? "bg-mainBlue"
          : "bg-transparent"
      }
    >
      {text}
    </button>
  );
};

export default BlueButton;
