import "./video.css";
const Video = () => {
  return (
    <div className="md:mt-20  mt-10 px-2 md:px-8 xl:px-16">
      <div className="videoBgImage">
     
        <iframe
          className="border-2 rounded-md md:w-[70%] h-[300px] md:h-[400px] "
          width=""
          height=""
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
