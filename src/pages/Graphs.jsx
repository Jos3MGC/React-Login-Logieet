import React from "react";
import { useUser } from "../UserProvider";

export default function Graph() {

    const userId = useUser();

    return(
        <h1>
            {userId.id}
        </h1>
    )
}