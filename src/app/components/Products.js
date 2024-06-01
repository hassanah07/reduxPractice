import Link from "next/link";
import React from "react";
import CartBtn from "./CartBtn";

const Products = async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  response = await response.json();
  console.log(response);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {response.map((state, index) => {
              return (
                <div className="xl:w-1/3 md:w-1/2 p-4" key={index}>
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <Link href="/">
                      {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                        GW
                      </div> */}
                      <h2 className="text-lg text-gray-900 dark:text-slate-400 font-medium title-font mb-2">
                        {state.category}
                      </h2>
                      <img
                        src={state.image}
                        alt={state.name}
                        className="h-36"
                      />
                    </Link>
                    <CartBtn product={state} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
