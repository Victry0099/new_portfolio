// import React from "react";
// import { VerticalTimeline } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import styled from "styled-components";
// import { experiences } from "../../data/constants";
// import ExperienceCard from "../cards/ExperienceCard";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-contnet: center;
//   margin-top: 50px;
//   position: rlative;
//   z-index: 1;
//   align-items: center;
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1100px;
//   gap: 12px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;
// const Title = styled.div`
//   font-size: 52px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;
//   background: linear-gradient(
//     135deg,
//     #5335cf 0%,
//     #de005e 25%,
//     #f66e48 50%,
//     #de005e 75%,
//     #5335cf 100%
//   );

//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
// `;
// const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;
// const StyledVerticalTimeline = styled(VerticalTimeline)`
//   background: linear-gradient(135deg, purple, green, aqua);
//   padding: 10px;
//   border-radius: 15px;
// `;

// const Experience = () => {
//   return (
//     <Container id="Experience">
//       <Wrapper>
//         <Title>Experience</Title>
//         <Desc
//           style={{
//             marginBottom: "40px",
//           }}
//         >
//           My work experience as a software engineer and working on different
//           companies and projects.
//         </Desc>

//         <VerticalTimeline>
//           {experiences.map((experience, index) => (
//             <ExperienceCard
//               key={`experience-${index}`}
//               experience={experience}
//             />
//           ))}
//         </VerticalTimeline>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Experience;

import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import ExperienceCard from "../cards/ExperienceCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
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
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
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

const StyledVerticalTimeline = styled(VerticalTimeline)`
  color: blue;
`;

const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          My work experience as a software engineer and working on different
          companies and projects.
        </Desc>

        <StyledVerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </StyledVerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;
