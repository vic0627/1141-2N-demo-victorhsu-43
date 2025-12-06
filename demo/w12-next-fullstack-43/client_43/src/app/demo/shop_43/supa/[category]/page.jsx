"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/db/clientSupabase";

import Wrapper from "@/assets/wrappers/midterm/Shop_43";
import Product_43 from "@/components/midterm/Product_43";

const FetchShopByCategory_43 = () => {
  const [shop_43, setShop_43] = useState([]);
  const params = useParams();
  const category = params.category;
  console.log("category", category);

  const fetchShopFromSupaServer = async () => {
    try {
      const { data: cat } = await supabase
        .from("category2_43")
        .select("cid")
        .eq("cname", category)
        .single();
      const { data } = await supabase
        .from("shop2_43")
        .select("*")
        .eq("cat_id", cat.cid);
      console.log("data", data);
      setShop_43(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchShopFromSupaServer();
  }, []);

  return (
    <Wrapper>
      <div className="shop-page">
        <div className="section-title">
          <h3>Victor Hsu, 213410243</h3>
        </div>
        <div className="collection-page">
          <h1 className="title">
            {category[0].toUpperCase() + category.slice(1)}
          </h1>
          <div className="items">
            {shop_43.map(({ pid, pname, img_url, price }) => (
              <Product_43
                key={pid}
                name={pname}
                img_url={img_url}
                price={price}
              />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FetchShopByCategory_43;
