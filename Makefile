start:
	pnpm dev
# make start

optimize-svg:
	npx svgo --multipass $f
# make optimize-svg f="/src/shared/ui/icons/icon.svg"

supabase-start:
	npx supabase start

supabase-stop:
	npx supabase stop

supabase-db-push:
	npx supabase db push

supabase-function-deploy:
	npx supabase functions deploy $f
# supabase functions deploy f=functionName