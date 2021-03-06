#  Angular 2/4.x side project (+ngrx)  [demo](https://chauffer-mule-17011.netlify.com)

   ![](https://github.com/musabyurtss/40hadis/blob/master/40hadis.gif)


## Run
* `npm i && npm start`

## Todos
  - [ ] Universal app  (SEO friendly)
  - [ ] Lazy loading
  - [ ] Aot 


## Dumb/Container Components 
 
```
|   favicon.ico
|   index.html
|   main.ts
|   polyfills.ts
|   styles.css
|   test.ts
|   tsconfig.json
|
+---app
|   |   app.component.css
|   |   app.component.html
|   |   app.component.spec.ts
|   |   app.component.ts
|   |   app.module.ts
|   |
|   +---components
|   |   |   index.ts
|   |   |
|   |   +---footer
|   |   |       footer.component.css
|   |   |       footer.component.html
|   |   |       footer.component.spec.ts
|   |   |       footer.component.ts
|   |   |
|   |   +---hadis-list-item
|   |   |       hadis-list-item.component.css
|   |   |       hadis-list-item.component.html
|   |   |       hadis-list-item.component.spec.ts
|   |   |       hadis-list-item.component.ts
|   |   |
|   |   +---hadis-logo
|   |   |       hadis-logo.component.css
|   |   |       hadis-logo.component.html
|   |   |       hadis-logo.component.spec.ts
|   |   |       hadis-logo.component.ts
|   |   |
|   |   +---hadis-text
|   |   |       hadis-text.component.css
|   |   |       hadis-text.component.html
|   |   |       hadis-text.component.spec.ts
|   |   |       hadis-text.component.ts
|   |   |
|   |   +---load-button
|   |   |       load-button.component.css
|   |   |       load-button.component.html
|   |   |       load-button.component.spec.ts
|   |   |       load-button.component.ts
|   |   |
|   |   \---navigation
|   |           navigation.component.css
|   |           navigation.component.html
|   |           navigation.component.spec.ts
|   |           navigation.component.ts
|   |
|   +---containers
|   |   |   container.module.ts
|   |   |   index.ts
|   |   |
|   |   +---detail-view
|   |   |       detail-view.component.css
|   |   |       detail-view.component.html
|   |   |       detail-view.component.spec.ts
|   |   |       detail-view.component.ts
|   |   |       detail-view.resolver.ts
|   |   |       detail-view.routes.ts
|   |   |
|   |   \---main-page
|   |           main-page.component.css
|   |           main-page.component.html
|   |           main-page.component.spec.ts
|   |           main-page.component.ts
|   |           main-page.resolver.ts
|   |           main-page.routes.ts
|   |
|   \---modules
|       \---ngrx
|           |   index.ts
|           |
|           +---actions
|           |       hadis.ts
|           |       hadisItem.ts
|           |       index.ts
|           |
|           +---effects
|           |       hadis.ts
|           |       index.ts
|           |
|           +---models
|           |       hadis.ts
|           |       index.ts
|           |
|           +---reducers
|           |       hadis.ts
|           |       hadisItem.ts
|           |       index.ts
|           |
|           \---services
|                   hadis.data.service.ts
|                   index.ts
|
+---assets
|       .gitkeep
|
+---environments
|       environment.prod.ts
|       environment.ts
|
\---styles
    |   applies.css
    |   base.css
    |   common.css
    |   fonts.css
    |   variables.css
    |
    \---resources
            ١.svg
            ٤..png
            ٤..svg

```

