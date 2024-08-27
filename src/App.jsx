import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Button from "./components/button/Button";

function App() {
    const [url, setUrl] = useState("");
    const [shortenedLinks, setShortenedLinks] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const storedLinks = JSON.parse(localStorage.getItem("shortenedLinks"));
        if (storedLinks) {
            setShortenedLinks(storedLinks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("shortenedLinks", JSON.stringify(shortenedLinks));
    }, [shortenedLinks]);

    const validateUrl = (url) => {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
    };

    const handleShorten = async () => {
        if (!url) {
            setError("URL cannot be empty.");
            return;
        }
        if (!validateUrl(url)) {
            setError("Invalid URL.");
            return;
        }
        setError("");

        try {
            const response = await axios.post(
                "https://cleanuri.com/api/v1/shorten",
                `url=${encodeURIComponent(url)}`,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
            const newLink = {
                original: url,
                shortened: response.data.result_url,
            };

            const updatedLinks = [newLink, ...shortenedLinks.slice(0, 2)];
            setShortenedLinks(updatedLinks);
            setUrl("");
        } catch (error) {
            setError("Failed to shorten URL. Please try again later.");
            console.error(error);
        }
    };

    const handleCopy = (shortenedUrl, index) => {
        navigator.clipboard.writeText(shortenedUrl);
        const updatedLinks = shortenedLinks.map((link, i) => {
            if (i === index) {
                return { ...link, copied: true };
            }
            return link;
        });
        setShortenedLinks(updatedLinks);

        setTimeout(() => {
            const resetLinks = updatedLinks.map((link, i) => {
                if (i === index) {
                    return { ...link, copied: false };
                }
                return link;
            });
            setShortenedLinks(resetLinks);
        }, 2000);
    };

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
                    <div className="shorten__container">
                        <div className="input__container">
                            <input
                                type="text"
                                placeholder="Shorten a link here..."
                                className={`input__field ${
                                    error ? "input__error" : ""
                                }`}
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                            {error && <p className="error__message">{error}</p>}
                        </div>
                        <Button
                            className={"input__btn"}
                            text="Shorten it!"
                            onClick={handleShorten}
                        />
                    </div>

                    <div className="shortened-links-container">
                        {shortenedLinks.map((link, index) => (
                            <div key={index} className="shortened-links__card">
                                <p className="shortened-link__card-description">
                                    {link.original}
                                </p>
                                <p className="shortened-link__card-description">
                                    <a
                                        href={link.shortened}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {link.shortened}
                                    </a>
                                </p>
                                <button
                                    onClick={() =>
                                        handleCopy(link.shortened, index)
                                    }
                                >
                                    {link.copied ? "Copied" : "Copy"}
                                </button>
                            </div>
                        ))}
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
