import { PropsWithChildren } from "react";

import ContentContainer from "../content-container/content-container";

import "./section.scss";

interface SectionProps {
  className?: string;
  id?: string;
  title: string;
}

function Section({ children, ...props }: PropsWithChildren<SectionProps>) {
  const { className, id, title } = props;
  return (
    <div className={className} id={id}>
      <ContentContainer>
        <div className="section-container">
          <div className="section-title">{title}</div>
          {children}
        </div>
      </ContentContainer>
    </div>
  );
}

export default Section;
