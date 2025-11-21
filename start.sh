#!/usr/bin/env bash
set -euo pipefail

echo "📦 Instalando dependências..."
npm install --production

echo "🗂️ Executando migrations..."
npm run migrate

export NODE_ENV=production
export PORT="${PORT:-3000}"

echo "🚀 Iniciando aplicação com PM2..."
npm start
