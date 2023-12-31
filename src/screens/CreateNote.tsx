import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCreateClickedTag, createNoteBodyValue, createNoteTagsValue, saveCreateNote, setCreateNoteValues, setNoteActive, warningMessage } from "../redux/actions";
const EditNote = ({ createScreen }: {createScreen: any}) => {
    const { tagsInputValue, bodyInputValue, availableTags } = useSelector((state: any) => state.app.createNote);
    const warning = useSelector((state: any) => state.app.warning);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setCreateNoteValues())
    }, [dispatch])
    const tagClickHandler = (tag: any) => {
        dispatch(addCreateClickedTag(tag))
    }
    const tagsInputHandler = (event: any) => {
        const value = event.target.value;
        dispatch(createNoteTagsValue(value));
    }
    const bodyInputHandler = (event: any) => {
        const value = event.target.value;
        dispatch(createNoteBodyValue(value));
    }
    const clickSaveHandler = () => {
        if(bodyInputValue) {
            dispatch(saveCreateNote(tagsInputValue, bodyInputValue));
            dispatch(setNoteActive())
            createScreen();
        } else {
            warningMessage(dispatch)
            alert("Body is empty!")
        }        
    }
    return (
        <>
            <div className="tags-h2">
                <h2>Create Note</h2>
                {}
                <div className="icon" onClick={ () => createScreen() } data-testid='exit-svg'>
                    <svg>
                        <use xlinkHref="#exit-icon-48x48"></use>
                    </svg>
                </div> 
            </div>      
            <div className="notes__note add">
                <div className="notes__note-info">
                    <div className="tags-container">
                        <div className="tags-container__tags">
                            {}
                            { availableTags.map(( tag : any) => (<span 
                                key={ tag + '_1' } 
                                data-testid="span"
                                onClick={ () => tagClickHandler(tag) }
                            >{ tag }</span>)) }
                        </div>
                    </div>
                    {}
                    <input 
                        type="text" 
                        className="tag-input"
                        placeholder="type tags here or click above" 
                        data-testid="tags-input" 
                        value={ tagsInputValue }
                        onChange={ (event) => tagsInputHandler(event) }
                    ></input>
                    {}
                    <textarea 
                        type="text" 
                        placeholder="type note here" 
                        data-testid="body-input" 
                        value={ bodyInputValue }
                        onChange={ (event) => bodyInputHandler(event) }
                        style={ warning === true ? { border: '2px solid #f36244' } : { border: '2px solid #f404040' } }
                    ></textarea>
                    <div className="add-note">
                        {}
                        <div className="icon" onClick={ () => clickSaveHandler() }>
                            <svg data-testid="svg-save">
                                <use xlinkHref="#save-icon-48x48"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditNote;