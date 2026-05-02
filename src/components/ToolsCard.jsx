import { use } from "react";

const toolsPromise = fetch('/tools.json').then(res => res.json());

const ToolsCard = () => {
    const tools = use(toolsPromise);

    return (
        <div className="grid grid-cols-3 justify-center">
            {tools.map(tool => (
                <div key={tool.id}>
                    {tool.name}
                </div>
            ))}
        </div>
    );
};

export default ToolsCard;