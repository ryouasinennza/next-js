# volta対応するまで暫定対応

pnpm_version=$(cat ./package.json | jq -r .volta.pnpm)
volta install pnpm@"$pnpm_version"
