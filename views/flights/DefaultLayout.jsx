import React from 'react'

function DefaultLayout(props) {
    return (
        <html>
            <head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
                <nav style={{ display: 'flex', flexDirection: 'row' }}>
                    <a href='/flights'>Flights</a>
                    <a href='/flights/New'>New</a>
                </nav>
                {props.children}
            </body>
        </html>
    )
}

export default DefaultLayout;