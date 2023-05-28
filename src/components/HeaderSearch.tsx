import { ChangeEvent, useState } from "react";
import { useHeaderProducts } from "../helper/hooks";
import "../assets/css/HeadingSearch.css";
import Loader from "./Loader";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useWindowSize } from "react-use";
import { AiOutlineLeft } from "react-icons/ai";

interface props {
  showMobileSearch: boolean;
  displayMobileSearch: () => void;
  hideMobileSearch: () => void;
}

const HeaderSearch: React.FC<props> = ({
  showMobileSearch,
  displayMobileSearch,
  hideMobileSearch,
}) => {
  const { width } = useWindowSize();
  const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const getProducts = useHeaderProducts();
  const products = getProducts.data ?? [];

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (event.target.value.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const onSearch = (searchTerm: string) => {
    setValue(searchTerm);
    const chosenProduct = products.find((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    navigate(`/products/${chosenProduct?.id}`);
    navigate(0);
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 300);
  };

  const iconClicked = () => {
    if (width > 600) {
      onSearch(value);
    } else {
      if (showMobileSearch) {
        onSearch(value);
        hideMobileSearch();
      } else {
        displayMobileSearch();
      }
    }
  };

  const hideSearch = () => {
    setValue("");
    hideMobileSearch();
  };

  return (
    <div className="search-container">
      <div
        className={showMobileSearch ? "search-inner active" : "search-inner"}
      >
        {showMobileSearch && (
          <AiOutlineLeft
            color="#60be74"
            size={50}
            onClick={hideSearch}
            className="me-3"
          />
        )}
        <input
          type="text"
          className={showMobileSearch ? "active-search me-3" : ""}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={() => setShowSuggestions(true)}
        />
        <button className="header-search-btn" onClick={iconClicked}>
          {" "}
          <FaSearch color="white" />{" "}
        </button>
      </div>
      <div className="dropdown-s">
        {showSuggestions && (
          <div>
            {getProducts.isLoading ? (
              <Loader />
            ) : (
              <div>
                {products
                  .filter((product) => {
                    const searchTerm = value.toLowerCase();
                    const fullName = product.title.toLowerCase();

                    return (
                      searchTerm &&
                      fullName.includes(searchTerm) &&
                      fullName !== searchTerm
                    );
                  })
                  .slice(0, 10)
                  .map((product) => (
                    <div
                      onClick={() => onSearch(product.title)}
                      className="dropdown-row-s"
                      key={product.title}
                    >
                      <Link
                        className="drop-link-s"
                        to={`/products/${product.id}`}
                      >
                        {product.title}
                      </Link>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderSearch;
