import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import StyledStarsCanvas from "../canvas/Stars";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
  background: linear-gradient(
    135deg,
    #5335cf 0%,
    #de005e 25%,
    #f66e48 50%,
    #de005e 75%,
    #5335cf 100%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  background: ${({ active, theme }) =>
    active === "true" ? theme.primary + 20 : "transparent"}; /* Updated */
`;
const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="Projects">
      <StyledStarsCanvas color={"#43a047"} size={0.002} />
      <Wrapper>
        <Title>Projects</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>

        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all" ? "true" : "false"} /* Convert to string */
            onClick={() => setToggle("all")}
          >
            ALL
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={
              toggle === "web app" ? "true" : "false"
            } /* Convert to string */
            onClick={() => setToggle("web app")}
          >
            WEB APP"S
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={
              toggle === "android app" ? "true" : "false"
            } /* Convert to string */
            onClick={() => setToggle("android app")}
          >
            ANDROID APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={
              toggle === "machine learning" ? "true" : "false"
            } /* Convert to string */
            onClick={() => setToggle("machine learning")}
          >
            MACHINE LEARNING
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer>
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} project={project} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard
                key={`filtered-project-${index}`}
                project={project}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
