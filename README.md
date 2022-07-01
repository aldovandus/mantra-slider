# 🕉️ Mantra Slider

A simple and lightweight react slider for viewing pictures

![Screenshot from 2022-06-28 22-02-49](https://user-images.githubusercontent.com/12563425/176276110-da96fa76-f88c-4566-b056-e730649bba95.png)

## Installation

​
Install with npm
​

```bash
  npm install mantra-slider
```

​
Install with yarn
​

```bash
  yarn add mantra-slider
```

## Usage in react

```javascript
import { MantraImage, MantraSlider } from "mantra-slider";

<MantraSlider
    keyExtractor={(item: any) => item.src}
    hasControllers={false}
    renderItem={({ src }, index) => {
      return (
        <MantraImage key={index} index={index}>
          <img
            loading="lazy"
            alt={`${variant.name} image ${index}`}
            src={src}
          />
        </MantraImage>
      );
    }} 
    data={data}
/>
```

​

## Run with vite.js

```
  git clone https://github.com/aldovandus/react-pictures-viewer
  cd react-pictures-viewer
  yarn install
  yarn dev
```
