import React from 'react'
import moment from 'moment';
import { Star, MoreHorizontal, Book } from 'react-feather';
import { Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const initial_note = {
    'id': '01',
    'note_icon': <Star size={15} className="filled" color="#FFD700" />,
    'note_title': 'Setup Note how to get new title and this is what i hope and hope this is not to long title',
    'note_content': 'Welcome to the note here, lets get you up started on this. can we do it any longer and see the effect',
    'note_lastupdated': moment().startOf('hour').fromNow(),
    'note_category': 'Notes',
    'note_category_icon': <Book size={15} />
}

const note_icon = (icon) => {
    return icon
}

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.75),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 1),
        },
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

function NoteList() {

    const classes = useStyles();

    return (
        <div className="note-list-container">
            <div className="note-list-header">
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </div>
            <div className="note-list-body">

            <div className="note-list-each">
                    <div className="note-update">
                        <div className="note-updated-time">
                            {initial_note.note_lastupdated.toString().slice(0, 4)}
                        </div>
                        <div className="note-icon">
                            {note_icon(initial_note.note_icon)}
                        </div>
                    </div>

                    <div className="note-outer">

                        <div className="note-context">
                            <div className="note-title text-truncated">
                                {initial_note.note_title}
                            </div>
                        </div>
                        <div className="note-category">
                            <div className="note-category-icon">
                                {note_icon(initial_note.note_category_icon)}
                            </div>
                            <div className="text-truncated">

                                {initial_note.note_content}
                            </div>
                        </div>
                    </div>
                    <div className="note-options">
                        <MoreHorizontal size={15} />
                    </div>
                </div>
                <div className="note-list-each">
                    <div className="note-update">
                        <div className="note-updated-time">
                            {initial_note.note_lastupdated.toString().slice(0, 4)}
                        </div>
                        <div className="note-icon">
                            {note_icon(initial_note.note_icon)}
                        </div>
                    </div>

                    <div className="note-outer">

                        <div className="note-context">
                            <div className="note-title text-truncated">
                                {initial_note.note_title}
                            </div>
                        </div>
                        <div className="note-category">
                            <div className="note-category-icon">
                                {note_icon(initial_note.note_category_icon)}
                            </div>
                            <div className="text-truncated">

                                {initial_note.note_content}
                            </div>
                        </div>
                    </div>
                    <div className="note-options">
                        <MoreHorizontal size={15} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteList

