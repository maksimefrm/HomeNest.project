import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useGetPropertiesQuery } from "../../Store/api/cardApi";
import { Property } from "../../Store/api/types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Card = () => {
    const { data, error, isLoading } = useGetPropertiesQuery(null);
    const [favorites, setFavorites] = useState<string[]>([])

        // Загружаем избранные из Local Storage при загрузке компонента
        useEffect(() => {
            const savedFavorites = localStorage.getItem('favorites');
            if (savedFavorites) {
                setFavorites(JSON.parse(savedFavorites));
            }
        }, []);
    
        // Обновляем Local Storage при изменении списка избранных
        useEffect(() => {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }, [favorites]);

    if (isLoading) return <div className="loader"></div>;
    if (error) return <div>Error loading properties</div>;

    // Если данных нет, покажем сообщение
    if (!data?.hits?.length) return <div>No properties found</div>;

        // Функция для добавления/удаления из избранного
        const toggleFavorite = (id: string) => {
            if (favorites.includes(id)) {
                setFavorites(favorites.filter(fav => fav !== id)); // Удалить из избранного
            } else {
                setFavorites([...favorites, id]); // Добавить в избранное
            }
        };

    return (
        <div>
            {data.hits.map((property: Property) => (
                <div key={property.externalID} className="card">
                    <div className="imgIcon">
                        <Link to={`/card/${property.externalID}`}>
                            <img src={property?.coverPhoto?.url} alt="Image" />
                        </Link>
                        <button
                            className={`fav ${favorites.includes(property.externalID) ? 'active' : ''}`} // Активный класс
                            onClick={() => toggleFavorite(property.externalID)} // Добавление/удаление из избранного
                        >
                            {favorites.includes(property.externalID) ? <FaHeart size={30} /> : <FaRegHeart size={30} />}
                        </button>
                    </div>
                    <div className="card-content">
                        <div className="new-listing">Score: {property?.score}/100</div>
                        <div className="price">$ {property?.price}</div>
                        <div className="details">{property?.rooms} bed &bull; {property?.baths} bath</div>
                        <div className="address">{property?.title}<br />{property?.location?.[0]?.name}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};
