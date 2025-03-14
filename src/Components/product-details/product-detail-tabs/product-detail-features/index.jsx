import React from "react";
import DetailFeature from "./DetailFeature";

const ProductDetailFeatures = () => {
  const featuresData1 = [
    {
      title: 'Brand:',
      text: 'Dyson'
    },
    {
      title: 'Weight:',
      text: '0.84 kg'
    },
    {
      title: 'Protection from heat:',
      text: 'Yes'
    },
    {
      title: 'Cable lenght:',
      text: '2.8 m'
    },
    {
      title: 'Ionization:',
      text: 'Yes'
    },
    {
      title: 'Cold air supply:',
      text: 'Yes'
    },
    {
      title: 'Number of heating modes:',
      text: '4'
    },
    {
      title: 'Diffuser:',
      text: 'Yes'
    }
  ]

  const featuresData2 = [
    {
      title: 'Title number:',
      text: '5'
    },
    {
      title: 'Power:',
      text: '1600W'
    },
    {
      title: 'Product type:',
      text: 'Hair dryer'
    },
    {
      title: 'Color:',
      text: 'Sky'
    },
    {
      title: 'Warranty:',
      text: '2 years'
    },
    {
      title: 'Body Material:',
      text: 'Plastic'
    },
    {
      title: 'Sound level:',
      text: '77 dB'
    },
    {
      title: 'Speed ​​number:',
      text: '3'
    }
  ]
  return (
    <div className=" container sf-font max-w-[1440px] sf-font mx-auto fadeIn">
      <div className="flex gap-[24px]">
        <DetailFeature features={featuresData1}/>
        <DetailFeature features={featuresData2}/>
      </div>
    </div>
  );
};

export default ProductDetailFeatures;
