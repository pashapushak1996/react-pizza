import React from "react"
import ContentLoader from "react-content-loader"

export const ItemLoader = () => (
    <ContentLoader
        speed={ 2 }
        width={ 280 }
        height={ 458 }
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        style={ { marginBottom: "65px", marginRight: "35px" } }
    >
        <circle cx="145" cy="115" r="115"/>
        <rect x="0" y="300" rx="6" ry="6" width="280" height="84"/>
        <rect x="1" y="423" rx="6" ry="6" width="77" height="30"/>
        <rect x="128" y="413" rx="20" ry="20" width="150" height="45"/>
        <rect x="5" y="251" rx="6" ry="6" width="280" height="28"/>
    </ContentLoader>
);

