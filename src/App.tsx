import './App.css'
import Qr from "./components/QR/Qr";
import Card from "./components/Card/Card";

function App() {
    return (
        <>
            <div className='wrap'>
                <div className='background_section'>
                    <div className='container'>
                        <div className='paragraph'>
                            <div className='logo'></div>
                            <p className='main_title'>WELCOME TO</p>
                            <p className='main_title underline'>GOLF TRAVELERS CLUB!</p>
                            <div className='about_us'>
                                <h2 className='title_about'>About us</h2>
                                <div className='subtitle_about'>
                                    <p>We are a group of friends from different countries</p>
                                    <p>who love to travel, discover new places and enjoy</p>
                                    <p>different golf courses.</p>
                                    <p>Each of us has played golf in over 30, 40, 50 countries.</p>
                                    <p>And when someone asks - how many countries and</p>
                                    <p>how many golf courses have you played in?</p>
                                    <p>There is no exact answer.</p>
                                    <p>Most golfers don't want to take the time to write</p>
                                    <p>own their stats.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='our_app'>
                    <div className='container'>
                        <div className='our_app_title'>
                            <p>Our application will help such people.</p>
                            <p>Golfers now have access to a database of</p>
                            <p>36,000+ golf courses,</p>
                            <p>3,000+ 5-star hotels</p>
                            <p>around the world</p>
                            <p>and the ability to create a lifetime collection</p>
                            <p><span
                                className='green_text'>OF THE COUNTRIES AND GOLF CLUBS</span> they have played in.</p>
                        </div>
                    </div>
                </div>
                <div className='background'>
                    <div className='container'>
                        <div className='phone_container'>
                            <div className='title_our_app'>
                                <div className='our_app_subtitle'>
                                    <p>The reward will be</p>
                                    <p className='green_text'>A PERSONALIZED CERTIFICATE OF ACHIEVEMENT</p>
                                    <p>which golfers will be able to send to their friends,</p>
                                    <p>business associates</p>
                                    <p>They can print it out and hang it in a nice frame in</p>
                                    <p>their home or office</p>
                                    <div className='good_luck'>
                                        <p className='green_text'>Make golf the best memory of your life!</p>
                                    </div>
                                </div>
                                <div className='qr_codes'>
                                    <Qr title='IOS' className='qr_code_iphone'/>
                                    <Qr title='ANDROID' className='qr_code_android'/>
                                </div>
                            </div>
                            <div className='phone'></div>
                        </div>
                    </div>
                </div>
                <div className='statistic_section'>
                    <div className='container'>
                        <div className='statistic_title'>
                            <p className='white_text'>App users statistics create a rating of the most</p>
                            <p className='white_text'>popular golf clubs and hotels in the world</p>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='block_cooperation'>
                        <p className='cooperation'>Interested in cooperation?</p>
                        <p className='cooperation'>just print and advertise!</p>
                    </div>
                    <div className='cards'>
                        <Card
                            linkA4='https://drive.google.com/file/d/1YxYb84aqoVLMzEDrnllz8n_7QoEsCXuy/view?usp=drive_link'
                            linkA5='https://drive.google.com/file/d/1h24UAvQbo1QJHLRxsIjfpWYimh34-JVZ/view?usp=drive_link'
                            title='FOR GOLF CLUBS'/>
                        <Card
                            linkA4='https://drive.google.com/file/d/1yO3jNONs0CzWxdKZtfQa36f-MrLQD2hS/view?usp=drive_link'
                            linkA5='https://drive.google.com/file/d/1bDSq78_IV8FAntCcQ7Ny8nYT8bFc8rKF/view?usp=drive_link'
                            title='FOR GOLF HOTELS'/>
                    </div>
                    <div className='support'>
                        <p className='size'>ANY QUESTIONS?</p>
                        <p><a href="mailto:INFO@GOLFTRAVELCLUB.APP"
                              className='green_text size'>INFO@GOLFTRAVELCLUB.APP</a>
                        </p>
                        <p><a href="mailto:SUPPORT@GOLFTRAVELCLUB.APP"
                              className='green_text size'>SUPPORT@GOLFTRAVELCLUB.APP</a></p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default App;
