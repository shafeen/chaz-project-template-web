module.exports = {
    name: 'IndexRouteController',
    service: IndexRouteController,
    dependencies: [
        'require(express)'
    ]
};
function IndexRouteController(express) {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.render('home', {title: 'Home'});
    });

    return router;
}