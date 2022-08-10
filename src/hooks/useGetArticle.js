import { useState, useEffect } from 'react';

const useGetArticle = () => {
    const [article, getArticle] = useState([]);
    const [loading, getLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            getArticle([
                {
                    id: 1,
                    title: 'Primer titulo'
                },

                {
                    id: 2,
                    title: 'Segundo titulo'
                },

                {
                    id: 3,
                    title: 'Tercer titulo'
                }
            ]);
            getLoading(false);
        }, 3000);
    }, []);

    return [article, loading];
}

export default useGetArticle;