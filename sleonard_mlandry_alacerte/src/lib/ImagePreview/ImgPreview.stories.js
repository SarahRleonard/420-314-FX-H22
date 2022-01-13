import {React, useState} from 'react';
import 'antd/dist/antd.css';
import {Image, Button, Space} from 'antd';

export default {
    title: "Image Previewing",
    component: Image,
    component: Button,
    component: Space,
};

export const ReloadImg = () => {
    const [random, setRandom] = useState();
    return (
    <Space size={12}>
      <Image
        width={200}
        src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={200}
          />
        }
      />
      <Button
        type="primary"
        onClick={() => {
          setRandom(Date.now());
        }}
      >
        Reload
      </Button>
    </Space>
    )
}

export const MultipleImg = () => {
    return (
        <Image.PreviewGroup>
            <Image width={200} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
            <Image
              width={200}
              src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            />
        </Image.PreviewGroup>
    )
};

ReloadImg.storyName = "Reload Image button";
MultipleImg.storyName = "Load multiple images";