import PROFILE_PIC from "../assets/profile_pic.png";
import REACT_ICON from "../assets/react-icon.png";
import NODEJS_ICON from "../assets/nodejs-icon.png";
import JS_ICON from "../assets/js-icon.png";
import HTML_ICON from "../assets/html-icon.png";
import { STATS } from "../utils/data";
import StatInfoCard from "../components/StatInfoCard";

function Hero() {
    return (
        <section id="hero" className="container mx-auto px-8">
            <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
                <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
                    <h3 className="text-xl lg:text-2xl font-medium text-black">
                        Hi, I'm Liam Pham
                    </h3>
                    <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent">
                        Building Scalable & User Centric Web Apps
                    </h1>

                    <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
                        I'm passionate about creating web applications that are
                        not only functional but also user-friendly. My goal is
                        to build scalable and efficient solutions that meet the
                        needs of users and businesses alike.
                    </p>

                    <div className="flex justify-normal lg:justify-start gap-4 md:gap-8 mt-6">
                        <button className="flex-1 lg:flex-none action-btn-outline btn-scale-anim">
                            View My Work
                        </button>
                        <button className="flex-1 lg:flex-none action-btn btn-scale-anim">
                            Download Resume
                        </button>
                    </div>
                </div>

                <div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-2">
                    <img
                        src={PROFILE_PIC}
                        alt="Liam Pham"
                        className="profile-pic"
                    />
                    <img
                        src={REACT_ICON}
                        alt="React Icon"
                        className="icon-img -left-10 bottom-20 rotate-[1.75deg]"
                    />
                    <img
                        src={NODEJS_ICON}
                        alt="Node.js Icon"
                        className="icon-img left:5 md:left-10 -bottom-2 rotate-[2.75deg]"
                    />
                    <img
                        src={HTML_ICON}
                        alt="HTML Icon"
                        className="icon-img left-[110px] md:left-[150px] -bottom-6 rotate-[3.75deg]"
                    />
                    <img
                        src={JS_ICON}
                        alt="JavaScript Icon"
                        className="icon-img left-[210px] md:left-[255px] -bottom-9 md:-bottom-10 rotate-[4.75deg]"
                    />
                </div>
            </div>

            <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
                {STATS.map((stat) => (
                    <StatInfoCard key={stat.id} count={stat.value} label={stat.label} />
                ))}
            </div>
        </section>
    );
}

export default Hero;
