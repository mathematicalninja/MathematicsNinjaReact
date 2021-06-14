import React from "react";


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
                "marginTop": "2vh",
                "marginBottom": "2vh",
                "backgroundColor": "var(--Primary-5)",
                "color": "var(--Grey-0)",
                "fontSize": "xx-Large",
                "padding": 23,

                // Light Outside, Dark inside
                // better for full page
                "boxShadow":
                    "inset var(--Secondary-0) 0 0 0 5px," +
                    "inset var(--Secondary-1) 0 0 0 6px," +
                    "inset var(--Secondary-2) 0 0 0 10px," +
                    "inset var(--Secondary-3) 0 0 0 11px," +
                    "inset var(--Secondary-4) 0 0 0 16px," +
                    "inset var(--Secondary-5) 0 0 0 17px," +
                    "inset var(--Secondary-6) 0 0 0 22px," +
                    "inset var(--Secondary-7) 0 0 0 23px",


                // Dark Outside, Light inside
                // better for an element inside a page
                // "boxShadow":
                //     "inset var(--Secondary-7) 0 0 0 5px," +
                //     "inset var(--Secondary-6) 0 0 0 6px," +
                //     "inset var(--Secondary-5) 0 0 0 10px," +
                //     "inset var(--Secondary-4) 0 0 0 11px," +
                //     "inset var(--Secondary-3) 0 0 0 16px," +
                //     "inset var(--Secondary-2) 0 0 0 17px," +
                //     "inset var(--Secondary-1) 0 0 0 22px," +
                //     "inset var(--Secondary-0) 0 0 0 23px",


            },
            "internal-Style": {
                // need vars for width of outside border, and the gap between that and the text e.g. 25px = border (23px) +gap(2px)
                "marginLeft": 23,
                "marginRight": 23,
                "marginTop": 23,
                "marginBottom": 23,
            },

            pageTitleStyle: {
                "textAlign": "center",
                "WebkitTextFillColor": "var(--Secondary-6)",
                "WebkitTextStrokeWidth": "1.5px",
                "WebkitTextStrokeColor": "var(--Grey-0)",
                "borderBottom": "3px double var(--Accent-2)",
                "marginBottom": "0px",
                "marginTop": "0px",
            },
            smallTitleStyle: {
                "WebkitTextFillColor": "var(--Secondary-0)",
                "WebkitTextStrokeWidth": ".5px",
                "WebkitTextStrokeColor": "var(--Secondary-2)",
                "marginBottom": "5px",
                "marginTop": "8px",
            },
            mainTextStyle: {
                "WebkitTextFillColor": "var(--Grey-0)",
                "WebkitTextStrokeWidth": ".5px",
                "WebkitTextStrokeColor": "var(--Grey-2)",
                "textAlign": "justify ",
            },


            endOfSentence: <span> &nbsp;</span>,
            endOfParagraph: <span>{"\n\n"}</span>,
            // section splits are for future updating.
            endOfSection: <div style={{
                "borderBottom": "2px dotted var(--Accent-0)",
                "marginTop": "23px",
                // dashes are not going to the edges.
                "marginLeft": "0",
                "marginRight": "0",

            }} />,
            endOfLastSection: <div style={{
                // "borderBottom": "2px dotted var(--Accent-0)",
                "marginTop": "23px",

            }} />,
        }
    }
    sentenceSplit(paragraph) {
        // unique keys
        let sentenceArray = [];
        for (let index = 0; index < paragraph.length; index++) {
            let sentence = paragraph[index]
            if (index === paragraph.length - 1) {
                sentenceArray.push(<span>{sentence}</span>)
            } else {
                sentenceArray.push(<span>{sentence}{this.state.endOfSentence}</span>)
            }
        }
        // paragraph.forEach(sentence => {

        // });
        return sentenceArray
    }
    paragraphSplit(section) {
        // unique keys
        // add in a no-title option for sections
        let paragraphArray = [<h3 style={this.state.smallTitleStyle}>{section.Title}</h3>];
        for (let index = 0; index < section.Content.length; index++) {
            let paragraph = section.Content[index]
            if (index === section.Content.length) {
                paragraphArray.push(<div>
                    {this.sentenceSplit(paragraph)}{this.state.endOfParagraph}
                </div>)
            } else {
                paragraphArray.push(<div>
                    {this.sentenceSplit(paragraph)}
                </div>)
            }
        }
        return paragraphArray
    }
    sectionSplit(FullText) {
        // unique keys
        let sectionArray = [];

        for (let index = 0; index < FullText.length; index++) {
            let section = FullText[index];
            if (index !== FullText.length - 1) {

                sectionArray.push(<div style={this.state.mainTextStyle}>{this.paragraphSplit(section)}{this.state.endOfSection}</div>)
            } else {
                sectionArray.push(<div style={this.state.mainTextStyle}>{this.paragraphSplit(section)}{this.state.endOfLastSection}</div>)

            }
        }
        return sectionArray
    }
    blogStrucure(blogData) {
        return <div>
            <h1 style={this.state.pageTitleStyle}>{blogData.Meta.Title}</h1>
            <div style={this.state["internal-Style"]}>{this.sectionSplit(blogData.Content)}</div>
        </div>
    }
    getBlog() {
        console.log(this.props)
        let blogData = require(`../../BlogPosts/${this.props.blogName}`)

        let styling = this.state.style
        return (<div style={styling}>
            {this.blogStrucure(blogData)}
        </div>)
    }

    render() {
        // return <div>{this.getBlog(this.props.blogName)}</div>
        return (
            this.getBlog()
        )
    }

}

export default BlogClass