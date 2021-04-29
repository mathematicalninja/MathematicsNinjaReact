import React from "react";


class SiteNavigation extends React.Component {
    constructor(props) {
        super(props)
        console.log("SiteNavigation load")
        this.choosePage = props.choosePage
        this.state = {
            menueItems: props.menueItems,
        }
    }
    renderNavigationBar(DataStructure) {
        /* need a good data structure for this so menue items can
            1) have children
            2) have internal AND external names
            3) Have cascading children
        */
        let navigationBarItems = []
        return <div>{navigationBarItems}</div>
    }
    renderSubMenue(SubDataStructure) {
        let subMenueItems = [];
        return <div>{subMenueItems}</div>
    }
    render() {
        return <div>Here's where the Nav Bar goes.</div>
    }
}

export default SiteNavigation