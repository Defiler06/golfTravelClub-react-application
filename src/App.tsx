import './App.css'
import Qr from "./components/QR/Qr";
import Card from "./components/Card/Card";

function App() {
    return (
        <>
            <div className='background_section'>
                <div className='container'>
                    <div className='paragraph'>
                        <div className='logo'></div>
                        <p className='main_title'>ДОБРО ПОЖАЛОВАТЬ</p>
                        <p className='main_title underline'>В GOLF TRAVELERS CLUB!</p>
                        <div className='about_us'>
                            <h2 className='title_about'>About us</h2>
                            <div className='subtitle_about'>
                                <p>The idea for this application came to us - a group of golf friends</p>
                                <p>from different countries who like to travel,</p>
                                <p>discover new places and new golf courses.</p>
                                <p>Each of us has played more than 30, 40, 50 countries.</p>
                                <p>And when somebody asked</p>
                                <p>– How many countries and golf courses did you play?</p>
                                <p>– there was no exact answer.</p>
                                <p>Most golfers don’t want to waste time to record their statistics</p>
                            </div>
                            <a className='button_pdf'
                               rel="noopener"
                               href='https://www.google.com/'
                               target='_blank'>Описание приложения</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='our_app'>
                <div className='our_app_title'>
                    <p>Our application will help such people. Now golfers can easily create</p>
                    <p><span
                        className='green_text'>a LIFETIME COLLECTION OF THEIR COUNTRIES AND GOLF CLUBS</span> they
                        have played in.</p>
                </div>
            </div>
            <div className='background'>
                <div className='container'>
                    <div className='phone_section'>
                        <div className='phone_container'>
                            <div className='title_our_app'>
                                <div className='our_app_subtitle'>
                                    <p>The reward will be your personal</p>
                                    <p className='green_text'>CERTIFICATE OF ACHIEVEMENTS</p>
                                    <p>which you can send to your friends, business partners.</p>
                                    <p>You can print it out and hang it in</p>
                                    <p>a beautiful frame at home or in the office.</p>
                                    <p>Your family, your friends will be proud of you!</p>
                                    <p>And your children will take an example from you!</p>
                                    <div className='good_luck'>
                                        <p className='green_text'>Good luck</p>
                                        <p className='green_text'>and enjoy your golf travels!</p>
                                    </div>
                                </div>
                                <div className='qr_codes'>
                                    <Qr title='IOS'/>
                                    <Qr title='ANDROID'/>
                                </div>
                            </div>
                            <div className='phone'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='statistic_section'>
                <div className='statistic_title'>
                    <p className='white_text'>App users statistics create a rating of the most</p>
                    <p className='white_text'>popular golf clubs and hotels in the world</p>
                </div>
            </div>
            <h2 className='cooperation'>Interested in cooperation:</h2>
            <div className='cards_section'>
                <div className='cards'>
                    <Card linkA4='https://www.google.com/' linkA5='https://www.google.com/' title='FOR GOLF CLUB'/>
                    <Card linkA4='https://www.google.com/' linkA5='https://www.google.com/' title='FOR GOLF HOTELS'/>
                </div>
                <div className='support'>
                    <p className='size'>ANY QUESTIONS?</p>
                    <p><a href="mailto:INFO@GOLFTRAVELCLUB.APP" className='green_text size'>INFO@GOLFTRAVELCLUB.APP</a>
                    </p>
                    <p><a href="mailto:SUPPORT@GOLFTRAVELCLUB.APP"
                          className='green_text size'>SUPPORT@GOLFTRAVELCLUB.APP</a></p>
                </div>
            </div>
        </>
    )
};

export default App;
