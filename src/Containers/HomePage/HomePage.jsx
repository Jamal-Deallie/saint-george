import React from "react";
import Landing from "../../Components/Landing/Landing";
import { HistoryPreview } from "../../Components/HistoryPreview/HistoryPreview";
import { History_Items, Store_Items } from "../../Shared/Preview_Items";
import { ProductsPreview } from "../../Components/ProductsPreview/ProductsPreview";

function HomePage() {
  return (
    <div>
      <Landing/>
      <ProductsPreview />
      {History_Items.map((item) => {
        return (
          <HistoryPreview
            title={item.title}
            imgUrl={item.ImgUrl}
            paragraph={item.paragraph}
            src={item.src}
            key={item.id}
          />
        );
      })}

      {Store_Items.map((item) => {
        return (
          <HistoryPreview
            title={item.title}
            imgUrl={item.ImgUrl}
            paragraph={item.paragraph}
            src={item.src}
            key={item.id}
          />
        );
      })}
    </div>
  );
}

export default HomePage;
