import "./content-page.scss";

interface ContentPageProps {
  title: string;
  children: React.ReactNode;
}

function ContentPage(props: ContentPageProps) {
  const { title, children } = props;

  return (
    <div className="content-page-container">
      <div className="content-page-inner-container">
        <div className="content-page-title">{title}</div>
        {children}
      </div>
    </div>
  );
}

export default ContentPage;
