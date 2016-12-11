import React from 'react';
import { Link, IndexLink } from 'react-router';
import uuidV4 from 'uuid/v4';
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.routeList = [];
        this.handleMobileMenuClick = this.handleMobileMenuClick.bind(this);
        this.state = { showMobileMenu: false };
    }
    _getDisplayName(route) {
        let name = null;

        if (typeof route.getDisplayName === 'function') {
            name = route.getDisplayName();
        }

        if (route.indexRoute) {
            name = name || route.indexRoute.displayName || null;
        } else {
            name = name || route.displayName || null;
        }

        //check to see if a custom name has been applied to the route
        if (!name && !!route.name) {
            name = route.name;
        }

        //if the name exists and it's in the excludes list exclude this route
        //if (name && this.props.excludes.some(item => item === name)) return null;

        if (!name) {
            name = "";
        }

        return name;
    }

    _checkAddRoutes(route, isRoot) {
        let name = this._getDisplayName(route);
        let exist = this.routeList.find(y => y.path === route.path);
        if (exist == null && name && route.path) {
            if (!isRoot) {
                route.path = '/' + route.path;
            }
            this.routeList.push({ "path": route.path, "name": name });
        }
    }
    _buildRoutes(routes) {
        routes.forEach((_route) => {
            let isRoot = routes[1] && !routes[1].hasOwnProperty("path");
            let route = Object.assign({}, _route);
            if (typeof _route.prettifyParam === 'function') {
                route.prettifyParam = _route.prettifyParam;
            }
            this._checkAddRoutes(route, isRoot);
            if (isRoot && route.childRoutes && route.childRoutes.length) {
                let cls = this;
                route.childRoutes.forEach(chilRoute => {
                    cls._checkAddRoutes(chilRoute);
                });
            }
        });

    }

    renderListItem(item) {
        const liAlign = this.props.alignLinks == 'left' ? 'sui-left' : 'sui-right';
        return <li key={uuidV4()} className={liAlign} >  <Link to={item.path} className={this.props.classHyperLink} style={this.props.styleHyperLink} activeClassName="sui-active">{item.name}</Link> </li>;
    }
    renderList() {
        if (this.routeList && this.routeList.length) {
            return this.routeList.map(item => this.renderListItem(item));
        }
        return [];
    }

    handleMobileMenuClick() {
        this.setState(prevState => ({
            showMobileMenu: !prevState.showMobileMenu
        }));
    }
    renderSideMenu() {
        return (
            <ul className={'sui-sidenav ' + this.props.classNavBar} style={this.props.styleNavBar} >
                {this.routeList.map(item => {
                    return <li key={uuidV4()}>  <Link to={item.path} className={this.props.classHyperLink} style={this.props.styleHyperLink} activeClassName="sui-active">{item.name}</Link> </li>;
                })}
            </ul>
        );
    }
    render() {
        this._buildRoutes(this.props.routes);
        let indexContent;
        if (this.props.showBothBrandAndLogo && this.props.brandLogoPath) {
            indexContent = <span> <img className={this.props.classBrandLogo} style={this.props.styleBrandLogo} src={this.props.brandLogoPath} alt={this.props.brand ? this.props.brand : ''} />  <span className={this.props.classBrand} style={this.props.styleBrand}> {this.props.brand}  </span> </span>;
        } else if (this.props.brandLogoPath) {
            indexContent = <img className={this.props.classBrandLogo} style={this.props.styleBrandLogo} src={this.props.brandLogoPath} alt={this.props.brand ? this.props.brand : ''} />;
        } else if (this.props.brand) {
            indexContent = <span className={this.props.classBrand} style={this.props.styleBrand}> {this.props.brand}  </span>;
        } else {
            indexContent = <span className="sui-text-white"> Home  </span>;
        }
        let mobileClass = this.props.showSideNav ? 'sui-navbar' : 'sui-navbar sui-hide-desktop-xl sui-hide-desktop ';
        mobileClass = mobileClass + this.props.classNavBar;
        let deskClass = this.props.showSideNav ? 'sui-hide' : ('sui-navbar sui-hide-mobile sui-hide-tablet ' + this.props.classNavBar);

        return (

            <div>
                <ul className={deskClass} style={this.props.styleNavBar} >
                    <li key={uuidV4()} className="sui-left"> <IndexLink to="/" className={this.props.classHyperLink} style={this.props.styleHyperLink} activeClassName="sui-active"> {indexContent} </IndexLink> </li>
                    {this.renderList()}
                    {this.props.children}
                </ul>
                <ul className={mobileClass} style={this.props.styleNavBar} >
                    <li key={uuidV4()}>
                        <span className={' sui-pointer ' + this.props.classMobileBars} onClick={this.handleMobileMenuClick} > ☰ </span>
                        {indexContent}
                    </li>
                </ul>

                {this.state.showMobileMenu ? this.renderSideMenu() : ''}
            </div>
        );
    }
}
NavBar.propTypes = {
    routes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    brandLogoPath: React.PropTypes.string,
    brand: React.PropTypes.string,
    showBothBrandAndLogo: React.PropTypes.bool,
    alignLinks: React.PropTypes.string,
    showSideNav: React.PropTypes.bool,
    classBrandLogo: React.PropTypes.string,
    styleBrandLogo: React.PropTypes.object,
    classBrand: React.PropTypes.string,
    styleBrand: React.PropTypes.object,
    classMobileBars: React.PropTypes.string,
    styleMobileBars: React.PropTypes.object,
    classNavBar: React.PropTypes.string,
    styleNavBar: React.PropTypes.object,
    classHyperLink: React.PropTypes.string,
    styleHyperLink: React.PropTypes.object,
    children: React.PropTypes.node
};
NavBar.defaultProps = {
    brandLogoPath: '',
    brand: '',
    showBothBrandAndLogo: false,
    showSideNav: false,
    // Allign left or right
    alignLinks: 'right',
    classNavBar: '',
    styleNavBar: {},
    classHyperLink: '',
    styleHyperLink: {},
    classBrandLogo: 'sui-image',
    styleBrandLogo: {},
    classBrand: 'sui-brand',
    styleBrand: {},
    classMobileBars: 'sui-text-white sui-right',
    styleMobileBars: {}
};
export default NavBar;
