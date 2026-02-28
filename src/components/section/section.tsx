import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons/faCaretLeft";

import ContentContainer from "../content-container/content-container";

import "./section.scss";

interface SectionProps {
  backBtnLink?: string;
  className?: string;
  id?: string;
  title: string;
}

function Section({ children, ...props }: PropsWithChildren<SectionProps>) {
  const { backBtnLink, className, id, title } = props;
  return (
    <div className={className} id={id}>
      <ContentContainer>
        <div className="section-container">
          {backBtnLink && (
            <div className="section-back-btn-container">
              <Link className="section-back-btn" to={backBtnLink}>
                <FontAwesomeIcon
                  className="section-back-icon"
                  icon={faCaretLeft}
                />{" "}
                back
              </Link>
            </div>
          )}
          <div className="section-title">{title}</div>
          {children}
        </div>
      </ContentContainer>
    </div>
  );
}

export default Section;
