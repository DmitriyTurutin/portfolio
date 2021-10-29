import React from 'react';
import './Header.css'
import github from './iconmonstr-github-1.svg'
const Header: React.FC = () => {
    return (
            <header className="row github d-flex">
                <div className="d-flex">
                    <a href="https://github.com/DmitriyTurutin">
                    <img className={"github-img"} src={github} alt=""/>
                    </a>
                </div>
            </header>

    );
};

export default Header;