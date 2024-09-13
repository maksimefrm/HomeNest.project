import { FaRegHeart } from "react-icons/fa";
import { useGetPropertiesQuery } from "../../Store/api/cardApi";
import { Property } from "../../Store/api/types";

export const Card = () => {
    const { data, error, isLoading } = useGetPropertiesQuery(null);

    if (isLoading) return <div className="loader"></div>;
    if (error) return <div>Error loading properties</div>;

    // Если данных нет, покажем сообщение
    if (!data?.hits?.length) return <div>No properties found</div>;

    return (
        <div>
            {data.hits.map((property: Property) => (
                <div key={property.id} className="card">
                    <div className="imgIcon">
                        <img src={property?.coverPhoto?.url} alt="Image" />
                        <button className="fav">
                            <FaRegHeart size={30} />
                        </button>
                    </div>
                    <div className="card-content">
                        <div className="new-listing">Оценка: {property?.score}</div>
                        <div className="price">$ {property?.price}</div>
                        <div className="details">{property?.rooms} bed &bull; {property?.baths} bath &bull; {property?.area} sqft</div>
                        <div className="address">{property?.title}<br />{property?.location?.[0]?.name}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};
