const path = require('path');


module.exports = {
    apps: [
        {
            name: 'canopy',
            cwd: path.resolve(__dirname, "..", "..", "canopy"),
            script: 'npm',
            args: "start",
            instances: '2', // Or a specific number of instances
            exec_mode: 'cluster',
            env: {
                PORT: 3000,
            },
            ignore_watch: ["node_modules", "logs", "src"],
        },
    ],
};