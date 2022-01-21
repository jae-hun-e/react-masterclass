import styled from "styled-components";
import { motion } from "framer-motion";

const boxVariants = {
  hover: {
    scale: 1.5,
    rotateZ: 90,
  },
  click: {
    scale: 1,
    borderRadius: "100px",
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return <Box variants={boxVariants} whileHover="hover" whileTap="click" />;
}

const Box = styled(motion.div)`
  margin: 30px;
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
