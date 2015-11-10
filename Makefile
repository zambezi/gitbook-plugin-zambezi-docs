SHELL := /bin/bash
PATH  := $(shell echo $${PATH//\.\/node_modules\/\.bin:/}):node_modules/.bin

SRC = src/book.js
LIB = $(SRC:src/%.js=lib/assets/%.js)
TST = $(wildcard test/*.js) $(wildcard test/**/*.js)
NPM = @npm install --local > /dev/null && touch node_modules

v  ?= patch

build: node_modules $(LIB)
lib/assets/%.js: src/%.js
	@mkdir -p $(@D)
	@browserify --debug -t babelify $< > $@

node_modules: package.json
	$(NPM)
node_modules/%:
	$(NPM)

test: build
	@tape $(TST)

.nyc_output: node_modules
	@nyc $(MAKE) test

coverage: .nyc_output
	@nyc report --reporter=text-lcov | coveralls

dev: node_modules
	@nodemon -q -x "(clear; nyc $(MAKE) test | tap-dot && nyc report) || true"

release: clean build test
	@npm version $(v)
	@npm publish
	@git push --follow-tags

clean:
	@rm -rf $$(cat .gitignore)

.PHONY: build test coverage dev release clean