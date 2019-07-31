import React from "react";
import Slider from "react-slick";
import './Slider.css'

 
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
        <img className="img-slider" src="https://avecdn.akamaized.net/Assets/Images_Upload/Actu24/2017/01/30/9639f020-e146-11e6-bee8-899a72257ee7_original.jpg?maxheight=662&maxwidth=925&scale=both"/>
        </div>
        <div>
        <img className="img-slider" src="https://www.bonnegueule.fr/wp-content/uploads/2017/06/comment-porter-mariniere-homme.jpg"/>
        </div>
        <div>
        <img className="img-slider" src="https://www.bonnegueule.fr/wp-content/uploads/2017/06/porter-henley-homme.jpg"/>
        </div>
        <div>
        <img className="img-slider" src="https://www.bonnegueule.fr/wp-content/uploads/2017/06/costume-mariniere-homme.jpg"/>
        </div>
        <div>
        <img className="img-slider" src="https://www.bonnegueule.fr/wp-content/uploads/2017/06/tee-shirt-kate-moss-eleven-paris.jpg"/>
        </div>
        <div>
        <img className="img-slider" src="https://www.bonnegueule.fr/wp-content/uploads/2017/06/xNick-Wooster-tee-shirt.jpg.pagespeed.ic.rtoXb4wK8U.webp"/>
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider;