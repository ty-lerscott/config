const path = require('path');


module.exports = {
    apps: [
        {
            name: 'canopy',
            cwd: path.resolve(__dirname, "..", "..", "canopy"),
            script: 'npm',
            args: "run start:all",
            instances: '1',
            exec_mode: 'fork',
            env: {
                PORT: 3000,
            },
            ignore_watch: ["node_modules", "logs", "src"],
        },
    ],
};