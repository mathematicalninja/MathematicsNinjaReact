import React from "react";
import ColourSwatch from "./ColourSwatch";



class BlogClass extends React.Component {
    /*
    each array push needs to have a unique key associated with it.
    */

    constructor(props) {
        super(props)
        this.state = {
            style: {
                "marginLeft": "2vw",
                "marginRight": "2vw",
                "backgroundColor": "var(--Primary-1)",
                "color": "var(--Grey-0)",
                "fontSize": "xx-Large",
                // "border": "5px solid var(--Secondary-0)",
                "boxShadow":
                    "inset var(--Secondary-0) 0 0 0 5px," +
                    "inset var(--Secondary-1) 0 0 0 6px," +
                    "inset var(--Secondary-2) 0 0 0 10px," +
                    "inset var(--Secondary-3) 0 0 0 11px," +
                    "inset var(--Secondary-4) 0 0 0 16px," +
                    "inset var(--Secondary-5) 0 0 0 17px," +
                    "inset var(--Secondary-6) 0 0 0 22px," +
                    "inset var(--Secondary-7) 0 0 0 23px",
            },
            "internal-Style": {
                marginLeft: 23,
                marginRight: 23,
                "margin-top": 23,
                "margin-bottom": 230,
            },
            pageTitleStyle: {
                "textAlign": "center",

                "-webkit-text-fill-color": "var(--Secondary-6)",
                "-webkit-text-stroke-width": "1.5px",
                "-webkit-text-stroke-color": "var(--Grey-0)",
                // "textShadow": "" +
                //     "1.5px -1.5px 0px var(--Grey-5)," +
                //     "-1.5px -1.5px 0px var(--Grey-5)",
                "border-bottom": "3px double var(--Accent-0)"
            },
            smallTitleStyle: {
                "-webkit-text-fill-color": "var(--Secondary-3)",
                "-webkit-text-stroke-width": "1px",
                "-webkit-text-stroke-color": "var(--Grey-0)",
            },
            mainTextStyle: {
                "-webkit-text-fill-color": "var(--Grey-0)",
                "-webkit-text-stroke-width": ".5px",
                "-webkit-text-stroke-color": "var(--Grey-2)",
                "textAlign": "justify ",
            },
            endOfSentence: <span> &nbsp;</span>,
            endOfParagraph: <span>{"\n\n"}</span>,
            // section splits are for future updating.
            endOfsection: <div style={{
                "border-bottom": "2px dotted var(--Accent-0)",

            }} />
        }
    }
    sentenceSplit(paragraph) {
        let sentenceArray = [];
        paragraph.forEach(sentence => {
            sentenceArray.push(<span>{sentence}{this.state.endOfSentence}</span>)
        });
        return sentenceArray
    }
    paragraphSplit(section) {
        let paragraphArray = [<h3 style={this.state.smallTitleStyle}>{section.Title}</h3>];
        section.Content.forEach(paragraph => {
            paragraphArray.push(<div>
                {this.sentenceSplit(paragraph)}{this.state.endOfParagraph}
            </div>)
        });
        return paragraphArray
    }
    sectionSplit(FullText) {
        let sectionArray = [];
        FullText.forEach(section => {
            sectionArray.push(<div style={this.state.mainTextStyle}>{this.paragraphSplit(section)}{this.state.endOfsection}</div>)
            // if last entry, don't Hoiz break
            // sectionArray.push(<div>{this.paragraphSplit(section)}</div>)
        });
        return sectionArray
    }
    blogStrucure(blogData) {
        return <div>
            <h1 style={this.state.pageTitleStyle}>{blogData.Meta.Title}</h1>
            <div style={this.state["internal-Style"]}>{this.sectionSplit(blogData.Content)}</div>
        </div>
    }
    getBlog(localLocation) {
        let blogData = require("./Structured.json")

        let styling = this.state.style
        return (<div style={styling}>
            {this.blogStrucure(blogData)}
        </div>)
    }

    render() {
        return <div>{this.getBlog()}</div>
    }

}

export default BlogClass