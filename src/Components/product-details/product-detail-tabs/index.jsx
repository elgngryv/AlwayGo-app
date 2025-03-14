import React, { useState } from 'react'
import ProductDetailFeatures from "./product-detail-features";
import ProductDetailOverview from "./product-detail-overview";
import ProductDetailPhotos from "./product-detail-photos";
import ProductDetailtReviews from "./product-detail-reviews";

const ProductDetailTabs = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const tabs = [
        {
            tabTitle: "Overview",
            tab: ProductDetailOverview,
        },
        {
            tabTitle: "Features",
            tab: ProductDetailFeatures,
        },
        {
            tabTitle: "Reviews",
            tab: ProductDetailtReviews,
        },
        {
            tabTitle: "Photos",
            tab: ProductDetailPhotos,
        }
    ]
    return (
        <section>
            <div className="flex gap-4">
                {
                    tabs.map((tab, i) => (
                        <button type="button" key={i}
                            className={`font-medium text-base leading-[24px] cursor-pointer ${activeTabIndex == i
                                ? "text-[#45658B] border-b-2 border-[#45658B]"
                                : "text-[#000000DE]"
                                }`}
                            onClick={() => setActiveTabIndex(i)}>
                            {tab.tabTitle}
                        </button>
                    ))
                }
            </div>
            {
                tabs.map((tab, i) => {
                    return activeTabIndex == i && <tab.tab key={i}/>
                })
            }
        </section>
    )
}

export default ProductDetailTabs