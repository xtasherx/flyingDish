import "cirrus-ui";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheeseburger } from '@fortawesome/pro-light-svg-icons'

const Header = () => {

    return (
        <div className="header header-fixed u-unselectable header-clear header-animated">
        <div className="header-brand">
            <div className="nav-item no-hover">
                <a><h4 className="title text-light"><FontAwesomeIcon icon={faCheeseburger} color="white"></FontAwesomeIcon>FlyingDish</h4></a>
            </div>
            <div className="nav-item nav-btn" id="header-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className="header-nav" id="header-menu">
            <div className="nav-left">
                
            </div>

            <div className="nav-right">
              <div className="nav-item">
                  <a className="text-light">Login/<span className="text-red-600">Sign Up</span></a>
              </div>
              <div className="nav-item">

              </div>
            </div>
        </div>
    </div>
    )
        
}

export default Header;