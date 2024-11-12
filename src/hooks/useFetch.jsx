import React, { useState } from 'react';
import axios from 'axios';

function useFetch() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	function dataFetch(url) {
		setLoading(true);
		axios
			.get(url)
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	return [data, dataFetch, loading, error];
}

export default useFetch;
