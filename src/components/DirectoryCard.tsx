import React from 'react';
import { ClubTags } from '../directoryData';

interface DirectoryCardProps {
	name: string;
	description?: string;
	instagram?: string;
	category?: string;
	tags?: string[];
}

const DirectoryCard = ({ name, ...props }: DirectoryCardProps) => {
	return (
		<div className="card">
			<div className="cardTitle">
				<h3>{name}</h3>
				{props?.instagram && (
					<a
						className="cardLink"
						href={`https://www.instagram.com/${props?.instagram}/`}
						target="_blank">
						@{props?.instagram}
					</a>
				)}
			</div>

			{props?.description && (
				<p className="description">{props?.description}</p>
			)}

			<div className="badgeGroup">
				{props?.tags?.map((tag) => (
					<div key={tag} className="badge">
						{tag}
					</div>
				))}
			</div>
		</div>
	);
};

export default DirectoryCard;
