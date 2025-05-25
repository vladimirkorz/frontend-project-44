install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

setup: install lint

.PHONY: install brain-games publish lint setup