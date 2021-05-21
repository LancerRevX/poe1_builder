npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:LancerRevX/poe1_builder.git master:build

cd ../