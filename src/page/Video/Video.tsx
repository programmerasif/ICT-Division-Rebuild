import "./video.css";
const Video = () => {
  return (
    <div className="mt-20 px-2 md:px-8 xl:px-16">
      <div className="videoBgImage">
     
        <iframe
          className="border-2 rounded-md"
          width="90%"
          height="420"
          src="https://www.youtube.com/embed/TNQsmPf24go?si=aaCxv2SN2SnN44lb"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
