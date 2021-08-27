import React from "react"


class PageItemContainer extends React.Component {
    componentDidMount() {
        this.updatePageContent(this.props.pageName);
    }

    componentDidUpdate(prevProps) {
        // console.log("udate", this.props, prevProps)
        if (this.props.pageName !== prevProps.pageName) {
            this.updatePageContent(this.props.pageName);
        }
    }
    updatePageContent(themeObject) {
        /*themeObject{
            colourClass:{
                colourKey:#hexvalue,
                ...
            },
            colourClass2:{...},
            ...
        // }*/
        // const colourClasses = Object.keys(themeObject);

        // colourClasses.forEach(
        //     (colourClass) => {
        //         const colourKeys = Object.keys(themeObject[colourClass]);
        //         colourKeys.forEach(
        //             (colourkey) => {
        //                 const colourCode = themeObject[colourClass][colourkey]
        //                 const cssVariable = `--${colourClass}-${colourkey}`
        //                 // here is where we update the css that is already loaded's variable's values
        //                 document.documentElement.style.setProperty(cssVariable, colourCode);
        //             }
        //         );

        //     }
        // );
        // this.props.children.render()
    }

    render() {
        return (this.props.children);
    }
}

export default PageItemContainer