import React from 'react'
import { Link } from 'react-router-dom'

const getTitle = (note) => {
    let title = note.body.split('\n')[0]
    if (title.length > 45) {
        return title.slice(0, 45)
    }
    return title
}

const getTime = (note) => {
    let time = note.updated
    return new Date(time).toLocaleDateString()
}

const getContent = (note) => {
    let title = getTitle(note)
    let content = note.body.replaceAll('/n', '')
    content = content.replaceAll(title, '')
    if (content.length > 45) {
        return content.slice(0, 45) + '...'
    }
    return content
}

const ListItem = ({ note }) => {
    return (
        <div>
            <Link to={`/note/${note.id}`}>
                <div className='notes-list-item'>
                    <h3> {getTitle(note)} </h3>
                    <p><span>{getTime(note)} {getContent(note) ? '-' : null} {getContent(note)}</span></p>
                </div>
            </Link>
        </div>
    )
}

export default ListItem;