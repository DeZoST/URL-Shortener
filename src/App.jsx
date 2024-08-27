import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
{
    /*import Card from "./components/card/Card";*/
}
import Button from "./components/button/Button";

function App() {
    return (
        <>
            <Header />
            <section className="hero__section container">
                <div className="hero__content">
                    <img
                        src="/images/illustration-working.svg"
                        alt="Illustration of someone working on a computer"
                        className="hero__illustration"
                    />
                    <div className="hero__text">
                        <h1 className="hero__title">
                            More than just shorter links
                        </h1>
                        <p className="hero__description">
                            Build your brand&apos;s recognition and get detailed
                            insights on how your links are performing.
                        </p>
                        <Button text="Get Started" className={"hero__btn"} />
                    </div>
                </div>
            </section>
            <section className="stats__section">
                <div className="stats__content container">
                    <div className="input__container">
                        <input
                            type="text"
                            placeholder="Shorten a link here..."
                            className="input__field"
                        />
                        <Button className={"input__btn"} text="Shorten it !" />
                    </div>
                    <div className="stats__text-container">
                        <h2 className="stats__title">Advanced Statistics</h2>
                        <p className="stats__description">
                            Track how your links are performing across the web
                            with our advanced statistics dashboard.
                        </p>
                    </div>
                    <div className="stats__cards-container">
                        <div className="stats__card">
                            <h3 className="stats__card-title">
                                Brand Recognition
                            </h3>
                            <p className="stats__card-description">
                                Boost your brand recognition with each click.
                                Generic links don&apos;t mean a thing. Branded
                                links help instil confidence in your content.
                            </p>
                        </div>
                        <div className="stats__card">
                            <h3 className="stats__card-title">
                                Detailed Records
                            </h3>
                            <p className="stats__card-description">
                                Gain insights into who is clicking your links.
                                Knowing when and where people engage with your
                                content helps inform better decisions.
                            </p>
                        </div>
                        <div className="stats__card">
                            <h3 className="stats__card-title">
                                Fully Customizable
                            </h3>
                            <p className="stats__card-description">
                                Improve brand awareness and content
                                discoverability through customizable links,
                                supercharging audience engagement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ad__section">
                <div className="ad__content container">
                    <h2 className="ad__title">Boost your links today</h2>
                    <Button text="Get Started" className={"ad__btn"} />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default App;
