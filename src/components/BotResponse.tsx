interface iBotResponseProps {
	message?: string;
	isTyping?: boolean;
};

const BotResponse = (props: iBotResponseProps) => {
	return (
		<div className="flex gap-2 p-4 rounded-md">
			<div className="bg-blue-600 rounded-md text-white h-8 p-2 flex items-center">
				<img src="./images/openai-icon.png" alt="open ai" />
			</div>
			<div className="flex-1 items-start justify-start text-white text-start">
				{props.isTyping ? (
					<div className="h-full flex items-center gap-1 animate-pulse">
						<span className="w-2 h-2 bg-white rounded-full"></span>
						<span className="w-2 h-2 bg-white rounded-full"></span>
						<span className="w-2 h-2 bg-white rounded-full"></span>
					</div>
				) : (
					<p>{props.message}</p>
				)}
			</div>
		</div>
	);
};

export default BotResponse;

