webpack-muliti-chunks-testing
============================

### Installation

```
npm install
bower install
```

### Build

```
npm run build
```

### Dev Server

```
npm run server
```


### Testing

- It will load modules dynamically
  - app.bundle.js will load a, b, d modules when it need them

- It should not load duplicate resources
  - a.css will load once

- It can specify where to be packed
  - c.js will be packed in common.bundle.js
