import React              from 'react';
import { renderToString } from 'react-dom/server';
import express            from 'express';
import path               from 'path';
import compression        from 'compression';
import { match,
         RouterContext }  from 'react-router';
import Log                from 'log';
import routes             from '../client/components/routes';

var log = new Log('info');

var app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, 'dist/client')));
app.use('/assets/js', express.static(path.join(__dirname, 'dist/client/assets/js')));

app.get('*', (req, res) => {
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
        if (err) {
            res.status(500).send(err.message);
        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search);
        } else if (props) {
            const appHtml = renderToString(<RouterContext {...props}/>);
            res.send(renderPage(appHtml));
        } else {
            res.status(404).send('Not Found');
        }
    });
});

function renderPage(appHtml) {
    return `
        <!DOCTYPE html public="storage">

        <html>
        <head>
            <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
            <title>AXIS</title>
            <script src="/assets/js/react-with-addons.min.js"></script>
        </head>
        <body>
            <div id=content>${appHtml}</div>
            <script src="/assets/js/bundle.js"></script>
        </body>
        </html>
    `;
}

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    log.info('Production Express server running at localhost:' + PORT);
});
