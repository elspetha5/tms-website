import Button from "../../library/button/button";
import ContentPage from "../../components/content-page/content-page";

function PrivacyPolicy() {
  return (
    <ContentPage title="Privacy Policy">
      <div
        style={{
          width: "600px",
          height: "20vh",
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <div>
          <Button
            href="https://firebasestorage.googleapis.com/v0/b/total-mobility-solution-6c7cc.firebasestorage.app/o/TMS%20Privacy%20Policy.pdf?alt=media&token=58ac9fb1-c120-4095-8872-7a383567cd2a"
            isPrimary
          >
            Download PDF
          </Button>
        </div>
      </div>
    </ContentPage>
  );
}

export default PrivacyPolicy;
