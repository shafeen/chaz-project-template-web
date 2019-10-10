module.exports = {
    name: 'MainWebApp',
    service: __,
    dependencies: [
        'ApplicationRunner',
        'require(express)',
        'IndexRouteController',
        'Directories',
        'require(compression)',
        'require(config)'
    ]
};

function __(ApplicationRunner, express, IndexRouteController, Directories, compression, config) {
    class WebAppRunner extends ApplicationRunner {
        run() {
            const ExpressWebApp = express();

            ExpressWebApp.set('view engine', 'pug');
            ExpressWebApp.set('views', Directories.WEB_VIEWS_DIR);
            ExpressWebApp.use(express.static(Directories.PUBLIC_RESOURCE_DIR));
            ExpressWebApp.use(compression());

            ExpressWebApp.use('/', IndexRouteController);

            const WEBAPP_PORT = config.get('webapp.port');
            ExpressWebApp.listen(WEBAPP_PORT, () => {
                console.log(`WebApp listening on port ${WEBAPP_PORT}!`);
            });
        }
    }

    return WebAppRunner;
}