import React from "react"
import "./directory.styles.scss"
import { MenuItem } from "../menu-item/menu-item.component.jsx"

export class Directory extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: []
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, title, imageUrl, size}) => {
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}></MenuItem>
                    })
                }
            </div>
        )
    }
}