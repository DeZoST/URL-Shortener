import Header from "./components/header/Header";
{
    /*import Footer from "./components/footer/Footer";
import Card from "./components/card/Card";*/
}
import Button from "./components/button/Button";

function App() {
    return (
        <>
            <Header />
            {/*<section className="hero__section container">
                <div className="hero__content">
                    <div className="hero__text">
                        <h1 className="hero__title">
                            More than just shorter links
                        </h1>
                        <p className="hero__description">
                            Build your brand&apos;s recognition and get detailed
                            insights on how your links are performing.
                        </p>
                        <Button text="Get Started" />
                    </div>
                    <img
                        src="/images/illustration-working.svg"
                        alt="Illustration of someone working on a computer"
                        className="hero__illustration"
                    />
                </div>
                <div className="input__container">
                    <input
                        type="text"
                        placeholder="Shorten a link here..."
                        className="input__field"
                    />
                    <Button text="Shorten it !" />
                </div>
            </section>
            {/*<section className="stats__section container"></section>
            <section className="ad__section container"></section>
            <Footer />*/}
        </>
    );
}

export default App;
