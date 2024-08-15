const Map = () => {
  return (
    <div className="px-16 mt-20 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.863733535207!2d90.37353881267663!3d23.766417096629976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a27cff4725%3A0xc0f3561e4e5e9f7d!2sICT%20Division!5e0!3m2!1sen!2sbd!4v1723721079362!5m2!1sen!2sbd"
        width="100%"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* <div className="mt-20">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YFGNXpErBoY?si=bHiPzvUWfxVMgr7g"
          title="YouTube video player"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          refErrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div> */}
    </div>
  );
};

export default Map;
