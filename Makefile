dev:
	myth css/stylesheet.css > css/bundle.css

build:
	myth -c css/stylesheet.css > css/bundle.css

.PHONY: dev build
