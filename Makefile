.PHONY: dev build

dev:
	hugo server --buildDrafts

build:
	hugo
