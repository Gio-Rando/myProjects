import "./index.css";
import data from "../public/data.json";
import React, { useState } from "react";
function App() {
  const keyLabels: Record<string, string> = {
    atomicNumber: "Atomic Number",
    symbol: "Symbol",
    name: "Name",
    nameGeo: "Name(Geo)",
    atomicMass: "Atomic Mass",
    electronicConfiguration: "Electronic Configuration",
    electronegativity: "Electronegativity",
    atomicRadius: "Atomic Radius",
    ionRadius: "Ion Radius",
    vanDerWaalsRadius: "Van Der Waals Radius",
    ionizationEnergy: "Ionization Energy",
    electronAffinity: "Electron Affinity",
    oxidationStates: "Oxidation States",
    standardState: "Standard State",
    bondingType: "Bonding Type",
    meltingPoint: "Melting Point",
    boilingPoint: "Boiling Point",
    density: "Density",
    groupBlock: "Group Block",
    yearDiscovered: "Year Discovered",
  };

  let [filter, setFilter] = useState<typeof data>([]);
  const OnInput = (e: React.FormEvent<HTMLInputElement>) => {
    setFilter(
      data.filter(
        (datael) =>
          datael.symbol.toUpperCase() == e.currentTarget.value.toUpperCase() ||
          datael.name.toUpperCase() == e.currentTarget.value.toUpperCase() ||
          datael.nameGeo.toUpperCase() == e.currentTarget.value.toUpperCase() ||
          datael.atomicNumber == Number(e.currentTarget.value)
      )
    );
  };
  return (
    <div className="flex flex-col items-center m-5 sm:m-20 gap-5 w-[612px] h-[552px]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="bg-[#0B1E2E] text-white rounded-xl p-1"
          placeholder="O, Oxygen, ჟანგბადი or 8"
          name="search"
          type="text"
          onInput={OnInput}
        />
        <img src="" alt="" />
      </form>
      <div className={`sm:flex-row flex flex-col items-center gap-5 duration-300 w-full ${filter.length == 0 ? " opacity-0" : "opacity-100"}`}>
        {
          filter.map((dataEl) => {
            return (
              <React.Fragment>
                <div
                  key={dataEl.name}
                  className={`relative p-27 text-white text-shadow-[0_0_3px_black] border-8 duration-600 border-[rgba(0,0,0,0.3)] ${
                    filter.length == 0 ? "opacity-0" : "opacity-100"
                  } rounded-3xl`}
                  style={{ backgroundColor: `#${dataEl.cpkHexColor}` }}
                >
                  <h5 className="text-4xl absolute right-0.5 top-0.5">
                    {dataEl.atomicNumber}
                  </h5>
                  <h1 className="text-9xl absolute left-1/2 top-[41%] -translate-x-1/2 -translate-y-1/2">
                    {dataEl.symbol}
                  </h1>
                  <h4 className="text-3xl absolute bottom-3 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    {dataEl.name}
                  </h4>
                  <h6 className="text-lg absolute -bottom-3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {dataEl.atomicMass}
                  </h6>
                </div>
                <div className="sm:w-2 w-[300px] sm:h-[520px] h-2 invert-100 rounded-2xl" style={{ backgroundColor: `#${dataEl.cpkHexColor}` }}></div>
                <table>
                  {Object.entries(dataEl).map(([key, value], i) => {
                    if (
                      key === "cpkHexColor" ||
                      (key !== "cpkHexColor" && value == "")
                    )
                      return null;
                    return (
                      <tr key={i} className="text-white">
                        <th className="border-b-2 border-r-2 text-start border-[#102c42] border-collapse px-1">
                          {keyLabels[key] ?? key}
                        </th>
                        <td className="border-b-2 text-center border-[#102c42] border-collapse px-1">
                          {String(value)}
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </React.Fragment>
            );
          })
        }
      </div>
        {
          filter.length == 0 ? (<h1 className="text-[#ffff40] flex items-center justify-center">Enter a valid element</h1>) : ("")
        }
    </div>
  );
}

export default App;
