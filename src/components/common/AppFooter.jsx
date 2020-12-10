import React from 'react'
import { BackTop } from 'antd';

function AppFooter() {
    const style = {

    };
    return (
        <div className="container-fluid">
            <div className="footer">
                <div class="logo"><i class="fas fa-bolt"></i><a href="http://google.com">Tech</a></div>

                <ul class="socials">
                    <li>
                        <a href="https://www.facebook.com/">
                            <i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://www.pinterest.com/"><i class="fab fa-pinterest-p"></i></a></li>
                    <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                </ul>
                <div class="copyright">Copyright © 2020 Tech</div>
                <BackTop >
                    <div style={style}><i style={{ color: 'deeppink' }} className="fas fa-arrow-circle-up"></i></div>
                </BackTop>

            </div>

        </div>
    )
}

export default AppFooter
