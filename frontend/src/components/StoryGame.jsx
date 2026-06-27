import {useState, useEffect} from 'react';

function StoryGame({story, onNewStory}) {
    const [currentNodeId, setCurrentNodeId] = useState(null);
    const [currentNode, setCurrentNode] = useState(null)
    const [options, setOptions] = useState([])
    const [isEnding, setIsEnding] = useState(false)
    const [isWinningEnding, setIsWinningEnding] = useState(false)
    const [depth, setDepth] = useState(0)   // ← NEW: purely additive chapter counter

    useEffect(() => {
        if (story && story.root_node) {
            const rootNodeId = story.root_node.id
            setCurrentNodeId(rootNodeId)
            setDepth(0)
        }
    }, [story])

    useEffect(() => {
        if (currentNodeId && story && story.all_nodes) {
            const node = story.all_nodes[currentNodeId]

            setCurrentNode(node)
            setIsEnding(node.is_ending)
            setIsWinningEnding(node.is_winning_endig)

            if (!node.is_ending && node.options && node.options.length > 0) {
                setOptions(node.options)
            } else {
                setOptions([])
            }
        }
    }, [currentNodeId, story])


    const chooseOption = (optionId) => {
        setCurrentNodeId(optionId)
        setDepth(d => d + 1)   // ← NEW
    }

    const restartStory = () => {
        if (story && story.root_node) {
            setCurrentNodeId(story.root_node.id)
            setDepth(0)   // ← NEW
        }
    }

    return (
        <div className="page-card story-page">
            <p className="story-chapter">Chapter {depth + 1}</p>
            <h2 className="story-title">{story.title}</h2>

            {currentNode && (
                <div className="story-node" key={currentNodeId}>
                    <p>{currentNode.content}</p>

                    {isEnding ? (
                        <div className={`ending-banner ${isWinningEnding ? "win" : "lose"}`}>
                            <span className="ending-icon">{isWinningEnding ? "🏆" : "🕯️"}</span>
                            <div>
                                <h3>{isWinningEnding ? "Congratulations" : "The End"}</h3>
                                <p>{isWinningEnding ? "You found a winning ending." : "Your adventure ends here."}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="story-options">
                            <h3>What will you do?</h3>
                            {options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => chooseOption(option.node_id)}
                                    className="option-btn"
                                >
                                    {option.text}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}

            <div className="story-actions">
                <button onClick={restartStory} className="ghost-btn">
                    ↺ Restart Story
                </button>
                {onNewStory && (
                    <button onClick={onNewStory} className="ghost-btn">
                        + New Story
                    </button>
                )}
            </div>
        </div>
    )
}

export default StoryGame
