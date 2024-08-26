POST_COMMIT_HOOK_SRC=./scripts/post-commit
POST_COMMIT_HOOK_DST=./.git/hooks/post-commit

dev:
	@echo "Starting Hugo server for development..."
	hugo server --buildDrafts

# Target to build the Hugo site
build:
	@echo "Building the Hugo site..."
	hugo

# Target to run the post-commit script
publish:
	@echo "Running the post-commit script..."
	./.git/hooks/post-commit

# Target to set up the post-commit hook
setup:
	@echo "Setting up the post-commit hook..."
	cp $(POST_COMMIT_HOOK_SRC) $(POST_COMMIT_HOOK_DST)
	chmod +x $(POST_COMMIT_HOOK_DST)
