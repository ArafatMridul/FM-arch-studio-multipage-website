import dek from "/assets/contact/desktop/image-map.png";
import tab from "/assets/contact/tablet/image-map.png";
import mob from "/assets/contact/mobile/image-map.png";
import Reveal from "../Reveal";

const Map = () => {
    return (
        <Reveal>
            <section className="wrapper">
                <picture>
                    <source media="(min-width: 64rem)" srcSet={dek} />
                    <source media="(min-width: 40rem)" srcSet={tab} />
                    <img src={mob} alt="" className="h-full w-full" />
                </picture>
            </section>
        </Reveal>
    );
};

export default Map;
