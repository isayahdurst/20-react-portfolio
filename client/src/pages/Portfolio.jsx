import PortfolioItem from '../components/Portfolio/PortfolioItem';
import novara from '/images/novara.jpg';
import centiment from '/images/centiment.png';
import taylorsKitchen from '/images/taylors-kitchen.png';

const Portfolio = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-2">Portfolio</h1>
                <h2 className="subtitle is-4">Here are some of my projects</h2>
                <div className="columns">
                    <div className="column">
                        <PortfolioItem
                            name="Novara Motorsports"
                            img={novara}
                            liveSite="https://www.novaramotorsports.com"
                        />
                    </div>
                    <div className="column">
                        <PortfolioItem
                            name="Centiment"
                            img={centiment}
                            liveSite="https://centiment-inc.herokuapp.com/login"
                            gitHub="https://github.com/isayahdurst/centiment"
                        />
                    </div>
                    <div className="column">
                        <PortfolioItem
                            name="Taylor's Kitchen"
                            img={taylorsKitchen}
                            liveSite="https://isayahdurst.github.io/taylors-kitchen-meal-prep-app/"
                            gitHub="https://github.com/isayahdurst/taylors-kitchen-meal-prep-app"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
