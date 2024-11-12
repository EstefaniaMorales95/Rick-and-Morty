import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import './ResidentCard.css';

function ResidentCard({ url }) {
	const [resident, setResident] = useFetch();

	useEffect(() => {
		setResident(url);
	}, [url]);

	const status = resident?.status.toLowerCase();
	const statusIcon =
		status === 'alive' ? '🟢' : status === 'dead' ? '🔴' : '⚫️';

	return (
		<div className="card">
			<div className="card__image">
				<img
					className="card__image-img"
					src={resident?.image}
					alt={resident?.name}
				/>
				<span className="card__status">
					{statusIcon}
					{resident?.status}
				</span>
			</div>
			<h3 className="card__name">{resident?.name}</h3>
			<div className="card__info">
				<span className="card__info-item">
					<span className="card__info-label">Spacie</span>
					{resident?.species}
				</span>
				<span className="card__info-item">
					<span className="card__info-label">Origin</span>
					{resident?.origin?.name}
				</span>
				<span className="card__info-item">
					<span className="card__info-label">Eppoisodes where appear</span>
					{resident?.episode?.length}
				</span>
			</div>
		</div>
	);
}

export default ResidentCard;
