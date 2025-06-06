import "./video-section.scss";

const title = "Hiddens Costs of DIY Mobile Device Lifecycle Management";

function VideoSection() {
  return (
    <div className="video-section-container">
      <div className="video-container">
        <div className="video-responsive">
          <iframe
            src="https://www.youtube.com/embed/Z1CiQes8DkM?si=QvjADEf3sSBXKfpK"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
