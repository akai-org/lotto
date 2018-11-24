module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // First application
    {
      name: "Lootto",
      script: "npm",
      env: {
        MONGODB_URI:
          "mongodb://web:h95fQG4E8QBrqpFw@ds235732.mlab.com:35732/lootto"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: "rafal",
      host: "91.205.75.69",
      ref: "origin/master",
      repo: "https://github.com/akai-org/lotto.git",
      path: "/var/www/lootto",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production"
    }
  }
};
