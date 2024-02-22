import {
  img1_1188,
  img1_280,
  img1_380,
  img1_560,
  img1_594,
  img1_595,
  img1_760,
  img1_1190,
  img2_280,
  img2_380,
  img2_560,
  img2_565,
  img2_760,
  img2_1130,
  img3_280,
  img3_380,
  img3_560,
  img3_565,
  img3_760,
  img3_1130,
  img4_280,
  img4_380,
  img4_560,
  img4_594,
  img4_760,
  img4_1188,
} from "../../assets/images";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="title-container">
          <h1 className="title">About Us</h1>
          <h2 className="subtitle">
            Brief description if you want to know more about us
          </h2>
        </div>
        <ul className="about-list">
          <li className="about-card">
            <img
              alt="photo1"
              src={img1_280}
              srcSet={`${img1_280} 280w, ${img1_380} 380w, ${img1_560} 560w, ${img1_594} 594w, ${img1_595} 595w, ${img1_760} 760w, ${img1_1188} 1188w, ${img1_1190} 1190w`}
              sizes="(min-width: 1440px) 595px, (min-width: 768px) 594px, (min-width: 420px) 380px, (min-width: 320px) 280px, 100vw"
              loading="lazy"
            ></img>
            <p className="description">
              "From our initial conversation, I knew I had found a gem." <br />{" "}
              "Ariel is THE BEST, and her work is INCREDIBLE." <br />I CREATE
              TIMELESS, PERSONAL, ELEGANT PHOTOGRAPHS YOU'LL TREASURE FOREVER.
            </p>
          </li>
          <li className="about-card">
            <img
              alt="photo2"
              src={img2_280}
              srcSet={`${img2_280} 280w, ${img2_380} 380w, ${img2_560} 560w, ${img2_565} 565w,  ${img2_760} 760w, ${img2_1130} 1130w`}
              sizes="(min-width: 1440px) 595px, (min-width: 768px) 594px, (min-width: 420px) 380px, (min-width: 320px) 280px, 100vw"
              loading="lazy"
            ></img>
            <p className="description">
              "From our initial conversation, I knew I had found a gem." <br />{" "}
              "Ariel is THE BEST, and her work is INCREDIBLE." <br />I CREATE
              TIMELESS, PERSONAL, ELEGANT PHOTOGRAPHS YOU'LL TREASURE FOREVER.
            </p>
          </li>
          <li className="about-card">
            <img
              alt="photo"
              src={img3_280}
              srcSet={`${img3_280} 280w, ${img3_380} 380w, ${img3_560} 560w, ${img3_565} 565w,  ${img3_760} 760w, ${img3_1130} 1130w`}
              sizes="(min-width: 1440px) 595px, (min-width: 768px) 594px, (min-width: 420px) 380px, (min-width: 320px) 280px, 100vw"
              loading="lazy"
            ></img>
            <p className="description">
              "From our initial conversation, I knew I had found a gem." <br />{" "}
              "Ariel is THE BEST, and her work is INCREDIBLE." <br />I CREATE
              TIMELESS, PERSONAL, ELEGANT PHOTOGRAPHS YOU'LL TREASURE FOREVER.
            </p>
          </li>
          <li className="about-card">
            <p className="description">
              "From our initial conversation, I knew I had found a gem." <br />{" "}
              "Ariel is THE BEST, and her work is INCREDIBLE." <br />I CREATE
              TIMELESS, PERSONAL, ELEGANT PHOTOGRAPHS YOU'LL TREASURE FOREVER.
            </p>
            <img
              alt="photo"
              src={img4_280}
              srcSet={`${img4_280} 280w, ${img4_380} 380w, ${img4_560} 560w, ${img4_594} 565w,  ${img4_760} 760w, ${img4_1188} 1130w`}
              sizes="(min-width: 1440px) 595px, (min-width: 768px) 594px, (min-width: 420px) 380px, (min-width: 320px) 280px, 100vw"
              loading="lazy"
            ></img>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
