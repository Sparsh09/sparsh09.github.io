import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
  Img
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Sparsh09">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://in.linkedin.com/in/sparsh29">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/Sparsh_Mehta_">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://opensea.io/sparsh_mehta">
        <Img src="assets/opensea.png" />
      </SocialIcons>

    </Div3>
  </Container>
);

export default Header;

    // <Link href="/">
    //   <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px' }}>
    //     <DiCssdeck size="3rem" />
    //     <Span>Portfolio</Span>
    //   </a>
    // </Link>