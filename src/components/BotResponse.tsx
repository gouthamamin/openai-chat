import React from "react";

interface iBotResponseProps {
	message?: string;
};

const BotResponse = (props: iBotResponseProps) => {
	return (
		<div className="flex gap-2 p-4 rounded-md">
			<div className="bg-blue-600 rounded-md text-white h-8 p-2 flex items-center">
				<img src="./images/openai-icon.png" alt="open ai" />
			</div>
			<div className="flex-1 items-start justify-start text-white text-start">
				{props.message}
			</div>
		</div>
	);
};

export default BotResponse;
