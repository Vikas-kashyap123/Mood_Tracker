import axios from "axios";
import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProductsAction, productsLoadedAction } from "./actions/products";
import {
  productsLoadingSelector,
  productsSelector,
} from "./selectors/products";

type ProductListPageProps = {};

const ProductListPage: FC<ProductListPageProps> = (props) => {
  const loading = useSelector(productsLoadingSelector);
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsAction());
    axios
      .get("https://myeasykart.codeyogi.io/products")
      .then((response) => dispatch(productsLoadedAction(response.data.data)));
  }, []);
  return (
    <div className="mt-4">
      <div>
        {loading && <div className="text-4xl text-yellow-600">Loading...</div>}
      </div>
      <div className="sm:grid grid-cols-3 gap-4 sm:space-y-0 space-y-2 ">
        {products &&
          products.map((p) => (
            <div className="space-y-2  flex" key={p.id}>
              <div className="w-full h-full  shadow-2xl shadow-black">
                <div className=" aspect-square">
                  <img
                    className="object-cover w-full h-full hover:rounded-md"
                    src={p.thumbnail}
                  />
                </div>
                <div className="pl-1">
                  <div className="text-xs text-gray-500">{p.category}</div>
                  <div className="flex font-bold text-md word-break">
                    {p.title}
                  </div>
                  <img
                    className="w-20"
                    src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-1520x800.jpg"
                  />
                  <div className="text-xs">Rs.{p.price}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default memo(ProductListPage);
