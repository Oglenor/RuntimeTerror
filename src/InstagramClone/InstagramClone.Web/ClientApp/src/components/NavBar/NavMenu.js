import React, {Component} from 'react';
import {Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown,DropdownToggle,DropdownItem, DropdownMenu} from 'reactstrap';
import {Link} from 'react-router-dom';
import './NavMenu.css';
import { HiHome, HiSearch} from 'react-icons/hi';
import { FiUpload } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import navBarPhoto from '../../assets/images/logo-horizontal.png';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.showSearchBar = this.showSearchBar.bind(this);
    this.state = {
      collapsed: true,
      searchBarShowed: false
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  showSearchBar(){
    this.setState({
      searchBarShowed: !this.state.searchBarShowed
    });
  }

  render () {
    return (
        <header>
          <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 fixed-top navbar-light bg-light" light>
            <Container>
              <NavbarBrand tag={Link} to="/">
                <img src={navBarPhoto} className="logo" alt=""/>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              {this.state.searchBarShowed && (
              <nav className="navbar navbar-light bg-light navbar-center">
                <form className="form-inline">
                  <input className="form-control mr-sm-2 input-search" type="search" placeholder="Search" aria-label="Search"/>
                </form>
              </nav>
              )}
              <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                <ul className="navbar-nav flex-grow">
                  <NavItem>
                    <NavLink className="text-dark" onClick={this.showSearchBar}><HiSearch size="24px"/></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/"><HiHome size="24px"/></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/upload"><FiUpload size="24px"/></NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav >
                      <CgProfile size="24px" className="text-dark"/>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Profile
                      </DropdownItem>
                      <DropdownItem>
                        Sign out
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </ul>
              </Collapse>
            </Container>
          </Navbar>
        </header>
    );
  }
}
