# KirkhadisV1

## Localde duzgun calismasi icin
1. `npm i && npm start`.
2. `json-server --watch db.json` . (db.json u elle olusturdum.Root klasöründe)

Bi de hangi componentin hangi component icinde oldugunu anlamak icin augury eklentisini yukle selman.

 `AppComponent
    LayoutComponent
        router-outlet (name="primary")
        ListPageComponent // Bu container component, altindakiler basit component
            HadisListComponent
        DetailViewComponent // Bu container component, altindakiler basit component
            HadisListItemComponent
            HadisDetailComponent`