import React, { Component } from "react";
import { AutoComplete } from "primereact/autocomplete";

export class AutoCompleteDemo extends Component {
  constructor() {
    super();
    this.state = {
      countriesData: [],
    //   filteredCountriesSingle: null,
    //   filteredBrands: null,
    //   filteredCountriesMultiple: null,
    };

    // this.filterCountrySingle = this.filterCountrySingle.bind(this);
    // this.filterBrands = this.filterBrands.bind(this);
    // this.filterCountryMultiple = this.filterCountryMultiple.bind(this);
    // this.countryservice = new CountryService();
  }

//   componentDidMount() {
//     this.countriesData = ["Romania", "Eire", "Suomi", "NZ"];
//     this.brands = [
//       "Audi",
//       "BMW",
//       "Fiat",
//       "Ford",
//       "Honda",
//       "Jaguar",
//       "Mercedes",
//       "Renault",
//       "Volvo",
//     ];
//   }

//   filterCountrySingle(event) {
//     setTimeout(() => {
//       var results = this.state.countriesData.filter((country) => {
//         return country.name.toLowerCase().startsWith(event.query.toLowerCase());
//       });
//       this.setState({ filteredCountriesSingle: results });
//     }, 250);
//   }

//   filterBrands(event) {
//     setTimeout(() => {
//       let results;

//       if (event.query.length === 0) {
//         results = [...this.brands];
//       } else {
//         results = this.brands.filter((brand) => {
//           return brand.toLowerCase().startsWith(event.query.toLowerCase());
//         });
//       }

//       this.setState({ filteredBrands: results });
//     }, 250);
//   }

//   filterCountryMultiple(event) {
//     setTimeout(() => {
//       let results = this.state.countriesData.filter((country) => {
//         return country.name.toLowerCase().startsWith(event.query.toLowerCase());
//       });

//       this.setState({ filteredCountriesMultiple: results });
//     }, 250);
//   }

  itemTemplate(brand) {
    return (
      <div className="p-clearfix">
        <img
          alt={brand}
          src={"showcase/resources/demo/images/car/${brand}.png"}
          style={{
            width: "32px",
            display: "inline-block",
            margin: "5px 0 2px 5px",
          }}
        />
        <div
          style={{ fontSize: "16px", float: "right", margin: "10px 10px 0 0" }}
        >
          {brand}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="content-section implementation">
          <h3>Multiple</h3>
          <span className="p-fluid">
            <AutoComplete
              value={this.state.countries}
              suggestions={this.state.filteredCountriesMultiple}
              completeMethod={this.filterCountryMultiple}
              minLength={1}
              placeholder="Countries"
              field="name"
              multiple={true}
              onChange={(e) => this.setState({ countries: e.value })}
            />
          </span>
        </div>
      </div>
    );
  }
}
