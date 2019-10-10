module.exports = {
    name: 'Directories',
    service: Directories,
    dependencies: ['require(path)']
};

function Directories(path) {
    return {
        WEB_VIEWS_DIR: path.join(__dirname, '../../web/views'),
        PUBLIC_RESOURCE_DIR: path.join(__dirname, '../../web/public')
    }
}