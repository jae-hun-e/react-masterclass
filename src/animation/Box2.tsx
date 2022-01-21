import styled from "styled-components";
import { motion } from "framer-motion";

const boxVariants = {
  start: {
    scale: 0,
    opacity: 0,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const circleVariants = {
  start: {
    scale: 0,
    y: 30,
  },
  end: {
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Box variants={boxVariants} initial="start" animate="end">
      <Circle variants={circleVariants} />
      <Circle variants={circleVariants} />
      <Circle variants={circleVariants} />
      <Circle variants={circleVariants} />
    </Box>
  );
}

const Box = styled(motion.div)`
  margin: 30px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  place-self: center;
`;
