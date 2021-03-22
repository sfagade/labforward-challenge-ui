
import { useState } from 'react';

const NotebookSearch = (props) => {

    const defaultData = {
        searchWord: '',
        notebookWord: ''
    }

    const [form, setForm] = useState(defaultData);

    const handleChange = (event) => {
        const name = event.target.name;
        setForm({
            ...form,
            [name]: event.target.value
        })
    }

    const submitForm = () => {
        props.handleFormSubmit({ ...form })
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="searchWord">Word to Search</label>
                <input
                        value={form.word}
                        name="searchWord"
                        onChange={handleChange}
                        type="text"
                        id="searchWord"
                        required
                        placeholder="Enter word to search for" />
            </div>
            <div className="form-group">
                <label htmlFor="notebookWord">Long Description</label>
                <textarea
                    value={form.longDesc}
                    onChange={handleChange}
                    className="form-control"
                    id="notebookWord"
                    name="notebookWord"
                    required
                    rows="3"></textarea>
            </div>
            <div className="form-group">
                <button onClick={submitForm} type="button" className="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default NotebookSearch;
