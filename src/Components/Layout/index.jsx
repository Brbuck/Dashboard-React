import React, { useState } from 'react';
import './styles.scss'

import Sidebar from '../Sidebar'
import Header from '../Header'

function Layout({ children }) {
    const [click, setClick] = useState(true);

    function togle() {
        setClick(!click);
    }

    return (
        <div className='container'>
            <Header togle={togle} />
            <div className='content'>
                {
                    click && <Sidebar />
                }
                <div className={click ? 'pages' : 'pages active'}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;