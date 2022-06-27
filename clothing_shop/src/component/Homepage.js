import React from "react";
import BgHome from "./BgHome";
import CategoryHome from "./CategoryHome";

export default function Homepage({category}){
    return(
        <div className="home-page">
            <BgHome/>
            <CategoryHome category = {category}/>
        </div>
    )
}