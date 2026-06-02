// DA IMPLEMENTARE IN FUTURO IN SearchBar.tsx, ora è tutto già all'interno di SearchBar.tsx

// import searchIcon from "/src/assets/icons/search-icon.svg";

// type Props = {
//   value: string;
//   onChange: (value: string) => void;
//   onSearch: () => void;
// };

// export function SearchInput({ value, onChange, onSearch }: Props) {
//   return (
//     <div className="search-bar-container">
//       <span className="search-bar-prefix" aria-hidden="true">
//         &gt;
//       </span>

//       <input
//         id="search-bar-input"
//         type="text"
//         placeholder="search..."
//         aria-label="Search"
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         onKeyDown={(e) => {
//           if (e.key === "Enter") {
//             onSearch();
//           }
//         }}
//       />

//       <button
//         className="search-icon"
//         aria-label="Search"
//         onClick={onSearch}
//       >
//         <img src={searchIcon} alt="" />
//       </button>
//     </div>
//   );
// }