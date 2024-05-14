import React from "react";

export default function Service(props) {
  const data = {
    planning: {
      heading: `"Strategic Planning: Laying the Foundation for Design Excellence"`,
      description: `Each interior style has its own story. When talking about transform your home, we do not only redecorate your interior, we also transform the atmosphere of your home by helping you understand your home, understand the feeling that your new interior will bring with it.`,
      descrip: `Each interior style has its own story. When talking about transform your home, we do not only redecorate your interior, we also transform the atmosphere of your home by helping you understand your home, understand the feeling that your new interior will bring with it.`, 
      img: `/images/Before image.png`,
      cardHeading: `Our Planning Procces`,
      imgs: [
        "/images/Steps frame.png",
        "/images/Steps frame (1).png",
        "/images/Steps frame (2).png",
      ],
    },
    visualization: {
      heading: `"3D Visualization: Bringing Your Vision to Life with Stunning Realism"`,
      description: `Our 3D visualization service is at the forefront of architectural and interior design, offering a vivid and immersive experience that transforms your ideas into visual reality. By utilizing cutting-edge technology and artistic expertise, we create detailed, high-resolution 3D models and animations that provide a realistic preview of the finished spaces.`,
      descrip: `Whether you’re looking to visualize a residential, commercial, or landscape project, our 3D visualization service ensures that every angle, texture, and lighting effect is captured with precision, providing a clear and captivating representation of the proposed outcome.`,
      img: `/images/visualization.png`,
      cardHeading: `3D Visual Designs`,
      imgs: [
        "/images/Rectangle 33.png",
        "/images/Rectangle 33 (1).png",
        "/images/Rectangle 33 (2).png",
      ],
    },
    animation: {
      heading: `"Design Elevation: Elevating Aesthetics with Precision and Innovation"`,
      description: `Our Design Elevation service focuses on creating distinctive and sophisticated exterior elevations that blend seamlessly with the surrounding environment while reflecting our clients' unique visions. By emphasizing architectural details, material selection, and proportional harmony, we ensure that each elevation not only meets but exceeds aesthetic and functional expectations.`,
      descrip: `Whether it’s a residential home or a commercial complex, our design elevations are crafted to inspire and impress at first glance.`,
      img: `/images/Before image (1).png`,
      cardHeading: `Design Elevations`,
      imgs: [
        "/images/Rectangle.png",
        "/images/Rectangle 33 (3).png",
        "/images/Rectangle 33 (4).png",
        "/images/Rectangle 33 (5).png",
        "/images/Rectangle 33 (6).png",
        "/images/Rectangle 33 (7).png",
      ],
    },
  };
  return (
    <div className="servicesBg">
      <div className="container py-5 text-center">
        <div className="row p-lg-5">
          <div className="col-12 p-5">
            <h3 >{data[props.type].heading}</h3>
            <p className="px-lg-5">{data[props.type].description}</p>
            <p className="px-lg-5 mx-lg-5">{data[props.type].descrip}</p>
            <div className="px-lg-5"> <img src={data[props.type].img} style={{ width: "100%" }} /></div>
          </div>

        </div>
        {/* <div className="content-div">
        <p className="servce-heading">{data[props.type].heading}</p>
        <p className="service-description">{data[props.type].description}</p>
      
      </div> */}

        {/* <div className="row">
        {data[props.type].imgs.map((img, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12 cat-body">
            <img className="cat-img" src={img} />
          </div>
        ))}
      </div> */}
      </div>
      <div className="container-fluid p-5" style={{ background: 'white' }}>
        <div className="container text-center">
          <h3>{data[props.type].cardHeading}</h3>
          <div className="row">
            {data[props.type].imgs.map((img, index) => (
              <div className="col-lg-4 col-md-12 p-4">
                <img src={img} style={{ width: '100%' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
