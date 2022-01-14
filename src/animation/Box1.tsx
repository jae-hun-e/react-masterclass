import styled from "styled-components";
import { motion } from "framer-motion";

const boxVariants = {
  start: {
    scale: 0,
  },
  end: {
    scale: 1,
    rotateZ: 360,
    transition: {
      type: "spring",
      duration: 2,
      bounce: 0.5,
    },
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return <Box variants={boxVariants} initial="start" animate="end"></Box>;
}

const Box = styled(motion.div)`
  margin: 30px;
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
