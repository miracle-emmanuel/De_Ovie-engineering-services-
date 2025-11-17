import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14199.795893110524!2d3.3494565372704814!3d6.679871873581164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sng!4v1762535641046!5m2!1sen!2sng"
        width="600"
        height="450"
        style={{border: "0"}}
        allowFullScreen=""
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Responsive Google Map"
        className=" w-full"
      ></iframe>
    </div>
  );
};

export default Map;
