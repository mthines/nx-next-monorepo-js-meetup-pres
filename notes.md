## Generator

```sh
# Application
npx nx g @nx/next:lib my-new-app
# Library
npx nx g @nx/next:lib features-products --directory=libs/features/products
```

## Executors

```sh
# Example
npx nx run [app-name]:[executor-name] [options]

# Next Monorepo Application
npx nx run next-monorepo:serve
```

```sh
# Example
npx nx run [app-name]:[executor-name] [options]

# Generate icons in UI Library
npx nx run ui:generate
```

## Affected

```sh
# Linting
npx nx affected --target=lint
```

## Graph

```sh
# Linting
nx graph
```
