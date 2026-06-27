import {useState} from "react"

function ThemeInput({onSubmit}) {
    const [theme, setTheme] = useState("");
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!theme.trim()) {
            setError("Please enter a theme name");
            return
        }

        onSubmit(theme);
    }

    return (
        <div className="page-card theme-card">
            <p className="page-eyebrow">Begin Your Tale</p>
            <h2>Generate Your Adventure</h2>
            <p className="page-lede">Choose a theme, and the quill will write a story shaped around it.</p>

            <form className="theme-form" onSubmit={handleSubmit}>
                <div>
                    <label className="field-label">Theme</label>
                    <input
                        type="text"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        placeholder="e.g. pirates, deep space, a haunted manor..."
                        className={error ? 'input-error' : ''}
                        autoFocus
                    />
                    {error && <p className="field-error">{error}</p>}
                </div>
                <button type="submit" className="submit-btn">
                    Generate Story
                </button>
            </form>
        </div>
    )
}

export default ThemeInput;
