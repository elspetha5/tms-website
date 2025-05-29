import { PropsWithChildren } from "react";

import ContentContainer from "../content-container/content-container";

import "./section.scss";

interface SectionProps {
  id?: string;
  title: string;
}

function Section({ children, ...props }: PropsWithChildren<SectionProps>) {
  const { id, title } = props;
  return (
    <div id={id}>
      <ContentContainer>
        <div className="home-section-container">
          <div className="home-section-title">{title}</div>
          {children}
        </div>
      </ContentContainer>
    </div>
  );
}

export default Section;
