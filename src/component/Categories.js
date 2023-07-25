import React, { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem";

function Categories() {
  
  return (
    <div className="py-18 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-4 m-6 gap-4">
        {/* Gambar 1 */}
        <div>
          <img
            className="rounded-lg mx-auto sm:mx-0"
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
            src="https://plus.unsplash.com/premium_photo-1682716387450-3c718483edb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=710&q=80"
          />
        </div>
        {/* Gambar 2 */}
        <div>
          <img
            className="rounded-lg mx-auto sm:mx-0"
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
            src="https://images.unsplash.com/photo-1506898667547-42e22a46e125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=706&q=80"
          />
        </div>
        {/* Gambar 3 */}
        <div>
          <img
            className="rounded-lg mx-auto sm:mx-0"
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
            src="https://images.unsplash.com/photo-1668082369739-e144ce152f02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          />
        </div>

        {/* Accordion */}
        <div className="text-center sm:text-left">
          <p className="text-black font-semibold text-xl mt-6 mb-4">
            Categories
          </p>
          <p className="text-black font-bold text-5xl mb-10">
            Furniture Sets Recommendations
          </p>
          <AccordionItem
            title="Bedroom"
            content="Enjoy a great living room aesthetics with your family. Designs created for increased comfortability."
          />
          <AccordionItem
            title="Living Room"
            content="Enjoy a great living room aesthetics with your family. Designs created for increased comfortability."
          />
          <AccordionItem
            title="Home Office"
            content="Enjoy a great living room aesthetics with your family. Designs created for increased comfortability."
          />
          <AccordionItem
            title="Gaming Room"
            content="Enjoy a great living room aesthetics with your family. Designs created for increased comfortability."
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;
