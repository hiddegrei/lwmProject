import { drop } from "lodash";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../assets/css/Searchbar.css";
import http from "../axios/http";
import { useStateValue } from "../Stateprovider";
import ClearIcon from "@mui/icons-material/Clear";

function Searchbar(classOverride) {
    const [{ user }, dispatch] = useStateValue();
    const service = useParams();
    const history = useHistory();
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState("");

    // useEffect(() => {
    //     fetchAllUsers()
    // }, [])

    // function fetchAllUsers() {
    //     http.get('/allusers').then(res => {
    //         console.log(res.data)
    //         setUsersData(res.data)
    //     })
    // }

    function search(query) {
        http.post(`/services/${query}`)
            .then((res) => {
                setResults(res.data);
            })
            .catch((err) => console.log(err));

        return results;
    }

    useEffect(() => {
        if (query.length <= 0) {
            setResults([]);
        } else if (query.length >= 2) {
            search(query);
        }
    }, [query]);

    return (
        <div className="sbar">
            <input
                placeholder="Search for services"
                className="sbar_input"
                size="7"
                value={query}
                type="search"
                id={"query"}
                onChange={(e) => setQuery(e.target.value)}
            />
            <div className="query-results">
                {" "}
                {results.map((doc) => (
                    <div>
                        <a href={`/services/${doc.servicetype}/${doc.id}`}>
                            {doc.title}
                        </a>
                        <img
                            src={`/storage/${doc.image}`}
                            className="query-image"
                        ></img>{" "}
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Searchbar;
