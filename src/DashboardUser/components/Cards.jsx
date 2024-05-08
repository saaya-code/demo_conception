import { CarInfo } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Card";
import ClipPath from "../assets/svg/ClipPath";

import Slider from "react-slick";


const Cards = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading text={"Your Vehicules"} />

        <div>
          <Slider
            className="flex flex-wrap gap-10"
            slidesToShow={2}
            slidesToScroll={1}
            infinite={true}
            autoplay={true}
            autoplaySpeed={5000}
            speed={500}
            arrows={true}
            dots={true}
          >
            {CarInfo.map((item) => (
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
                key={item.id}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-5"> {item.modele}</h5>
                  <p className="body-2 mb-6 text-n-3">
                    {" "}
                    {item.marque} <br /> {item.couleur} <br /> {item.matricule}{" "}
                  </p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={item.iconUrl}
                      width={48}
                      height={48}
                      alt={item.title}
                    />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Explore more
                    </p>
                    <Arrow />
                  </div>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <ClipPath />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Section>
  );
};

export default Cards;
