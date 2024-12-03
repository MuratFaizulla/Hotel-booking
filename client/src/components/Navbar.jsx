import { IconButton } from "@mui/material";
import { Search, Person, Menu } from "@mui/icons-material";
import variables from "../styles/variables.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { setLogout } from "../redux/state";


const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  return (
    <div className="navbar">
      <a href="/">
        <img src="/assets/logo.png" alt="logo" />
      </a>

      <div className="navbar_search">
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton disabled={search === ""}>
          <Search
            sx={{ color: variables.pinkred }}
            onClick={() => {navigate(`/properties/search/${search}`)}}
          />
        </IconButton>
      </div>

      <div className="navbar_right">
        {user ? (
          <a href="/create-listing" className="host">
            Өз үйіңізді еңгізіңіз
          </a>
        ) : (
          <a href="/login" className="host">
            Өз үйіңізді еңгізіңіз
          </a>
        )}

        <button
          className="navbar_right_account"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        >
          <Menu sx={{ color: variables.darkgrey }} />
          {!user ? (
            <Person sx={{ color: variables.darkgrey }} />
          ) : (
            <img
              src={`http://localhost:3001/${user.profileImagePath.replace(
                "public",
                ""
              )}`}
              alt="profile photo"
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          )}
        </button>

        {dropdownMenu && !user && (
          <div className="navbar_right_accountmenu">
            <Link to="/login">Жүйеге кіру</Link>
            <Link to="/register">Тіркелу</Link>
          </div>
        )}

        {dropdownMenu && user && (
          <div className="navbar_right_accountmenu">
            <Link to={`/${user._id}/trips`}>Саяхат тізімі</Link>
            <Link to={`/${user._id}/wishList`}>Маған ұнайды</Link>
            <Link to={`/${user._id}/properties`}>Менің үйім</Link>
            <Link to={`/${user._id}/reservations`}>Менің брондарым</Link>
            <Link to="/create-listing">Өз үйіңізді еңгізіңіз</Link>

            <Link
              to="/login"
              onClick={() => {
                dispatch(setLogout());
              }}
            >
              Шығу
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
