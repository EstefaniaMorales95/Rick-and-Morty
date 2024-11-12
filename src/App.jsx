import { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import CardInfo from './components/CardInfo';
import ResidentsList from './components/ResidentsList';
import Search from './components/Search';
import './App.css';

function App() {
	const [location, setLocation] = useFetch();
	const [locationId, setLocationId] = useState(1);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const itemsPerPage = 5;

	useEffect(() => {
		setLocation(`https://rickandmortyapi.com/api/location/${locationId}`);
	}, [locationId]);

	const totalItems = location?.residents ? location.residents.length : 0;
	const maxPage = Math.ceil(totalItems / itemsPerPage);

	const currentPageItems = location?.residents
		? location.residents.slice((page - 1) * itemsPerPage, page * itemsPerPage)
		: [];

	const onPrev = () => {
		if (page > 1) setPage(page - 1);
	};
	const onNext = () => {
		if (page < maxPage) setPage(page + 1);
	};

	return (
		<>
			<div className="hero" />
			<div className="container">
				<Search setLocationId={setLocationId} />
				<CardInfo location={location} />
				<ResidentsList residents={currentPageItems} />
			</div>
			<br />
			<div className="pagination">
				<button
					className="pagination__btn"
					onClick={onPrev}
					disabled={page === 1}
				>
					Anterior
				</button>
				<span className="pagination__pg">
					Página {page} / {maxPage}
				</span>
				<button
					className="pagination__btn"
					onClick={onNext}
					disabled={page === maxPage}
				>
					Siguiente
				</button>
			</div>
		</>
	);
}

export default App;
