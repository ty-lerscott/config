const path = require('path');

const cwd = process.cwd();

module.exports = {
    apps: [
        {
            name: 'canopy',
            cwd: path.resolve(cwd, "..", "..", "canopy"),
            script: 'npm',
            args: "start",
            instances: '2', // Or a specific number of instances
            exec_mode: 'cluster',
            env: {
                PORT: 3000,
            },
        },
    ],
};