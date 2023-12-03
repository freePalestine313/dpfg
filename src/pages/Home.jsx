import React, { useState } from "react";
import { AppContextProvider } from "../contexts/AppContext";
import {
  categoryOptions,
  countryOptions,
  parentCompanyOptions,
} from "./../data/FilterData.js";
import products from "./../data/products.json";
import FilterLeftSide from "../componenets/FilterLeftSide";
import CenterFilter from "../componenets/CenterFilter";
import { Col, Row } from "react-bootstrap";
import ProductListing from "../componenets/ProductListing";
import ProductDetailsPopup from "../componenets/ProductDetailsPopup";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [countryFilter, setCountryFilter] = useState([]);
  const [parentCompanyFilter, setParentCompanyFilter] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);

  const clearFilters = () => {
    setSearchTerm("");
    setCategoryFilter([]);
    setCountryFilter([]);
    setParentCompanyFilter([]);
  };

  const categoryHandleChange = (selectedOptions) => {
    setCategoryFilter(selectedOptions.map((option) => option.value));
  };

  const countryHandleChange = (selectedOptions) => {
    setCountryFilter(selectedOptions.map((option) => option.value));
  };

  const parentCompanyHandleChange = (selectedOptions) => {
    setParentCompanyFilter(selectedOptions.map((option) => option.value));
  };

  const filteredProducts = products.filter((product) => {
    const isMatchingProduct = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const isMatchingCategories =
      categoryFilter.length === 0 ||
      categoryFilter.some((selectedCategories) =>
        product.categories.includes(selectedCategories)
      );
    const isMatchingCountry =
      countryFilter.length === 0 ||
      countryFilter.some((selectedCountry) =>
        product.countries.includes(selectedCountry)
      );
    const isMatchingParentCompany =
      parentCompanyFilter.length === 0 ||
      parentCompanyFilter.includes(product.parentCompany);
    return (
      isMatchingProduct &&
      isMatchingCategories &&
      isMatchingCountry &&
      isMatchingParentCompany
    );
  });

  const openPopUp = (product) => {
    setSelectedProduct(product);
    setShowDetailsPopup(true);
  };

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <AppContextProvider
        value={{
          categoryOptions,
          categoryFilter,
          categoryHandleChange,
          countryOptions,
          countryFilter,
          countryHandleChange,
          parentCompanyOptions,
          parentCompanyFilter,
          parentCompanyHandleChange,
          clearFilters,
          searchTerm,
          setSearchTerm,
          filteredProducts,
          openPopUp,
        }}
      >
        <div className="container mt-4">
          <Row>
            <Col md={3}>
              <FilterLeftSide />
            </Col>
            <Col md={9}>
              <CenterFilter />
              <ProductListing />
              <ProductDetailsPopup
                show={showDetailsPopup}
                onHide={() => {
                  setShowDetailsPopup(false);
                  setSelectedProduct(null);
                }}
                product={selectedProduct}
              />
            </Col>
          </Row>
        </div>
      </AppContextProvider>
    </div>
  );
}
