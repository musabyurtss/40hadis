# KirkhadisV1

## Localde duzgun calismasi icin
1. `npm i && npm start`.
2. `json-server --watch db.json` . (db.json u elle olusturdum.Root klasöründe)

Bi de hangi componentin hangi component icinde oldugunu anlamak icin augury eklentisini yukle selman.
Ben yine de yazdim asagiya.
 
```
#!javascript
 AppComponent
       LayoutComponent
        ListPageComponent // Bu container component, icindekiler basit component
            HadisListComponent
        DetailViewComponent // Bu container component, icindekiler basit component
            HadisListItemComponent
            HadisDetailComponent

```

 `npm i -D postcss-css-variables postcss-custom-properties postcss-apply postcss-calc postcss-nesting postcss-custom-media postcss-media-minmax postcss-custom-selectors postcss-attribute-case-insensitive postcss-color-rebeccapurple postcss-color-hwb postcss-color-gray postcss-color-hex-alpha postcss-color-function postcss-font-family-system-ui postcss-font-variant pleeease-filters postcss-initial postcss-selector-matches postcss-selector-not postcss-pseudo-class-any-link rucksack-css pixrem autoprefixer postcss-browser-reporter cssnano postcss-normalize postcss-import postcss-url`
