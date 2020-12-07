import React from 'react';

import StopWatch from "./scripts/StopWatch";
import EightBall from "./scripts/EightBall";
// import SiteWeather from "./scripts/SiteWeather";
import Phone from "./scripts/Phone";
import Torrex from "./scripts/Torrex";

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import "./WheelAnimations.css";
import "../css/Wheel.css"


const content = [
    {
        title: "Stopwatch",
        description: "A stopwatch program that allows saving of times to a database.",
        button: "Try It!",
        image: 'https://images.unsplash.com/photo-1590333748338-d629e4564ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1418&q=80',
        codelang: "Javascript, PHP",
        github: "https://www.github.com",
        component: <StopWatch />

    },

    {
        title: "Magic 8 Ball",
        description: "The infamous magic 8 ball, has been used for many things over the years.",
        button: "Try It!",
        image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80",
        codelang: "Javascript, PHP",
        github: "",
        component: <EightBall />

    },

    {
        title: "Weather",
        description: "Know the weather in your location where ever you are simply and easily.",
        button: "Try It!",
        image: "https://images.unsplash.com/photo-1508697014387-db70aad34f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
        codelang: "Javascript, PHP",
        github: "",
        component: ''

    },

    {
        title: "Phone & Email",
        description: "A lightweight script to extract phone and email entries from text files.",
        button: "Try It!",
        image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
        codelang: "Javascript, Python",
        github: "",
        component: <Phone />

    },

    {
        title: "Torrex",
        description: "An early torrent downloader using Python and JS. Still in development.",
        button: "Try It!",
        image: "https://images.unsplash.com/photo-1534833697616-825d2698fa12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
        codelang: "Javascript, Python",
        github: "",
        component: <Torrex />

    },
]


const Wheel = () => {
    return (
        <>
            <div>
                <Slider className="slider-wrapper">
                    {content.map((item, index) => (
                        <div key={index} className="slider-content" style={{ background: `url('${item.image}') no-repeat center center`}}>
                            <div className="inner">
                                <h1>{item.title}</h1>
                                <p style={{ fontSize: '18px' }}>{item.description}</p>
                                <div className="modalBox">{item.component}</div>
                            </div>
                            <section style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                <p style={{ fontSize: '16px', color: 'white' }}>
                                    <strong>{item.codelang}</strong>
                                </p>
                                <p style={{ fontSize: '16px', color: 'white' }}>
                                    <strong>{item.github}</strong>
                                </p>
                            </section>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Wheel;
