import { nanoid } from "nanoid";
import "./slider.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import { description_data } from "../../../Redux/Data/Action";
import { useNavigate } from "react-router-dom";

let slideshow = [
  "https://n.nordstrommedia.com/it/553ab505-6370-41db-ac07-4c5dac56f182.jpeg?h=720&w=1608",
  "https://n.nordstrommedia.com/it/9171237c-513e-4ff5-bff3-7feb7290cc86.png?h=720&w=1608",
  "https://n.nordstrommedia.com/it/26f24d0a-22d4-4d92-a3dd-6ace436cb12c.jpeg?h=720&w=1608",
];

let secondslide = [
  "https://n.nordstrommedia.com/id/920fd92e-e53f-4d5a-aa86-5547c73b55a6.jpeg?h=200&w=1608",
  "https://n.nordstrommedia.com/id/c1eb58ac-edc2-4223-9440-5175c5fb8a3d.jpeg?h=200&w=1608",
];

const Slideshow = () => {
  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  };

  const renderSlides = () =>
    slideshow.map((num) => (
      <div className="slideshow" key={num}>
        <img src={num}></img>
      </div>
    ));
  return (
    <div>
      <div className="slideSliderApp">
        <Slider {...settings}>{renderSlides()}</Slider>
      </div>
      .
    </div>
  );
};

const Secondslide = () => {
  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  };

  const renderSlides = () =>
    secondslide.map((num) => (
      <div className="slideshow" key={num}>
        <img src={num}></img>
      </div>
    ));
  return (
    <div>
      <div className="slideSliderApp">
        <Slider {...settings}>{renderSlides()}</Slider>
      </div>
      .
    </div>
  );
};

const breakPoints = [
  { width: 300, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 5 },
];

const NewFlash = () => {
  const Dataslider = useSelector((state) => state.Data.data);
  const filterData = Dataslider.filter((item) => {
    return item.title.includes("Camera");
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //  console.log(filterData)
  return (
    <div className="newflashmain">
      <h2 style={{ padding: "10px" }}>Trending Now</h2>

      <div className="SliderApp">
        <Carousel breakPoints={breakPoints}>
          {filterData.map((item) => {
            return (
              <div
                onClick={() => {
                  navigate("description");
                  description_data(dispatch, item);
                }}
                className="productContainer"
                key={nanoid()}
              >
                <img src={item.thumbnail} />
                <button className="Quicklook">Quick Look</button>
                <p>{item.condition}</p>
                <p>{item.price.raw || item.price.from.raw}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

const Slippers = () => {
  const Dataslider = useSelector((state) => state.Data.data);
  const filterData = Dataslider.filter((item) => {
    return item.title.includes("Summer");
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(filterData)

  return (
    <div className="slippersmain">
      <div className="newflash">
        <p>New Flash: Must-Have Sandals Up to 60% Off</p>
      </div>
      <p style={{ fontWeight: "600", fontSize: "30px", textAlign: "center" }}>
        Online only
      </p>
      <div className="SliderApp">
        <Carousel breakPoints={breakPoints}>
          {filterData.map((item) => {
            return (
              <div
                onClick={() => {
                  navigate("description");
                  description_data(dispatch, item);
                }}
                className="slippersContainer"
                key={nanoid()}
              >
                <img src={item.thumbnail} />
                <button className="Quicklook">Quick Look</button>
                <p>{item.condition}</p>
                <p>{item.price.raw || item.price.from.raw}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

const Spring = () => {
  return (
    <div className="Spring">
      <p>Spring Must-Haves for All</p>
      <div className="Springcompo">
        <div className="Springimg">
          <img src="https://n.nordstrommedia.com/id/316b6242-fb9d-4e9f-a418-e3ce62a67b22.jpeg?h=555&w=804"></img>
          <div>
            <h2>Lancôme</h2>
            <p>Beauty staples from the classic brand</p>
          </div>
        </div>

        <div className="Springimg">
          <img src="https://n.nordstrommedia.com/id/fa4bc7a2-24fd-4338-a408-227419f47e61.jpeg?h=555&w=804"></img>
          <div>
            <h2>PGA Tour, Callaway Golf & More</h2>
            <p>Upgrade your golf gear.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ManJeans = () => {
  const Dataslider = useSelector((state) => state.Data.data);
  const filterData = Dataslider.filter((item) => {
    return item.title.includes("Men's");
  });
  // console.log(filterData)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}></h1>
      <div className="SliderApp">
        <Carousel breakPoints={breakPoints}>
          {filterData.map((item) => {
            return (
              <div
                onClick={() => {
                  navigate("description");
                  description_data(dispatch, item);
                }}
                className="JeansContainer"
                key={nanoid()}
              >
                <img src={item.thumbnail} />
                {/* <button  className="Quicklook">Quick Look</button>  */}
                <p>{item.condition}</p>
                <p>{item.price.raw || item.price.from.raw}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

const WomenJeans = () => {
  const Dataslider = useSelector((state) => state.Data.data);
  const filterData = Dataslider.filter((item) => {
    return item.title.includes("women");
  });
  // console.log(filterData)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}></h1>
      <div className="SliderApp">
        <Carousel breakPoints={breakPoints}>
          {filterData.map((item) => {
            return (
              <div
                onClick={() => {
                  navigate("description");
                  description_data(dispatch, item);
                }}
                className="JeansContainer"
                key={nanoid()}
              >
                <img src={item.thumbnail} />
                {/* <button  className="Quicklook">Quick Look</button>  */}
                <p>{item.condition}</p>
                <p>{item.price.raw || item.price.from.raw}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

const Springaccess = () => {
  return (
    <div className="springacc">
      <p>Spring Accessories, Right This Way</p>
      <div className="springaccdiv">
        <div className="springaccimg">
          <img src="https://n.nordstrommedia.com/it/1c9fb628-d47b-4ad8-b03c-f4f30f98235e.jpeg?h=1224&w=1224"></img>
          <h5>New Balance, adidas & More</h5>
          <p>New kicks under $50.</p>
        </div>
        <div className="springaccimg">
          <img src="https://n.nordstrommedia.com/it/a1d80c8c-356f-4f1d-b926-04cf746de6dc.jpeg?h=1224&w=1224"></img>
          <h5>Max Studio, Pleione, Melloday & More</h5>
          <p>Spring tops from $19.97.</p>
        </div>
        <div className="springaccimg">
          <img src="https://n.nordstrommedia.com/it/3ca08e3e-c16f-4444-9aa2-57e766234592.jpeg?h=1224&w=1224"></img>
          <h5>Kurti Geiger London & More</h5>
          <p>Handbags up to 50% off.</p>
        </div>
      </div>
    </div>
  );
};

const BestSelling = () => {
  const Dataslider = useSelector((state) => state.Data.data);
  const filterData = Dataslider.filter((item) => {
    return item.title.includes("Solid");
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //  console.log(filterData)
  return (
    <div>
      <h2 style={{ padding: "20px" }}>Best-Selling items</h2>

      <div className="SliderApp">
        <Carousel breakPoints={breakPoints}>
          {filterData.map((item) => {
            return (
              <div
                onClick={() => {
                  navigate("description");
                  description_data(dispatch, item);
                }}
                className="productContainer"
                key={nanoid()}
              >
                <img src={item.thumbnail} />
                <button className="Quicklook">Quick Look</button>
                <p>{item.condition}</p>
                <p>{item.price.raw || item.price.from.raw}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

const Looks = () => {
  const Dataslider = useSelector((state) => state.Data.data);
  const filterData = Dataslider.filter((item) => {
    return item.title.includes("Maxi");
  });
  //  console.log(filterData)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <h2 style={{ padding: "20px" }}>Best-Selling items</h2>

      <div className="lookSliderApp">
        <Carousel breakPoints={breakPoints}>
          {filterData.map((item) => {
            return (
              <div
                onClick={() => {
                  navigate("description");
                  description_data(dispatch, item);
                }}
                className="lookContainer"
                key={nanoid()}
              >
                <img src={item.thumbnail} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export {
  NewFlash,
  Slippers,
  Spring,
  ManJeans,
  WomenJeans,
  Springaccess,
  BestSelling,
  Slideshow,
  Secondslide,
  Looks,
};
