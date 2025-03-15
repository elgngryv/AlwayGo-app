import React from 'react';
const DetailFeature = ({ features }) => {
    return (
        <div>
            {
                features?.map((data, i) => (
                    <div className="border-b w-[668px] flex justify-between border-[#1D1D1D] py-[24px]">
                        <h2 className="font-medium text-base leading-[24px] text-[#00000099]">
                            {data?.title}
                        </h2>
                        <p className="font-semibold text-base leading-[24px] text-[#000000DE]">
                            {data?.text}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}
export default DetailFeature