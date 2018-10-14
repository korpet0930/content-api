exports.appSettings = {
    db: (function(){
        return process.env.MONGODB_CONNECTION || 'mongodb://localhost:27017/contentdb';
    })(),
    appInsightKey: 'b4c1d040-7a4c-445f-8a6a-fae86e5aa232'
};
