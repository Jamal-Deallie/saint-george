import React from "react";
import Landing from "../../Components/Landing/Landing";
import { HistoryPreview } from "../../Components/HistoryPreview/HistoryPreview";
import { History_Items, Store_Items } from "../../Shared/Preview_Items";
import { ProductsPreview } from "../../Components/ProductsPreview/ProductsPreview";


function HomePage() {
  return (
    <div>
      <Landing />
      <ProductsPreview />
      {History_Items.map(({ id, ...otherStoreProps }) => (
        <HistoryPreview key={id} {...otherStoreProps} />
      ))}

      {Store_Items.map(({ id, ...otherStoreProps }) => (
        <HistoryPreview key={id} {...otherStoreProps} />
      ))}
    </div>
  );
}

export default HomePage;
