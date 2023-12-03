import products from "./products.json";

export const uniqueCategories = Array.from(
  new Set(
    products.flatMap((product) => product.categories || []).filter(Boolean)
  )
);
export const uniqueCountries = Array.from(
  new Set(
    products.flatMap((product) => product.countries || []).filter(Boolean)
  )
);
export const uniqueParentCompanies = Array.from(
  new Set(
    products.map((product) => product.parentCompany || "").filter(Boolean)
  )
);


export const categoryOptions = uniqueCategories.map((category) => ({
  value: category,
  label: category,
}));

export const countryOptions = uniqueCountries.map((countries) => ({
  value: countries,
  label: countries,
}));

export const parentCompanyOptions = uniqueParentCompanies.map((parentCompany) => ({
  value: parentCompany,
  label: parentCompany,
}));
