start:
	pnpm dev
# make start

optimize-svg:
	npx svgo --multipass $f
# make optimize-svg f="/src/shared/ui/icons/icon.svg"
