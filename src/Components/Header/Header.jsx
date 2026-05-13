import { useEffect, useState } from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";
function Header() {
  const [isSearchOpen, setisSearchOpen] = useState(false);
  const [isProfileOpen, setisProfileOpen] = useState(false);

  //for blur
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* logo */}
        <img className={styles.logo} src={logo} alt="" />

        {/* navigation link */}
        <nav className={styles.nav}>
          <Link className={styles.navlink} to="">
            Home
          </Link>
          <Link className={styles.navlink} to="">
            Tv Show
          </Link>
          <Link className={styles.navlink} to="">
            Movies
          </Link>
          <Link className={styles.navlink} to="">
            New & Popular
          </Link>
          <Link className={styles.navlink} to="">
            My List
          </Link>
          <Link className={styles.navlink} to="">
            Browse by Language
          </Link>
        </nav>
        {/* Right side */}
        <div className={styles.rightSection}>
          {/* search  */}
          <div className={styles.searchContainer}>
            <button
              onClick={() => setisSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
            >
              {/* search button */}
              <Search size={20} />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="movie tittle"
                className={styles.searchInput}
              />
            )}
          </div>
          {/* notification */}
          <div>
            <button className={styles.iconButton}>
              {/* botification button */}
              <Bell size={20} />
              <span className={styles.notificationBadge}>4</span>
            </button>
          </div>
          {/* profile */}
          <div className={styles.profileContainer}>
            <button
              onClick={() => setisProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
            >
              {isProfileOpen && (
                <div className={styles.profileMenu}>
                  <Link className={styles.profileMenuItem}>Account</Link>
                  <Link className={styles.profileMenuItem}>Help Center</Link>
                  <hr className={styles.profileMenuDivider} />
                  <Link className={styles.profileMenuItem}>Sign Out</Link>
                </div>
              )}
              {/* user icon  */}
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>

              {/* drop down icon  */}
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
