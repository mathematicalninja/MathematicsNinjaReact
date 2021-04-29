import React from "react";


class SiteNavigation extends React.Component {
    constructor(props) {
        super(props)
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
        for (let internalRefrence of DataStructure) {
            navigationBarItems.push(
                <button
                    onClick={() =>
                        // console.log(internalRefrence)

                        this.choosePage(internalRefrence)
                    }
                    key={internalRefrence}
                >
                    {internalRefrence}
                </button >
            )
        }
        return <div>{navigationBarItems}</div>
    }
    renderSubMenue(SubDataStructure) {
        let subMenueItems = [];
        return <div>{subMenueItems}</div>
    }
    render() {
        return <div>Here's where the Nav Bar goes.

        {this.renderNavigationBar(this.state.menueItems)}</div>
    }
}

export default SiteNavigation