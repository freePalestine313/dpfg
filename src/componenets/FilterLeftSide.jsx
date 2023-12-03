import React from "react";
import { Col, Row } from "react-bootstrap";
import { useMyAppContext } from "../contexts/AppContext";
import SelectBox from "../formcompo/SelectBox";

export default function FilterLeftSide() {
  const {
    categoryOptions,
    categoryFilter,
    categoryHandleChange,
    countryOptions,
    countryFilter,
    countryHandleChange,
    parentCompanyOptions,
    parentCompanyFilter,
    parentCompanyHandleChange,
  } = useMyAppContext();

  return (
    <div>
      <div className="sticky-top">
        <SelectBox
          controlId={"categories"}
          options={categoryOptions}
          filter={categoryFilter}
          handler={categoryHandleChange}
          placeholder="Filter by your Category"
        />

        <SelectBox
          controlId={"countries"}
          options={countryOptions}
          filter={countryFilter}
          handler={countryHandleChange}
          placeholder="Filter by your Country"
        />

        <SelectBox
          controlId={"parentCompany"}
          options={parentCompanyOptions}
          filter={parentCompanyFilter}
          handler={parentCompanyHandleChange}
          placeholder="Filter by your Paren Company"
        />
      </div>
    </div>
  );
}
