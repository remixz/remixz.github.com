dev:
	lessc css/stylesheet.less | autoprefixer > public/stylesheet.css
	cat js/*.js > public/bundle.js

build:
	lessc -x css/stylesheet.less | autoprefixer > public/stylesheet.css
	cat js/*.js | uglifyjs > public/bundle.js

.PHONY: dev build
