import styled from "styled-components";
import { motion } from "framer-motion";

const Item = styled(motion.li)`
  color: #fff;
  font-size: 18px;
  margin-bottom: 18px;

  :last-child {
    margin-bottom: 0;
  }
`;

export default Item;
