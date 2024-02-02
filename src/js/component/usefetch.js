import React, { useState, useEffect } from "react"

const url = "https://pokeapi.co/api/v2/pokemon/"

export function useFetch(url) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => {
                if (error.name == "AbortError") {
                    console.log("Request cancelled")
                } else {
                    setError(error)
                }
            })
            .finally(() => setLoading(false))
    }, []);

    return { data, loading, error, }

}

// EN APP.JS => const {data, loading, error, handleCancelRequest} = useFetch('https://playground.4geeks.com/apis/fake/todos/user/tomasbeckmann')
// <button onClick={handleCancelRequest}> Cancel Request </button>