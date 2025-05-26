import React from "react";

interface iUserQueryProps {
	message?: string
};

const UserQuery = (props:iUserQueryProps) => {
	return (
		<div className="flex gap-2 bg-themeGray-34 p-4 rounded-md">
			<div className="bg-orange-400 rounded-md text-white h-8 p-2 flex items-center">
				GA
			</div>
			<div className="flex-1 items-start justify-start text-white text-start">
				{props.message}
			</div>
		</div>
	);
};

export default UserQuery;