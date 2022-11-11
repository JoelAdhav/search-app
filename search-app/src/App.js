import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import AdCard from './components/AdCard';

function App() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(
                `http://localhost:5000/ads?search=${search}`
            );
            setData(res.data);
        };

        fetchData();
    }, [search]);
    return (
        <div className='container'>
            <input
                type='text'
                placeholder='Search'
                className='search'
                onChange={e => setSearch(e.target.value)}
            />
            <div className='cards'>
                {data.map(data => (
                    <AdCard
                        key={data.companyName}
                        title={data.companyName}
                        headline={data.headline}
                        image={data.image}
                        primaryText={data.primaryText}
                        description={data.description}
                        url={data.url}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
