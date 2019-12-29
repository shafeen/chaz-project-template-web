module.exports = {
    name: 'IndexRouteController',
    service: IndexRouteController,
    dependencies: [
        'require(express)',
        'require(moment)',
        'require(simple-git/promise)',
        'env(NODE_ENV)'
    ]
};
function IndexRouteController(express, moment, simpleGit, NODE_ENV) {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.render('home', {title: 'Home'});
    });

    // *** DEBUGGING ROUTE ONLY ***
    if (NODE_ENV !== 'production') {
        let git = simpleGit();
        const debugInfo = { launchTimestamp: Date.now() };
        router.get('/debug', async (req, res) => {
            let currentGitBranchInfo = null;
            try { currentGitBranchInfo = await git.branch(); } catch (e) { currentGitBranchInfo = null; }
            console.log(currentGitBranchInfo);
            res.render('debug', {
                title: 'Debug Info',
                nodeEnvValue: NODE_ENV || "not set",
                serverLaunchRelativeTime: moment(debugInfo.launchTimestamp).fromNow(),
                serverLaunchFormattedTime: moment(debugInfo.launchTimestamp).format(),
                gitBranch: currentGitBranchInfo? currentGitBranchInfo.current : "unknown",
                gitBranchHash: currentGitBranchInfo? currentGitBranchInfo.branches[currentGitBranchInfo.current].commit : "unknown"
            });
        });
    }

    return router;
}