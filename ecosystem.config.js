module.exports = {
  apps: [
    {
      name: "backendfoodexplorer",
      script: "./src/server.js",

      // Railway expõe a variável PORT automaticamente
      env: {
        NODE_ENV: "development",
        PORT: process.env.PORT || 3000
      },

      env_production: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3000
      },

      // PM2 boas práticas
      watch: false,                // evita restart infinito
      instances: 1,                // Railway free plan aguenta 1 apenas
      exec_mode: "fork",           // evita cluster em máquinas leves
      max_restarts: 10,            // não deixa cair fácil
      restart_delay: 3000,         // espera 3s antes de tentar de novo

      // Logs mais limpos
      combine_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
