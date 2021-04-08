import React from 'react';
import "./footer.css";
import container from "../Main/container";

class footer extends React.Component {
    render() {
        return (
            <footer className="container-fluid bg-4 text-center">
                <p>By <a href="https://www.diegosanchez.net" target="_blank">Diego Sanchez</a></p>
            </footer>
        )
    }
}
export default footer;