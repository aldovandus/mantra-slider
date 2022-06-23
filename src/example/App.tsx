import { MantraImage, MantraSlider } from '../index';
import './App.css';

const data = [
  {
    src: 'https://strapi.zigros.it/uploads/large_Viola_064_VERGINE_40_ACRILICO_MERCERIE_ZIGROS_NAPOLI_9703ef33e4.jpg?auto=format&fit=max&w=750',
    smallSrc:
      'https://strapi.zigros.it/uploads/thumbnail_Viola_064_VERGINE_40_ACRILICO_MERCERIE_ZIGROS_NAPOLI_9703ef33e4.jpg?auto=format&fit=max&w=128',
  },

  {
    src: 'https://strapi.zigros.it/uploads/large_BORDO_36_LANA_VERGINE_40_ACRILICO_MERCERIE_ZIGROS_NAPOLI_6656ef1a39.jpg?auto=format&fit=max&w=750',
    smallSrc:
      'https://strapi.zigros.it/uploads/thumbnail_BORDO_36_LANA_VERGINE_40_ACRILICO_MERCERIE_ZIGROS_NAPOLI_6656ef1a39.jpg?auto=format&fit=max&w=128',
  },
  {
    src: 'https://strapi.zigros.it/uploads/medium_20210729_151443_d0e49067ce.jpg',
    smallSrc:
      'https://strapi.zigros.it/uploads/medium_20210729_151443_d0e49067ce.jpg',
  },
];

function App() {
  return (
    <div
      className='App'
      style={{
        maxWidth: 700,
        margin: '0 auto',
      }}>
      <div
        style={{
          marginTop: 6,
          paddingBottom: 22,
        }}>
        <h1>🕉️ Mantra Slider</h1>
        <p>A simple and lightweight slider for viewing pictures ⚡️</p>
      </div>
      <MantraSlider
        keyExtractor={(item) => item.src}
        initialImageIndex={1}
        isZoomEnabled={true}
        data={data}
        renderItem={(item, index) => (
          <MantraImage index={index} key={index}>
            <img src={item.src} />
          </MantraImage>
        )}
      />
    </div>
  );
}

export default App;
