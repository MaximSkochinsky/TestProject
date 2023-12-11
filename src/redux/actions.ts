import { Dispatch } from "redux"
import { DELETE_TAG, 
        SAVE_EDIT_NOTE, 
        EDIT_NOTE_BODY_VALUE, 
        EDIT_NOTE_TAGS_VALUE, 
        HIDE_WARNING, 
        SAVE_TAG, 
        SET_EDIT_NOTE, 
        SET_EDIT_NOTE_VALUES, 
        SHOW_WARNING, 
        TAG_SETUP_INPUT_VALUE, 
        DELETE_NOTE, 
        ADD_EDIT_CLICKED_TAG, 
        SET_CREATE_NOTE_VALUES,
        CREATE_NOTE_TAGS_VALUE,
        CREATE_NOTE_BODY_VALUE,
        ADD_CREATE_CLICKED_TAG,
        SAVE_CREATE_NOTE,
        SET_TAG_ACTIVE,
        SET_NOTES_ACTIVE,
        CLEAR_ACTIVE_TAGS} from "./constants"


export const tagSetupInputValue = (value: any) => {
    return {
        type: TAG_SETUP_INPUT_VALUE,
        payload: value
    }
}


export const saveTag = () => {
    return {
        type: SAVE_TAG
    }
}


export const showWarning = () => {
    return {
        type: SHOW_WARNING
    }
}


export const hideWarning = () => {
    return {
        type: HIDE_WARNING
    }
}


export const warningMessage = (dispatch : Dispatch) => {
    return () => {
        dispatch(showWarning());
        setTimeout(() => {
            dispatch(hideWarning());
        }, 1500)
    }
}


export const deleteTag = (index: any) => {
    return {
        type: DELETE_TAG,
        payload: index
    }
}


export const setEditNote = (id: any) => {
    return {
        type: SET_EDIT_NOTE,
        payload: id
    }
}


export const setEditNoteValues = (id?: any) => {
    return {
        type: SET_EDIT_NOTE_VALUES,
    }
}


export const editNoteTagsValue = (value: any) => {
    return {
        type: EDIT_NOTE_TAGS_VALUE,
        payload: value
    }
}


export const editNoteBodyValue = (value: any) => {
    return {
        type: EDIT_NOTE_BODY_VALUE,
        payload: value
    }
}


export const addEditClickedTag = (tag: any) => {
    return {
        type: ADD_EDIT_CLICKED_TAG,
        payload: tag
    }
}


export const saveEditNote = (tags: string, body: string) => {
    return {
        type: SAVE_EDIT_NOTE,
        payload: getTags(tags,body),
    }
}


export const deleteNote = (id: any) => {
    return {
        type: DELETE_NOTE,
        payload: id
    }
}


export const setCreateNoteValues = () => {
    return {
        type: SET_CREATE_NOTE_VALUES,
    }
}


export const createNoteTagsValue = (value: any) => {
    console.log(value)
    return {
        type: CREATE_NOTE_TAGS_VALUE,
        payload: value
    }
}


export const createNoteBodyValue = (value: any) => {
    return {
        type: CREATE_NOTE_BODY_VALUE,
        payload: value
    }
}


export const addCreateClickedTag = (tag: any) => {
    return {
        type: ADD_CREATE_CLICKED_TAG,
        payload: tag
    }
}

export const setNoteActive = () => {
    return { type: SET_NOTES_ACTIVE, payload: [] }
}


export const saveCreateNote = (tags: any , body: any) => {
    return {
        type: SAVE_CREATE_NOTE,
        payload: getTags(tags,body)
    }
}



export const setTagActive = (tag: any) => {
    return {
        type: SET_TAG_ACTIVE,
        payload: tag
    }
}


export const clearActiveTags = () => {
    return {
        type: CLEAR_ACTIVE_TAGS
    }
}


const getTags = (tags: string, body: string) => {
    console.log(tags)
    const tagsArr = tags ? tags.split(',').map((item : string) => item.replace(/[^a-zа-яё0-9]+/gi, '')).filter((item : string) => item !== '') : null;
    
    const bodyTagsArr = body.match(/\B(#[a-zа-яё0-9]+)(\s|!|\?|\.|,|\]|$)/ig)
        ? body.match(/\B(#[a-zа-яё0-9]+)(\s|!|\?|\.|,|\]|$)/ig)?.map((item : string) => item.replace(/[^a-zа-яё]/gi, '')).filter((item : string) => item !== '') 
        : null;
  

    if(!tagsArr && bodyTagsArr) {
        return [...new Set(bodyTagsArr)]
    }
    if(tagsArr && !bodyTagsArr) {
        return [...new Set(tagsArr)]
    }
    if(!tagsArr && !bodyTagsArr) {
        return []
    }
    if (bodyTagsArr) return [...new Set(tagsArr?.concat(bodyTagsArr))]
}