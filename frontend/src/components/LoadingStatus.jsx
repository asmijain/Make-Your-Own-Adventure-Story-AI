function LoadingStatus({theme}) {
    return (
        <div className="page-card loading-stage">
            <div className="quill-wrap">
                <div className="quill-ring"></div>
                <span className="quill-glyph">🖋️</span>
            </div>

            <h2>Generating Your {theme} Story</h2>
            <p className="page-lede">The quill is moving — your tale is taking shape.</p>

            <div className="ink-dots">
                <span></span><span></span><span></span>
            </div>
        </div>
    )
}

export default LoadingStatus;
