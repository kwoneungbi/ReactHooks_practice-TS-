import { ReactNode } from "react";

type A = {
  borderWidth: string;
  borderColor: string;
  borderStyle: string;
  padding: string;
  margin: string;
  children: ReactNode;
};

const Box = ({
  borderWidth,
  borderColor,
  borderStyle,
  padding,
  margin,
  children,
}: A) => {
  return (
    <>
      <div style={{ borderWidth, borderColor, borderStyle, padding, margin }}>
        {children}
      </div>
    </>
  );
};

export default Box;
