install:
	npm ci

build:
	rm -rf dist
	npm run build

start:
	make start-backend

start-backend:
	npx start-server -s ./dist

start-frontend:
	npm run dev

develop:
	make start-backend & make start-frontend

lint:
	npm run --silent lint
	npm run --silent format:check

lint-fix:
	npm run --silent lint:fix

layero-deploy:build 
	npx layero@latest deploy --prod --yes
