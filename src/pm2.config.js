module.exports = {
    apps: [
        {
            name: 'canopy',
            script: 'npm',
            cwd: "./canopy",
            args: "start",
            instances: '2', // Or a specific number of instances
            exec_mode: 'cluster', // Enables clustering mode
            env: {
                NODE_ENV: 'production',
                PORT: 3000,
                // Add other environment variables here
            },
        },
    ],
};