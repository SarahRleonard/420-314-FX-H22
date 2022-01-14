import React, { useState } from 'react';
import { Image } from 'antd';

/**
 * Onclick, displays a collection of images to showcase a product
 */
export const Collection = ({width}) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Image
        preview={{ visible: false }}
        width={width}
        src="https://cb2.scene7.com/is/image/CB2/BlackDipCoffeeMug14ozSHF16/$web_pdp_main_carousel_md$/190905021631/black-dip-coffee-mug.jpg"
        onClick={() => setVisible(true)}
      />
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
          <Image src="https://cb2.scene7.com/is/image/CB2/BlackDipCoffeeMug14ozSHF16/$web_pdp_main_carousel_md$/190905021631/black-dip-coffee-mug.jpg" />
          <Image src="https://cb2.scene7.com/is/image/CB2/BlackDipMugGroupFHF17/$web_pdp_main_carousel_md$/220109072005/BlackDipMugGroupFHF17.jpg" />
        </Image.PreviewGroup>
      </div>
    </>
  );
};






