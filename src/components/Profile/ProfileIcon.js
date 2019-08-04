import React from 'react';
import { 
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import './ProfileIcon.css';


class ProfileIcon extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            dropdownOpen: false
        }
    }

    toggle = () => {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

    render () {
        const {onRouteChange, toggleModal} = this.props
        return (
            <div className="pa4 tc">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle
                        tag="span"
                        data-toggle="dropdown"
                        aria-expanded={this.state.dropdownOpen}
                        >
                            <img
                                src="http://tachyons.io/img/logo.jpg"
                                className="br-100 h3 w3 dib" alt="avatar" />
                    </DropdownToggle>
                    <DropdownMenu right className="b--transparent shadow-5" style={{ backgroundColor:"rgba(255, 255, 255, 0.5)" }}>
                        <DropdownItem onClick={toggleModal}>View profile</DropdownItem>
                        <DropdownItem onClick={() => onRouteChange("signout")}>Sign Out</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
           
          </div>
        )
    }
}

export default ProfileIcon