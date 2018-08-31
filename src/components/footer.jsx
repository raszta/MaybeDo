import React from 'react';

export default class Footer extends React.Component {
    render() {
        return <div className="footer">
            <h3 className="footer__title">Copyright 2018</h3>
            <ul className="footer__list">
                <li className="footer__list-link"><a href="https://pl.pinterest.com/" className="footer__list-item--link">Pinterest</a></li>
                <li className="footer__list-link"><a href="https://www.canva.com/pl_pl/" className="footer__list-item--link">Canva</a></li>
                <li className="footer__list-link"><a href="https://pl.forvo.com/" className="footer__list-item--link">Forvolo</a></li>
            </ul>
        </div>
    }
}
