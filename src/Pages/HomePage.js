import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';


const HomePage = () => {

    return (
        <div className="HomePage">
            <header className="header">
                <h1 className="main-text">
                    Hi, This is &nbsp;
                    <span>
                        Mahatab Hossain
                    </span>
                </h1>

                <p>
                    Hello this is a portfolio website using react. I wanna try to
                    build this to showcase my skills.
                </p>

                <div className="icons">
                    <Link>
                        <GitHubIcon />
                    </Link>
                    <Link>
                        <LinkedInIcon />
                    </Link>
                </div>
            </header>

        </div>
    )
}

export default HomePage
