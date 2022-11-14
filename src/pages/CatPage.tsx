import React, {useEffect, useMemo, useState} from "react";
import facade from "../api/apiFacade";
import LoadingSpinner from "../components/LoadingSpinner";
import WeatherNCat from "../types/entities/weatherNCat";

function CatPage() {
    const [data, setData] = useState<WeatherNCat>();

    const getData = async () => {
        const newData = await facade.fetchWeatherNCat();
        if (newData) setData(newData);
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <h2 className="text-2xl font-extrabold">Lots of Cats</h2>
            {!data ? (
                <LoadingSpinner/>
            ) : (
                <img className="rounded-lg" height={"100px"} width={"200px"} src={data?.cat.url}/>
            )}
            <button className={"rounded-full"} onClick={() => {
                getData();
            }}>Another cat</button>
        </div>
    );
}

export default CatPage;
