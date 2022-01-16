import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const yValue = useMotionValue(0);
  // ! motionValue는 값이변해도 리렌더링 안시킴(state가 아니다 )
  console.log(yValue);

  // ! useFransform(value, value의input값, value의output값)
  const size = useTransform(yValue, [-400, 0, 200], [2, 1, 0.1]);
  const rotate = useTransform(yValue, [-400, 0, 200], [-360, 0, 360]);
  const gradient = useTransform(
    yValue,
    [-400, 0, 200],
    [
      "linear-gradient(90deg, rgb(5, 201, 250), rgb(85, 4, 235))",
      "linear-gradient(90deg, rgb(25, 250, 5), rgb(255, 231, 10))",
      "linear-gradient(90deg, rgb(117, 11, 167), rgb(66, 2, 240))",
    ]
  );
  // ! yValue의 움직임을 볼 수 있다.
  useEffect(() => {
    // yValue.onChange(() => {
    //   console.log(yValue.get());
    // });
    // size.onChange(() => {
    //   console.log(size.get());
    // });
  }, [yValue, size]);

  return (
    <Box
      style={{ y: yValue, scale: size, rotate, background: gradient }}
      drag="y"
      dragSnapToOrigin
    />
  );
}

const Box = styled(motion.div)`
  margin: 30px;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
