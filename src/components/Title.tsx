import { memo } from "react";

type A = {
  title: string;
  children: string;
  color: string;
};

const Title = memo(({ title, children, color }: A) => {
  return (
    <>
      <h1 style={{ color }}>{title}</h1>
      <h2>{children}</h2>
    </>
  );
});

export default Title;
